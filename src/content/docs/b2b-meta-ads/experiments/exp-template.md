---
title: 标准实验记录模板（EXP-YYYYMM-NN）
description: 用于记录单变量 Meta B2B 投放对照实验的标准化脱敏模板（严格要求 [Observed] 实盘数据，禁止虚构数值）。
---

> 使用方法：新增实盘实验时，在 `src/content/docs/b2b-meta-ads/experiments/` 下复制本文件为 `exp-YYYYMM-NN.md`，填入脱敏后的实测数据（标记 `[Observed]`），并在 `astro.config.mjs` 侧边栏与 `changelog.md` 同步登记。

---

## 实验基本信息

- **实验编号**：`EXP-YYYYMM-NN`
- **状态**：`[进行中 / 已结案]`
- **关联章节 / 模板**：`[例如：第 4 章 / 模板 08]`
- **行业与产品大类（脱敏）**：`[例如：商用办公家具 / 工业机械设备，不写品牌名]`
- **目标市场梯队**：`[例如：Tier 1 - US]`
- **观测时间窗口**：`[YYYY-MM-DD 至 YYYY-MM-DD]`

---

## 1. 实验假设（Hypothesis）

> 在保持其他条件不变的前提下，把 **【变量 X】** 从 A 改为 B，预期会导致 **【指标 Y】** 发生什么变化，原因是什么？

- **对照组（Control / A）**：`[描述原始设置]`
- **实验组（Treatment / B）**：`[描述唯一改动变量]`

---

## 2. 实验设置核对（脱敏）

- **预算模式与参考日预算**：`[ABO / CBO，日预算脱敏区间]`
- **受众与版位边界**：`[Broad / 年龄 28-65+ / Feed+Reels / 排除黑名单]`
- **落地载体与回传状态**：`[Conditional Logic Instant Form / 是否已开启 CAPI QualifiedLead]`

---

## 3. 实测数据对比（`[Observed]` — 严禁虚构）

> **注意**：下表所有数值必须源自真实导出的脱敏报表，未产出数据时保持 `[Pending]`。

| 指标维度 | 对照组 (A) `[Observed]` | 实验组 (B) `[Observed]` | 差异说明与统计置信备注 |
| :--- | :--- | :--- | :--- |
| **总花费区间（脱敏）** | `[Pending]` | `[Pending]` | 须注明样本是否达到有效对比基准 |
| **CPM / CTR** | `[Pending]` | `[Pending]` | — |
| **前端表单数（Leads）** | `[Pending]` | `[Pending]` | — |
| **表观 CPL** | `[Pending]` | `[Pending]` | — |
| **合格 B 端数（Qualified）** | `[Pending]` | `[Pending]` | 依据第 7 章 48h 分级标准 |
| **有效 B 端率 & CPQL** | `[Pending]` | `[Pending]` | 核心评估指标 |

### 脱敏截图附件槽位

- `[Pending: 待补充真实脱敏素材]` 对照组 vs 实验组后台指标对比脱敏截图（已遮盖 Ad Account ID 与具体客户名称）

---

## 4. 结论与 SOP 回写动作

- **实验结论**：`[成立 / 不成立 / 样本不足需延长观测]`
- **关键归因**：`[写明真实观察到的前端或业务端反馈]`
- **对本指南的修订动作**：
  - [ ] 是否更新了对应章节或模板？`[写明链接]`
  - [ ] 是否已同步更新 `/b2b-meta-ads/changelog/`？`[版本号]`
