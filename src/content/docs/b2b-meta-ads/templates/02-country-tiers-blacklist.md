---
title: 02 国家梯队与必排黑名单清单
description: 对应第 2 章：Tier 1/2/3 国家分梯队隔离表、冷启动参考日预算与强制排除流量黑洞国家代码清单。
---

> 对应章节：[第 2 章：防跑偏基建与冷启动沙盒](/b2b-meta-ads/chapters/02-account-and-sandbox/) ｜ 状态：SOP 已就绪（源自附件草稿 A.1）

:::caution[预算说明]
下表日预算金额均为冷启动 ABO 测试 **参考阈值**，实盘请结合自身产品利润率、目标 CPL 及账户日消耗上限调整。
:::

## 1. 国家分梯队配置总表

| 梯队划分 | 覆盖国家 / 地区 | 投放重点与日预算（参考阈值） | 必设排除项与语言限制 |
| :--- | :--- | :--- | :--- |
| **Tier 1（核心高客单）** | US, CA, GB, AU, NZ | 客户看重专业度、合规认证与交付能力，毛利较厚。ABO 测试建议 **`$40~$50/组/天`**（参考阈值） | 全球或大区混投时强制排除黑名单 6 国 |
| **Tier 2（高潜力溢价）** | 欧洲核心国（DE, FR, NL, IT, ES, 北欧）、中东 GCC（AE, SA）、日韩新（JP, KR, SG） | 中东重工程交付与 WhatsApp 沟通；欧洲重环保与合规。ABO 测试建议 **`$25~$35/组/天`**（参考阈值） | 同上排除黑名单；中东 GCC 建议语言锁定 **`English (All)` + `Arabic`**，过滤南亚劳工群体 |
| **Tier 3（新兴走量）** | 墨西哥（MX）、巴西（BR）、智利（CL）、越南（VN）、泰国（TH）、马来西亚（MY）、中亚 | 适合推标准品、常规现货或招区域代理，表观 CPL 相对更低 | 排除低转化岛国及外汇管制严重、难以结汇的地区 |

## 2. 一键复制参考列表（Ads Manager 粘贴用）

### 必排低质流量黑名单（Excluded Locations）

```text
India, Pakistan, Bangladesh, Nigeria, Philippines, Egypt
```

*(对应 ISO 代码：`IN, PK, BD, NG, PH, EG` — 仅在投特定本地工程/OEM 专项且能严格使用独立组管控预算时才可单独拆分，绝不可留在欧美/中东混投组中。)*

### Tier 1 核心国家包

```text
United States, Canada, United Kingdom, Australia, New Zealand
```

### Tier 2 欧洲核心 & GCC 常见拆分包

```text
# 欧洲核心组（按语种或区位可再拆分）
Germany, France, Netherlands, Italy, Spain, Sweden, Norway, Denmark, Finland

# 中东 GCC 工程组（务必加设语言过滤：English (All) + Arabic）
United Arab Emirates, Saudi Arabia, Qatar, Kuwait, Oman, Bahrain
```
