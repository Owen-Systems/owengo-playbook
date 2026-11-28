# AGENTS.md — 仓库工程与内容维护铁律

本文件定义了 **OwenGo Playbook（Owen 的出海实战活文档）** 在所有人工撰写与 AI Agent 协作过程中的硬性约束。当前第一册为《外贸 B2B Meta 广告实战指南》（挂载于 `/b2b-meta-ads/`）。任何提交、PR 或内容补全均须严格遵守以下五条铁律及核心章节升级规范。

---

## 五条核心铁律

### 1. 严禁编造投放数据或案例
- **禁止**凭空捏造或推算任何未实测的投放指标（如 CPM、CTR、CPC、CPL、CPQL、线索有效率、表单完播率、WhatsApp 回复率、成交金额或 ROAS）。
- **禁止**使用 AI 生成或 PS 伪造 Meta Ads Manager、Events Manager、Make 或 WhatsApp 对话截图。
- 尚未产生真实实盘数据的截图槽位、数据对照表与复盘空白区，**必须**显式保留 `[Pending: 待补充真实脱敏素材]` 或 `[待补充实盘数据]` 占位符。
- 初始 SOP 草稿中的预算、出价或规则触发值（例如 `$40~$50/组/天`、`> $45` 止损等），在文档中**必须**明确标注为 **“参考阈值（源自初始 SOP 草稿，实盘前需按品类与目标 CPL 校准）”**，不得伪装为真实账户表现。

### 2. 实战数据与源草稿隔离原则（`[Observed]`）
- 所有真实投放记录、实验日志与战报数据**必须**带有 `[Observed]` 标签，且同时写明：**观测时间窗口、样本量（花费/展示/表单数）与适用前提（行业/客单/目标市场）**。
- 发布前**必须**核查并彻底清除以下敏感信息：
  - Meta Ad Account ID、Business Manager（BM）ID、Dataset ID、Pixel ID、真实 Post ID（示意例除外）；
  - 真实工厂名称、品牌名、独立站域名、企业邮箱、WhatsApp 手机号、客户姓名、LinkedIn 主页链接；
  - 可逆向定位到具体客户或工厂的报价单明文与聊天记录截图。
- 本地原始草稿文件（`*.docx`）已加入 `.gitignore`，**严禁**强制 `git add -f` 将其纳入版本控制或推送至公开远程仓库。

### 3. 每次实质性更新必须同步更新 Changelog
- 任何新增章节内容、补充 `[Observed]` 实验记录、修改 SOP 参数阈值或新增/修订模板，**必须**同步完成以下三项联动更新：
  1. 在对应分册的更新日志（第一册为 `src/content/docs/b2b-meta-ads/changelog.md`）顶部新增对应版本号记录（如 `V0.2`）与变更明细；
  2. 核对并更新首页 `src/content/docs/index.mdx` 及分册总览页中展示的当前版本号与更新日期；
  3. 若新增、重命名或删除了页面路由，同步更新 `public/llms.txt` 的页面索引。

### 4. 构建与断链校验红线
- 任何内容或配置修改完成后、交付前，**必须**在本地执行完整构建并确保退出码为 `0`：
  ```bash
  npm run build
  ```
- 必须确保 Content Collections（`src/content.config.ts`）Schema 校验无报错，且站内所有内部链接均可正常解析，**零断链**。
- 站内文档互相引用时，统一使用**带尾斜杠的根相对路径**（例如 `/b2b-meta-ads/chapters/01-algorithm-and-mindset/`、`/b2b-meta-ads/templates/02-country-tiers-blacklist/`、`/b2b-meta-ads/experiments/`、`/b2b-meta-ads/changelog/`）。

### 5. 风格与审批边界
- **文风与视觉**：全站使用简体中文（英文广告文案、表单字段、API 参数及专有名词除外），排版克制、专业、去营销感，严禁浮夸动效或夸张卖课话术。
- **审批红线**：站点目标域名已锁定为 `https://playbook.owengo.space`。未经仓库所有者明确授权，任何 Agent **不得**擅自更改正式域名、接入任何付费第三方统计/搜索/CRM 服务，或向公开远程仓库执行未经确认的 `git push`。

---

## 核心章节升级规范（样板章标准）

后续升级 **第 5 章**、**第 3 章** 及其他核心实战章节时，统一以全站样板章 [src/content/docs/b2b-meta-ads/chapters/04-conditional-lead-form.md](src/content/docs/b2b-meta-ads/chapters/04-conditional-lead-form.md) 为模板，严格按**四段式倒金字塔结构**改写：

1. **首屏：老板 30 秒决策框（TL;DR）**
   - 直接用结论回答老板最关心的成本、ROI 逻辑或风控取舍，不堆砌铺垫背景；
   - 用清晰边界表给出“何时立即执行 / 何时过严或暂缓 / 不可突破底线”。
2. **中段：投手一键复制区（双场景模板）**
   - 把英文文案、脚本、字段结构、工作流节点参数或表单逻辑拆成可直接复制的代码块；
   - 按真实外贸业务差异拆分场景（如 **标准批发 / OEM 定制品** vs **工业设备 / 元器件**，或 **海外栈 vs 国内团队栈**），示例阈值必须注明“配置示例，实盘按自身门槛校准”。
3. **排错与边界清单（Decision Tree）**
   - 统一采用 `如果 X → 排查 Y → 动作 Z` 句式，聚焦一线高频卡点（花不出钱、垃圾填表、开口率低、CAPI 断链等），禁止泛泛而谈“注意优化”。
4. **底部：实盘锚点与克制收口**
   - 挂入 1 个关联至 `/b2b-meta-ads/experiments/` 与 `/b2b-meta-ads/experiments/exp-template/` 的 `[Observed]` 实盘观察对比表，无实盘数据时一律显式填 `[待补充实盘数据]`，截图槽保留 `[Pending: 待补充真实脱敏素材]`；
   - 章末仅留克制的版本更新指引与主理人联络入口（公众号 / X / 微信通过 `https://owengo.space` 与仓库 Issues 承接），严禁卖课或强推销话术。

---

## 目录职责地图

| 路径 | 职责说明 |
| :--- | :--- |
| `astro.config.mjs` | Starlight 全局配置、正式域名 `https://playbook.owengo.space`、简体中文根语言、分册侧边栏导航 |
| `src/content.config.ts` | Astro 7 Content Layer 文档集合配置（`docsLoader` + `docsSchema`） |
| `src/content/docs/index.mdx` | 全站首页（主推第一册《外贸 B2B Meta 广告实战指南》，明确当前版本与 `[Observed]` 承诺） |
| `src/content/docs/b2b-meta-ads/index.md` | 第一册总览页（`/b2b-meta-ads/` 挂载入口与完整阅读地图） |
| `src/content/docs/b2b-meta-ads/changelog.md` | 第一册版本迭代更新日志（每次实质更新必改） |
| `src/content/docs/b2b-meta-ads/chapters/` | 第一册 7 大核心实战章节（`01`–`07`，第 4 章为全站四段式样板章） |
| `src/content/docs/b2b-meta-ads/templates/` | 第一册 12 份开箱即用 SOP 模板（`index.md` + `01`–`12`） |
| `src/components/tools/` | 零后端纯前端交互工具 Astro 组件（Client-side 计算与链接编码） |
| `src/content/docs/b2b-meta-ads/tools/` | 第一册在线实战工具区（`/b2b-meta-ads/tools/` 挂载入口与各工具页） |
| `src/content/docs/b2b-meta-ads/experiments/` | 第一册脱敏实战实验区（规范说明 + `exp-template.md` + 后续 `[Observed]` 实验记录） |
| `public/robots.txt` | 搜索引擎抓取规则与 Sitemap 指引（`https://playbook.owengo.space/sitemap-index.xml`） |
| `public/llms.txt` | 面向 AI 搜索与大模型检索的站点结构索引 |
