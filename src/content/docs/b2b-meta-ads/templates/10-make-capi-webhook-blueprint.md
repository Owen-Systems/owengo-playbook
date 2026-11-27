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

---

## 3. 海外栈（Google Sheets）vs 国内团队栈（飞书多维表格）选型与对接要点

| 对接环节 | 海外栈：`Make + Google Sheets` | 国内栈：`Make + 飞书多维表格` |
| :--- | :--- | :--- |
| **正向入库** | 直接用 Make 官方 `Google Sheets - Add a Row` 模块，电话列开启 `VALUE` 原样输入并在前方拼接 `'` | Make 通过 `HTTP` 模块调用飞书 `tenant_access_token` + 多维表格新增记录 API（或通过飞书机器人/集简云/n8n 接收 Webhook 写入） |
| **反向触发 CAPI** | Make 使用 `Google Sheets - Watch Changes` 或定时筛选 `Qualified` 且未回传的行 | 推荐在飞书多维表格内配置 **“自动化流程：当字段状态改为 `有效B端(Qualified)` 且 `CAPI 状态` 为空时 → 发送 HTTP POST 至 Make Custom Webhook”**，零轮询延迟极低 |
| **格式避坑重点** | 把 `Meta Lead ID` 所在整列格式预先设为 **Plain Text（纯文本）** | 飞书多维表格 `Meta Lead ID` 字段务必选用 **文本类型**，禁止使用“数字”字段（防 16 位精度丢失） |

---

## 4. 上线前 4 步实测验收清单

- [ ] **01 授权核验**：BM → `Integrations` → `Leads Access` 已勾选当前连接的 Make 应用及对应操作账号。
- [ ] **02 模拟发单**：在 Meta **Lead Ads Testing Tool** 选择目标 Page 与条件逻辑 Form 提交一条模拟线索。
- [ ] **03 正向落库核对**：记录实际入库耗时，核对文本类型的 `Meta Lead ID` 与来源值逐字符一致，WhatsApp 清洗公式生成有效链接，群机器人卡片正常到达。
- [ ] **04 反向连通核对**：将测试行改为 `有效B端(Qualified)`，Make 调用 CAPI 返回 HTTP `200`（`events_received: 1`），且表格 `CAPI 回传状态` 自动锁定为“已回传”，再次触发不会重复发送。
