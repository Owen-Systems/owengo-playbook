---
title: 10 Make + CAPI 正反向配置蓝图与群机器人卡片
description: 对应第 5 章：正向 3 秒群通知蓝图、反向 QualifiedLead CAPI 回传参数规范及飞书/企微群机器人卡片 JSON 模板。
---

> 对应章节：[第 5 章：零代码数据闭环——秒级推送与 CAPI 回传驯化算法](/b2b-meta-ads/chapters/05-nocode-capi-loop/) ｜ 状态：SOP 已就绪（参数源自附件草稿 D，JSON 为占位结构）

## 1. 正向管道：3 秒入库与业务群秒级推送

### 节点连线顺序
1. **BM 前置授权**：在 Business Manager → `Integrations` → `Leads Access` 中给当前连接账号授权读取线索权限；
2. **Module 1（Trigger）**：`Facebook Lead Ads` → `Watch Leads`（选择目标 Page 与条件逻辑 Form）；
3. **Module 2（Data Prep / Set Variables）**：
   - 将 `Phone Number` 拼接为 `'` + 原始号码（写入表格用，防 `+` 报错）；
   - 生成纯数字 WhatsApp 链接：`https://wa.me/` + 去除非数字字符后的号码；
4. **Module 3（Write to Sheet）**：`Google Sheets - Add a Row` 或 `HTTP / 飞书多维表格 API` 新增一行，原样写入 `15~16` 位 `Lead ID`；
5. **Module 4（Group Bot Webhook）**：`HTTP - Make a request`（POST JSON 至飞书或企业微信自定义机器人 Webhook URL）。

### 飞书自定义机器人互动卡片 JSON 占位模板

```json
{
  "msg_type": "interactive",
  "card": {
    "header": {
      "template": "blue",
      "title": {
        "tag": "plain_text",
        "content": "新 B2B 询盘入库 | 请在 5 分钟内破冰"
      }
    },
    "elements": [
      {
        "tag": "div",
        "text": {
          "tag": "lark_md",
          "content": "**公司名称：**{{company_name}}\n**买家身份 (Q1)：**{{q1_business_type}}\n**预估采购量 (Q2)：**{{q2_volume}}\n**背调入口 (Q4)：**{{q4_website_or_work_email}}\n**广告来源：**{{campaign_ad_name}}"
        }
      },
      {
        "tag": "action",
        "actions": [
          {
            "tag": "button",
            "text": {
              "tag": "plain_text",
              "content": "一键在 WhatsApp 联系客户"
            },
            "type": "primary",
            "url": "{{whatsapp_clean_url}}"
          }
        ]
      }
    ]
  }
}
```

*(注：企业微信群机器人可使用 `msgtype: "markdown"` 格式并直接输出 `[点击一键发起 WhatsApp]({{whatsapp_clean_url}})`。)*

---

## 2. 反向管道：48 小时内 `QualifiedLead` CAPI 回传蓝图

### 节点连线顺序与关键参数
1. **Module 1（Trigger）**：监听在线表格更新（`Google Sheets - Watch Changes` 或定时轮询筛选行）；
2. **Router / Filter（防重复双条件过滤）**：
   - 条件 A：`线索质量状态` **等于** `有效B端(Qualified)`
   - 条件 B：`CAPI 回传状态` **为空**（或未标记已回传）
3. **Module 2（CAPI Send）**：`Facebook Conversions API (for CRM)` → `Send Lead Event`（或调用 Graph API `/events` 端点）：
   - **`Dataset ID`**：填入你在 Events Manager 创建的 CRM Dataset ID
   - **`Event Name`**：`QualifiedLead`
   - **`Action Source`**：`system_generated`
   - **`Event Time`**：当前 Unix 时间戳（须在线索产生后 **48 小时内**，最长不超过 **7 天黄金窗口**）
   - **`User Data`**：原样传回 **`Lead ID`**（`15~16` 位），并附带标准化处理的 `Email`、`Phone`
4. **Module 3（Lock Row）**：回传返回成功状态后，立即更新表格 `CAPI 回传状态` 为 `已回传-{{now}}`，防止下次重复发送。

### 算法目标切换检查点
- 累计成功回传 **`30~50` 条** `QualifiedLead` 后，在 Ad Set 将优化目标从 `Maximize number of leads` 切换为 **`Maximize number of conversion leads`**。
