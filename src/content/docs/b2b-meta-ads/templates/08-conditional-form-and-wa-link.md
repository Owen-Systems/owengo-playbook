---
title: 08 高意向条件逻辑英文表单与 WhatsApp 预填链接模板
description: 对应第 4 章：Higher Intent + Conditional Logic Q1–Q4 完整英文题目、分支规则、End Card A/B 文案与 wa.me 链接格式。
---

> 对应章节：[第 4 章：询盘防火墙——高意向条件表单（Conditional Logic）配置实战](/b2b-meta-ads/chapters/04-conditional-lead-form/) ｜ 状态：SOP 已就绪（源自附件草稿 C.1 & C.2）

## 1. 表单基础设置

- **Form Type**：必选 **`Higher Intent`**（启用滑动提交确认；高客单产品可改用带说明页的 `Rich Creative`）
- **Conditional Logic**：**开启（ON）**
- **预填字段（Contact Fields）**：仅保留 **`Full Name`**、**`Phone Number`**、**`Email`**、**`Company Name`**。

---

## 2. Q1–Q4 问题库与条件路由表（可直接复制到 Meta 后台）

| 题号 | 字段类型 | 题目（Question） | 选项（Options） | 跳转逻辑（Logic Routing） |
| :--- | :--- | :--- | :--- | :--- |
| **Q1** | Multiple Choice | `What best describes your business?` | 1. `Importer / Wholesale Distributor`<br/>2. `Retail Chain / E-Commerce Brand`<br/>3. `Commercial / Hospitality Contractor`<br/>4. `Furniture Manufacturer (Sourcing Parts)`<br/>5. `Buying for Personal / Home Office Use` | 选项 1–4 → **Go to Q2**<br/>选项 5 → **Close Form (End Card B)** |
| **Q2** | Multiple Choice | `What is your estimated initial order volume?` | 1. `Full Container Load (20GP/40HQ)`<br/>2. `200 - 500 Units`<br/>3. `50 - 200 Units (Trial MOQ)`<br/>4. `Sample Evaluation for Bulk Order`<br/>5. `Just 1 - 5 Pieces for Personal Use` | 选项 1–4 → **Go to Q3**<br/>选项 5 → **Close Form (End Card B)** |
| **Q3** | Multiple Choice | `Which product line are you primarily sourcing?` | `[按自家品类填写 3~4 个核心产品线，如：Finished Pneumatic Desks / Commercial Frames & Hardware / Custom OEM / Full Catalog]` | 所有选项 → **Go to Q4** |
| **Q4** | Short Answer（手打） | `Please enter your Company Website, LinkedIn, or Official Work Email:` | （留空由买家手动输入） | 提交后进入联系人预填页 → **End Card A** |

*(注：若你的产品不是家具/升降桌，请替换 Q1 选项 4 与 Q2 起订量阶梯。)*

---

## 3. 双结局感谢页（End Cards）与 WhatsApp API 链接

### End Card A（合格 B 端跳转页）

- **Headline**：`Thank You! Your Wholesale Request Is Ready`
- **Description**：`Our export specialist has received your inquiry. Tap below to get our 2026 B2B Catalog & Tiered FOB Price List directly on WhatsApp.`
- **Call-to-Action 按钮类型**：`View Website`（填入下方 `wa.me` 链接）
- **CTA 按钮文字**：`Get Price List on WhatsApp Now`
- **预填话术链接模板**（将 `你的纯数字手机号` 替换为不含 `+` 号和空格的国际区号+号码，例如 `8613800138000`）：

```text
https://wa.me/你的纯数字手机号?text=Hi,%20I%20just%20submitted%20the%20B2B%20form%20on%20Facebook.%20Please%20send%20me%20the%202026%20Wholesale%20Catalog%20and%20MOQ%20Price%20List.%20My%20company%20name%20is:%20
```

### End Card B（C 端散客劝退页）

- **Headline**：`B2B Wholesale & Commercial Projects Only`
- **Description**：`Thank you for your interest. Our factory focuses exclusively on wholesale, OEM/ODM, and commercial bulk orders (MOQ 50+ units) and does not handle single-piece retail orders directly here.`
- **CTA 按钮文字**：`Visit Official Website`（跳转至你的独立站首页或零售渠道页，不给业务员 WhatsApp，也不触发合格 Lead 转化）。
