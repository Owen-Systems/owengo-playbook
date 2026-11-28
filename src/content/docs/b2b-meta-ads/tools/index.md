---
title: 在线实战工具总览（零后端纯静态）
description: 面向一线外贸 B2B 投手与工厂决策者的浏览器本地小工具：CPQL 与自动化规则换算、WhatsApp B2B 预填链接编码生成。
---

:::note[运行与隐私说明]
本工具区全部组件均在你的浏览器本地即时计算，**零后端接口、零数据上传、零外部统计跟踪**，可放心填入真实的订单毛利与手机号进行参数测算和真机测试。
:::

## 已上线工具（V0.1.3）

| 工具名称 | 核心用途 | 对应章节 / 模板 |
| :--- | :--- | :--- |
| [**B2B CPQL 算账与自动化规则阈值计算器**](/b2b-meta-ads/tools/cpql-rule-calculator/) | 根据单笔毛利、获客占比、成单率与表单有效率，一键换算账户专属的 `Target CPQL`、`Target CPL`、ABO/CBO 预算及 Meta 后台 3 套风控规则参数 | [第 1 章](/b2b-meta-ads/chapters/01-algorithm-and-mindset/) · [第 6 章](/b2b-meta-ads/chapters/06-scaling-and-risk-rules/) · [模板 11](/b2b-meta-ads/templates/11-automated-rules-and-reporting/) |
| [**WhatsApp B2B 预填话术链接生成器**](/b2b-meta-ads/tools/wa-link-generator/) | 自动剥离手机号中的 `+` 号、空格与横杠，将英文话术转为合规 `%20` 编码的 `wa.me` 链接，并支持新窗口真机试跳 | [第 4 章](/b2b-meta-ads/chapters/04-conditional-lead-form/) · [模板 08](/b2b-meta-ads/templates/08-conditional-form-and-wa-link/) · [第 7 章](/b2b-meta-ads/chapters/07-sales-follow-up-sop/) |

---

## 后续工具规划

- **Meta 三层级广告命名生成器**：基于 [模板 03](/b2b-meta-ads/templates/03-naming-convention-generator/) 的下拉交互版，一键导出 Campaign / Ad Set / Ad 规范名称；
- **CAPI `QualifiedLead` 与群机器人卡片 JSON 生成器**：基于 [第 5 章](/b2b-meta-ads/chapters/05-nocode-capi-loop/) 与 [模板 10](/b2b-meta-ads/templates/10-make-capi-webhook-blueprint/)，辅助生成可直接粘贴进 Make HTTP 模块的请求体模板。
