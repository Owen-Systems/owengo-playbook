---
title: 第 4 章：询盘防火墙——高意向条件表单（Conditional Logic）配置实战
description: 通过 Higher Intent、条件逻辑硬拦截、手打官网/邮箱题与双结局感谢页，阻止 C 端散客提交并污染像素。
---

:::tip[章节状态：V0.1 已迁入核心 SOP 草稿（附件 C.1–C.2）]
本章已完整迁入初始 SOP 草稿中的高意向条件逻辑表单英文问题库（Q1–Q4）、分支跳转规则、预填字段控制与双结局 End Card 配置方案。后台配置截图与开启前后实测有效率对比留待 V0.2 补充。
:::

## 本章解决的核心痛点

即使前 3 秒视频已经拦截了大部分 C 端用户，依然会有少量好奇散客点开“Learn More”。如果使用 Meta 默认的低摩擦表单，用户只需点两下自动填充的旧 Gmail 邮箱即可完成提交——系统会立刻判定为一次成功的 `Lead`，进而继续向同类型误触人群扩量。

本章通过在 Meta 即时表单（Instant Form）内部架设四道“条件逻辑防火墙”，实现**让不合格散客无法触发像素转化事件，同时让合格大 B 在提交后秒级带着公司信息跳转 WhatsApp**。

---

## 4.1 放弃 More Volume，死磕 Higher Intent 与 Rich Creative

在创建 Meta Instant Form 时，Form Type 必须做出明确取舍：
- **弃用 `More Volume`（更多数量）**：提交按钮极易被手滑触发，没有任何二次确认摩擦；
- **必选 `Higher Intent`（更高意向）**：在最终提交前增加 **“滑动提交确认（Slide to Submit）”** 步骤，大幅减少海外用户刷手机时的无意识误触；
- **按需搭配 `Rich Creative`（富创意型）**：当产品单价较高或需要解释工厂实力时，可在表单首屏加入工厂照片、交付流程或产品核心参数模块，过滤掉“只看图不看字”的浅层点击。

---

## 4.2 条件逻辑硬拦截（Conditional Logic ON）

开启条件逻辑后，前两道选择题（Q1 与 Q2）专门充当“守门员”。一旦用户勾选个人自用或低于最小起订量（MOQ），表单立即执行 `Close Form` 跳转至劝退页（End Card B），**从而阻断像素将该次操作计为 `Lead` 转化**。

### Q1–Q4 完整英文问题库与路由规则（示例：气动桌产线）

| 题号 | 题型 | 英文题目与选项配置 | 逻辑路由动作 |
| :--- | :--- | :--- | :--- |
| **Q1** | Multiple Choice（单选） | **What best describes your business?**<br/>1. Importer / Wholesale Distributor<br/>2. Retail Chain / E-Commerce Brand<br/>3. Commercial / Hospitality Contractor<br/>4. Furniture Manufacturer (Sourcing Parts)<br/>5. Buying for Personal / Home Office Use | 选项 1–4 → **Go to Q2**<br/>选项 5 → **Close Form（跳转 End Card B 劝退页）** |
| **Q2** | Multiple Choice（单选） | **What is your estimated initial order volume?**<br/>1. Full Container Load (20GP/40HQ)<br/>2. 200 - 500 Units<br/>3. 50 - 200 Units (Trial MOQ)<br/>4. Sample Evaluation for Bulk Order<br/>5. Just 1 - 5 Pieces for Personal Use | 选项 1–4 → **Go to Q3**<br/>选项 5 → **Close Form（跳转 End Card B 劝退页）** |
| **Q3** | Multiple Choice（单选） | **Which product line are you primarily sourcing?**<br/>（按自家业务拆分：如 Finished Pneumatic Desks / Commercial Desk Frames & Hardware / Custom OEM Tooling / Full Catalog） | 所有选项 → **Go to Q4** |
| **Q4** | **Short Answer（强制手打）** | **Please enter your Company Website, LinkedIn, or Official Work Email:** | 填完后进入联系方式预填页 → 最终滑动提交 → **End Card A（合格 B 端）** |

> 提示：具体行业与起订量选项（如 `50 - 200 Units`）请按自家产品实际情况修改；可复制配置表见 [模板 08](/b2b-meta-ads/templates/08-conditional-form-and-wa-link/)。

---

## 4.3 用 1 道手打简答题打破陈旧自动填充，筛出真实 B 端

Meta 即时表单默认会从用户早年注册 Facebook 时留下的信息中自动抓取 `Email` 与 `Phone Number`——许多采购商注册个人号用的是十年前废弃的 Yahoo/Hotmail 邮箱，导致业务员跟进时频繁退信。

因此本章执行两项关键动作：
1. **严格精简预填字段（Contact Fields）**：仅保留 4 个核心字段：**`Full Name`**、**`Phone Number`**、**`Email`**、**`Company Name`**，剔除不必要的地址、邮编等冗余抓取字段；
2. **前置 1 道强制手打简答题（Q4）**：要求填写公司网站、LinkedIn 主页或官方工作邮箱。愿意花 10 秒手打官网网址或工作邮箱的询盘，极大概率具备真实商业采购需求；且业务员可直接据此完成第 7 章的 3 分钟快速背调。

---

## 4.4 双结局感谢页（End Cards）配置

根据条件逻辑的路由结果，表单出口必须配置截然不同的两个结局页：

### End Card A（合格 B 端专属）
- **核心目标**：趁热打铁，利用即时需求窗口直接把高意向客户引导到业务员 WhatsApp 对话框，实现“填完表单即聊单”。
- **CTA 按钮文案**：`Get Price List on WhatsApp Now`
- **跳转链接格式**（替换为你自己的纯数字国际区号 + 手机号，去掉 `+` 和空格）：
  ```text
  https://wa.me/你的纯数字手机号?text=Hi,%20I%20just%20submitted%20the%20B2B%20form%20on%20Facebook.%20Please%20send%20me%20the%202026%20Wholesale%20Catalog%20and%20MOQ%20Price%20List.%20My%20company%20name%20is:%20
  ```

### End Card B（C 端劝退专属）
- **适用对象**：在 Q1 选择个人自用，或在 Q2 选择 `1 - 5 Pieces` 的散客。
- **页面文案要点**：礼貌告知工厂仅承接 B2B 批发与工程采购订单（例如注明起订量参考 `MOQ 50 PCS`），并提示如有意了解品牌或零售渠道，可点击按钮访问独立站官网或零售页面（**不引导至业务员 WhatsApp，也不触发合格 Lead 转化记录**）。

---

## 必备脱敏截图清单（`[Pending]`）

- `[Pending: 待补充真实脱敏素材]` Meta Instant Form 后台开启 `Conditional Logic` 与设置 `Close Form` 分支的界面截图
- `[Pending: 待补充真实脱敏素材]` End Card A（WhatsApp 引导）与 End Card B（C 端劝退）手机端预览对比图
- `[Pending: 待补充真实脱敏素材]` 开启条件逻辑拦截前后的表单有效率与有效线索成本（CPQL）真实对比记录

---

## 本章配套模板与下一步

- 配套模板：[08 高意向条件逻辑英文表单与 WhatsApp 预填链接模板](/b2b-meta-ads/templates/08-conditional-form-and-wa-link/)
- 下一章：[第 5 章：零代码数据闭环——秒级推送与 CAPI 回传驯化算法](/b2b-meta-ads/chapters/05-nocode-capi-loop/)
