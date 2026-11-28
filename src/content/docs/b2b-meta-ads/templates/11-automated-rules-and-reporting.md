---
title: 11 赛马止损决策表、自动化规则与 B2B 数据列
description: 对应第 6 章：48–72 小时 ABO 赛马判定、3 套 Meta Automated Rules 完整参数及 B2B 自定义审计报表列。
---

> 对应章节：[第 6 章：科学放量与夜间风控——从 ABO 测试到 CBO 常青池](/b2b-meta-ads/chapters/06-scaling-and-risk-rules/) ｜ 在线工具：[CPQL 与自动化规则阈值计算器](/b2b-meta-ads/tools/cpql-rule-calculator/) ｜ 状态：SOP 已就绪（源自附件草稿 A.2 & A.4）

:::caution[参考阈值校准提示]
下表涉及的具体美元数值（如 `> $45`、`< $35`、`> $50`、`$300`、`$60`）均是基于“目标单条 CPL ≈ $30~$35”示例场景设定的 **参考阈值**。在账户后台配置前，务必按你自身产品的真实目标 CPL 按比例重算。
:::

## 1. ABO 冷启动 48~72 小时赛马裁决表

| 观察场景 | 触发条件（参考阈值） | 执行动作 |
| :--- | :--- | :--- |
| **无效素材止损** | 单条素材消耗达 `1~1.5 倍目标 CPL` 且 `0` 表单，同时 `CTR < 0.8%` | 直接关停该条素材，释放预算给同组其他素材 |
| **常规保留观察** | 有表单产生但有效率尚不足 3 条，且消耗可控 | 继续观察至 `72 小时` 完整周期 |
| **胜出晋级放量** | 稳定跑出 `3~5` 个合格 B 端线索 | 提取 `Post ID`（两种方法见第 6 章），通过 `Use Existing Post` 迁入 CBO 常青池 |
| **CBO 常青池疲劳替换** | 池内某条素材 `Frequency > 2.5~3.0` 且 `CPL` 连续 3 天上涨 | 关停该疲劳素材，从 ABO 池补入新胜出 `Post ID` |

---

## 2. Meta 后台 3 套自动化规则（Automated Rules）参数表

| 规则名称 | Apply rule to（范围） | Action（动作） | Conditions（条件组合） | Schedule（运行频率） |
| :--- | :--- | :--- | :--- | :--- |
| **规则 1：夜间/日常止损** | All active ads（所有投放中广告） | **Turn off ads**（关闭广告） | `Today Spend > 1.5x 目标 CPL`（参考：`> $45`）**AND** `Leads < 1` | **Continuously**（连续监控运行） |
| **规则 2：CBO 自动阶梯加预算** | 指定 CBO 放量系列 | **Increase daily budget by 15%**<br/>上限参考：`$300`；Action frequency：`Once daily` | `Last 3 days (excluding today) Leads > 3` **AND** `CPL < 目标线`（参考：`< $35`）**AND** `Frequency < 2.5` | **Custom**：每天上午 `08:00` |
| **规则 3：成本劣变降级保护** | 指定 CBO 放量系列 | **Decrease daily budget by 15%**<br/>下限参考：`$60`；Action frequency：`Once daily` | `Last 3 days CPL > 劣变线`（参考：`> $50`）**AND** `Spend > $80` | **Daily**（每日定时检查） |

---

## 3. B2B 自定义数据列（Ads Manager Customize Columns）

建议按以下从上到下的顺序保存为团队默认列预设 `B2B_Audit_View`：

1. `Delivery`（投放状态）
2. `Budget`（当前预算）
3. `Amount Spent`（花费）
4. `CPM (Cost per 1,000 Impressions)`（千次展示成本）
5. `CTR (Link Click-Through Rate)`（链接点击率）
6. `3-Second Video Plays` / `Hook Rate`（自定义指标：3 秒播放数 ÷ 展示数）
7. `Leads`（前端表单数）
8. `Cost per Lead`（前端表观 CPL）
9. `Qualified Leads`（对应 CAPI 回传后的自定义转化事件）
10. `Cost per Qualified Lead (CPQL)`（自定义指标：花费 ÷ Qualified Leads）
11. `Frequency`（频次，防疲劳）
