---
title: 版本更新日志（Changelog）
description: 记录《外贸 B2B Meta 广告实战指南》每个版本的章节增补、SOP 修订与脱敏实战实验入库情况。
---

本手册遵循 **Living Playbook（活文档）** 迭代机制：每当出现新的实盘实验结论、Meta 后台规则变更或 SOP 参数调优，均在此同步留下版本记录。

---

## V0.1.3（2026-11-28）— 上线首批 2 款零后端在线实战工具

### 已完成内容
1. **新增独立在线实战工具区（[`/b2b-meta-ads/tools/`](/b2b-meta-ads/tools/)）**：
   - **[B2B CPQL 算账与自动化规则阈值计算器](/b2b-meta-ads/tools/cpql-rule-calculator/)**：支持按单笔平均毛利、允许获客占比、合格成单率与表单有效率实时测算 `Max CAC`、`Target CPQL`、`Target CPL`、ABO/CBO 预算区间及 Meta 后台 3 套 Automated Rules 建议阈值（内置标准批发/OEM 与工业设备演示情景，不上传任何经营数据）。
   - **[WhatsApp B2B 预填话术链接生成器](/b2b-meta-ads/tools/wa-link-generator/)**：内置第 4 章场景 A/B 与 5 分钟破冰预设，自动剥离 `+` 号/空格并完成 URL 编码、支持 220 字符移动端截断提醒与新窗口真机试跳。
2. **全站导航与交叉链接同步**：
   - 更新首页、第一册总览页、第 4 章、第 6 章、模板 08、模板 11 及 `public/llms.txt` 路由索引，打通“阅读 SOP → 在线算阈值/生成链接 → 粘贴进 Meta 后台”的实用闭环。

---

## V0.1.2（2026-11-27）— 第 4 章样板章重构与核心章节写作标准沉淀

### 已完成内容
1. **[第 4 章样板章重构](/b2b-meta-ads/chapters/04-conditional-lead-form/)**：
   - 按“老板 30 秒决策框（CPL vs CPQL + 适用/过度拦截边界）→ 投手双场景一键复制区（标准批发/OEM + 工业设备/元器件）→ `如果 X → 排查 Y → 动作 Z` 排错决策树 → 关联 `experiments/` 的 `[Observed]` 实盘占位表与克制收口”四段式倒金字塔全面重写；
   - 保持零虚构实盘数据原则，所有未实测对比指标统一填 `[待补充实盘数据]`。
2. **写作规范固化（[AGENTS.md](https://github.com/Owen-Systems/owengo-playbook/blob/main/AGENTS.md)）**：
   - 新增“核心章节升级规范（样板章标准）”，将第 4 章的四段式结构锁定为后续升级第 5 章、第 3 章的统一标准。

---

## V0.1.1（2026-11-27）— 深度内容补强与门面精修

### 已完成内容
1. **核心章节实战边界与排错补强**：
   - **[第 1 章](/b2b-meta-ads/chapters/01-algorithm-and-mindset/)**：补充适用范围与 CPL、CPQL 核算公式，预留实盘对照表。
   - **[第 2 章](/b2b-meta-ads/chapters/02-account-and-sandbox/)**：新增“2.6 账户防封、合规红线与资产备份”，覆盖英文 Privacy Policy URL、医学/专利措辞拒审雷区及 BM 像素与备用广告账户隔离策略。
   - **[第 4 章](/b2b-meta-ads/chapters/04-conditional-lead-form/) & [模板 08](/b2b-meta-ads/templates/08-conditional-form-and-wa-link/)**：新增“跨品类 Q2 拦截题改写对照表”（覆盖高客单设备 `MOQ=1`、大宗原材/包材、OEM/ODM 定制）以及“高摩擦导致花不出钱 / CPL 飙升”的 3 步阶梯排查路径。
   - **[第 5 章](/b2b-meta-ads/chapters/05-nocode-capi-loop/) & [模板 10](/b2b-meta-ads/templates/10-make-capi-webhook-blueprint/)**：新增小预算账户 CAPI 中间事件替代方案、海外 `Google Sheets` 与国内`飞书多维表格`双栈落地差异说明，以及上线前 4 步测试验收清单。
2. **视觉、门面与 SEO/GEO 实体强化**：
   - 新增全链路闭环架构图（`/images/b2b-meta-loop.svg`）嵌入首页与第 5 章，直观串联素材、表单、Make 与 CAPI 反馈环；
   - 新增 `1200×630` 静态分享封面图（`/og-cover.png`）、自定义中文 `404.md`、以及绑定 `Owen Systems` 与 `https://owengo.space` 的 JSON-LD 结构化数据；
   - 将侧边栏“配套模板库（12 份）”设为默认折叠，突出 7 大主线章节，并清理 `README.md` 未填社媒占位符。

---

## V0.1（2026-11-27）— 文档站初始化、架构对齐与核心 SOP 迁移

### 已完成内容
1. **工程与多册扩展底座**：
   - 基于 Astro Starlight 完成纯静态简体中文文档站搭建，正式域名锁定为 `https://playbook.owengo.space`；
   - 将《外贸 B2B Meta 广告实战指南》作为 OwenGo Playbook 第一册独立挂载于 `/b2b-meta-ads/` 路径下，预留同域名扩展多册实战指南的路由空间；
   - 启用站内静态全文检索（Pagefind）、`robots.txt`、`sitemap-index.xml`、面向 AI 检索的 `/llms.txt` 与 GitHub 仓库入口（`Owen-Systems/owengo-playbook`）。
2. **全书 7 大核心章节结构搭建**：完成第 1 章至第 7 章完整框架与“必备脱敏截图（`[Pending]`）”清单初始化。
3. **核心 SOP 草稿（附件 A–D）正式迁入**：
   - **第 2 章 / 模板 02、03、04、11**：迁入 Tier 1/2/3 国家梯队划分与必排黑名单、ABO 冷启动沙盒参数、三层级广告命名规范与字典、冷启动 12 项上线自检表。
   - **第 3 章 / 模板 05、06**：迁入前 3 秒防 C 端拍摄剪辑 3 铁律、气动升降桌 3 套中英文完整分镜脚本（示意案例）及工厂 B-Roll 10 镜清单。
   - **第 4 章 / 模板 08**：迁入 Higher Intent + Conditional Logic Q1–Q4 英文问题库、分支跳转逻辑与 End Card A/B（含 `wa.me` 预填链接格式）。
   - **第 5 章 / 模板 09、10**：迁入 Meta Lead ID 归因字段、国际区号单引号防公式报错处理、`REGEXREPLACE` 一键 WhatsApp 公式，以及 Make + 飞书/Google Sheets + CAPI `QualifiedLead` 双向回传参数规范。
   - **第 6 章 / 模板 11**：迁入 Post ID 提取 2 种标准方法、CBO 常青放量池架构与 3 套 Automated Rules 参数表（标注为参考阈值）。
   - **第 7 章 / 模板 12**：迁入业务员 5 分钟 WhatsApp 破冰英文模板与 48 小时线索分级 SLA 框架。
4. **脱敏实战实验区与工程规范初始化**：建立 `[Observed]` 实验记录标准、`EXP-YYYYMM-NN` 标准模板，以及根目录 `AGENTS.md` 和 `.docx` 本地草稿 `.gitignore` 隔离规则。

---

## 后续版本迭代路线（规划）

> 注：以下迭代顺序以真实投放测试进度为准，所有新增截图与指标均须先完成脱敏与 `[Observed]` 核验后再并入对应版本。

- **V0.2（下一阶段）**：重点补齐第 3 章（前 3 秒防 C 端素材）与第 4 章（条件逻辑表单）的首批实盘脱敏截图与验证，并补充轻资产联系入口。
- **V0.3（技术闭环深化）**：补齐第 5 章（Make + 飞书多维表格 / Google Sheets + CAPI 回传）节点连线实拍图、Events Manager 入库状态图及完整飞书/企微群机器人卡片 JSON 代码。
- **V0.4（全书实盘校准）**：补全第 1、2、6、7 章脱敏报表与 WhatsApp 破冰对话实录，并在 [脱敏实战实验区](/b2b-meta-ads/experiments/) 录入 `[Observed]` 实测对照实验。
