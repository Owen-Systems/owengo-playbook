---
title: 第 7 章：临门一脚——外贸业务端承接、背调与 48 小时分级 SOP
description: 打通投放与外贸销售承接的最后一公里：5 分钟 WhatsApp 破冰公式、3 分钟企业背调、48 小时线索分级 SLA 与 7 天追单节奏。
---

:::tip[章节状态：V0.1 已迁入核心 SOP 草稿（附件 C.3）]
本章已完整迁入初始 SOP 草稿中的“业务员 5 分钟 WhatsApp 破冰英文模板”，并补全 3 分钟背调路径、48 小时线索分级 SLA 与 7 天追单节奏骨架；真实 WhatsApp 对话脱敏截图与背调示范图将在 V0.4 补充。
:::

## 本章解决的核心痛点

广告投放端就算把线索有效率拉到 80% 以上，如果业务员收到群通知后隔半天才发一句干巴巴的 `"Hi, how are you? Can I help you?"`，客户往往已读不回，更不会配合反馈真实采购需求；而业务员如果不及时在表格中标记线索质量，第 5 章的 CAPI 算法回传也会断链。

本章定义投放与外贸业务之间的交接标准动作（SLA）。

---

## 7.1 5 分钟 WhatsApp 破冰公式：核对需求 + PDF 图册 + 轻提问

收到 Make 推送的群机器人卡片后，业务员应直接点击一键 `wa.me` 链接，在 **5 分钟内** 发出包含三个要素的破冰消息：
1. **核对表单上下文**：直接点出对方刚在 Facebook 提交的产品名与预估采购量，证明你是基于具体需求跟进，而非群发垃圾信息；
2. **先交付价值**：同步附上压缩版 2026 B2B 产品图册（PDF）或阶梯报价表，降低客户戒心；
3. **抛出一个低门槛专业轻提问**：围绕物流目的港/邮编、OEM 定制还是标准现货提问，引导客户回复第一句话。

### 业务员 5 分钟 WhatsApp 破冰模板（气动升降桌成品批发示例）

```text
Hi [First Name], this is [Your Name] from [Brand] Factory in Foshan. I just received your wholesale inquiry from Facebook regarding our Pneumatic Mobile Standing Desks (saw your estimated volume is [Volume]). I've attached our 2026 B2B Catalog & Tiered FOB Price List (PDF) right below. Quick question to help me calculate accurate landed costs for [Company Name]: Which port or warehouse zip code do you usually ship to, and are you looking for standard stock colors or custom OEM branding?
```

> 使用时请将 `[First Name]`、`[Your Name]`、`[Brand]`、`[Volume]`、`[Company Name]` 及 `Foshan`、产品名称替换为对应订单与工厂信息。

---

## 7.2 3 分钟企业域名 / LinkedIn 快速背调法

在发送破冰消息前后的 3 分钟内，业务员可结合表单 Q4（`Company Website / LinkedIn / Official Work Email`）快速判断客户分量，避免对大买家用零售话术、或在小散客身上过度消耗报价精力：

1. **官网核验（1 分钟）**：直接访问 Q4 填写的企业官网，查看产品线是否与你匹配、是否已有线上商城或工程案例页、公司邮箱后缀是否与官网域名一致；
2. **LinkedIn 职位核验（1 分钟）**：检索客户姓名 + 公司名，确认发来询盘的对方是 `Founder` / `Procurement Manager` / `Product Manager`，还是普通客服或实习生；
3. **体量与渠道预判（1 分钟）**：观察其网站页脚版权年份、门店数量、合作项目规模或品牌包装调性，预先决定首次报价应侧重 FOB 整柜价、OEM 定制方案还是样品试单方案。

---

## 7.3 48 小时线索分级 SLA（为第 5 章 CAPI 精准喂料）

为守住第 5 章 CAPI 回传的 **7 天黄金窗口**，要求所有线索必须在进入表格后的 **48 小时内** 完成一次明确分级，由业务员或主管在表格“线索质量状态”列更新：

| 分级状态 | 判定标准（业务端动作依据） | 对应 CAPI / 跟进动作 |
| :--- | :--- | :--- |
| **`有效B端 (Qualified)`** | 已核实企业官网/域名或真实 LinkedIn 身份，采购需求明确且符合产品 MOQ 范围，已建立有效沟通或索取目录/报价 | **核心状态**：自动触发第 5 章 Make 反向管道，向 Meta 回传 `QualifiedLead` |
| **`已发报价 (Quoted)`** | 已根据客户目的港、配置要求或 OEM 规格发出正式 PI / 阶梯报价表 | 纳入重点跟进队列，执行 7 天多触点追单 |
| **`无效 (Junk)`** | 明显 C 端个人自用、虚构邮箱/空号无法触达、同行套价或完全无法匹配 MOQ 要求 | 不向 Meta 回传正面转化事件，避免干扰算法 |

---

## 7.4 未回复询盘的 7 天多触点追单节奏

大部分 B 端采购在收到首次报价或 PDF 后不会立刻下单，往往因为内部审批或正在比价而暂时沉默。建议在业务表内建立标准化跟进节律（完整话术占位表见 [模板 12](/b2b-meta-ads/templates/12-whatsapp-scripts-and-sla/)）：

- **Day 0（5 分钟内）**：WhatsApp 破冰 + PDF 图册 + 目的港/OEM 轻提问（同步补发一封同主题企业邮件作双通道备份）；
- **Day 1（24 小时后）**：若未读或已读未回，发送一条车间实拍/质检测试短视频或同区域交付案例（不催单，补充信任证据）；
- **Day 3**：围绕技术细节或物流拼柜/运费方案给出一句具体建议；
- **Day 7**：礼貌确认项目排期，询问当前阶段是否暂停或延后至下一批采购周期，完成本轮归档或转入长期客户培育。

---

## 必备脱敏截图清单（`[Pending]`）

- `[Pending: 待补充真实脱敏素材]` 高回复率 WhatsApp 破冰对话实录（已彻底隐去客户姓名、头像、手机号与报价单明细）
- `[Pending: 待补充真实脱敏素材]` 企业域名与 LinkedIn 快速背调示范截图

---

## 本章配套模板与下一步

- 配套模板：[12 WhatsApp 5 分钟破冰、7 天追单话术与 48h 分级标准书](/b2b-meta-ads/templates/12-whatsapp-scripts-and-sla/)
- 下一步前往：[配套模板库总览（12 份）](/b2b-meta-ads/templates/) 或 [脱敏实战实验区](/b2b-meta-ads/experiments/)
