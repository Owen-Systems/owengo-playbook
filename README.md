# OwenGo Playbook — Owen 的出海实战活文档（Living Playbook）

> **当前版本：`V0.1`（第一册上线初始化完成）** ｜ **Owen Systems 出品 · Owen 主理**
>
> **在线文档**：[https://playbook.owengo.space](https://playbook.owengo.space) ｜ **GitHub**：[Owen-Systems/owengo-playbook](https://github.com/Owen-Systems/owengo-playbook)
>
> **定位**：Owen 的出海实战活文档（Living Playbook）——按主题分册沉淀、随一线实战实验持续迭代。**当前第一册聚焦《外贸 B2B Meta 广告实战指南》**，独立挂载于 [`/b2b-meta-ads/`](https://playbook.owengo.space/b2b-meta-ads/)，为后续同域名下拓展更多出海专题手册预留独立路由空间。

---

## 第一册核心方法论三角（`/b2b-meta-ads/`）

1. **素材即定向（Creative as Targeting）**：在 Meta Andromeda 检索排序机制下放弃高 CPM 的窄兴趣词，通过前 3 秒视觉贴纸与英文 B 端行话口播（OCR + ASR）主动劝退 C 端散客、吸引 B 端采购决策者。
2. **表单加摩擦（Conditional Logic Firewall）**：放弃 `More Volume`，使用 `Higher Intent` + `Conditional Logic` 在表单内对个人自用与低于 MOQ 的提交执行硬拦截（`Close Form`），并用手打企业官网/工作邮箱打破陈旧自动填充。
3. **转化回传驯化（Zero-Code CAPI Loop）**：用 Make + 飞书多维表格 / Google Sheets 打通“3 秒业务群推送”与“48 小时内 `QualifiedLead` 携带 `Meta Lead ID` 回传 CAPI”，积累有效样本后切换 `Maximize number of conversion leads`。

---

## 第一册阅读路径

| 模块 | 仓库路径 | 在线路由 | 内容说明 |
| :--- | :--- | :--- | :--- |
| **第一册总览** | `src/content/docs/b2b-meta-ads/index.md` | `/b2b-meta-ads/` | 《外贸 B2B Meta 广告实战指南》总目录与阅读索引 |
| **核心实战（7 章）** | `src/content/docs/b2b-meta-ads/chapters/` | `/b2b-meta-ads/chapters/` | 第 1 章底层重构 → 第 2 章国家梯队与沙盒 → 第 3 章前 3 秒防 C 端素材 → 第 4 章条件逻辑表单 → 第 5 章 Make + CAPI 闭环 → 第 6 章 CBO 放量与风控 → 第 7 章业务承接与 48h 分级 |
| **配套模板库（12 份）** | `src/content/docs/b2b-meta-ads/templates/` | `/b2b-meta-ads/templates/` | 覆盖买家画像、国家黑名单、命名生成器、上线自检、中英文视频脚本、B-Roll 清单、文案库、条件表单与 WA 链接、询盘管理表、Make/CAPI 蓝图、自动化规则、WhatsApp 破冰与分级 SLA |
| **脱敏实战实验区** | `src/content/docs/b2b-meta-ads/experiments/` | `/b2b-meta-ads/experiments/` | 沉淀带 `[Observed]` 标签与严格脱敏处理的实盘 A/B 对照实验（`V0.1` 已备好标准实验记录模板） |
| **版本更新日志** | `src/content/docs/b2b-meta-ads/changelog.md` | `/b2b-meta-ads/changelog/` | 追踪每次 SOP 修订、新增模板与实验结论的版本演进 |

---

## 数据真实性承诺

- 本库严禁编造任何投放数据、后台截图或成交案例。
- 所有实测数据与复盘案例在收录前均须经过脱敏核查并显式标注 `[Observed]`（附观测周期与样本量）；暂无实测数据的位置统一标注 `[Pending]`，SOP 默认阈值均标明“参考阈值”。
- 本地源草稿（`*.docx`）已通过 `.gitignore` 严格隔离，永不进入公开仓库提交。
- 协作约束详见根目录 [`AGENTS.md`](./AGENTS.md)。

---

## 本地开发与构建

本站点基于 **Astro Starlight** 构建，纯静态输出，零后端依赖，支持 **Cloudflare Workers Static Assets**（通过根目录 `wrangler.jsonc`）及 Cloudflare Pages 静态托管。

```bash
# 1. 安装依赖
npm install

# 2. 启动本地开发预览
npm run dev

# 3. 生产静态构建（生成 dist/ 与 Pagefind 站内搜索索引）
npm run build

# 4. 本地预览构建产物
npm run preview
```

### Cloudflare 部署参考参数
- **Cloudflare Workers（Static Assets，推荐，已配置 `wrangler.jsonc`）**：
  - **Build command**: `npm run build`
  - **Deploy command**: `npx wrangler deploy`
  - **静态资源目录**：`./dist`（无 `main` 入口，跳过 SSR 适配器自动配置）
- **Cloudflare Pages（传统静态项目）**：
  - **Build command**: `npm run build`
  - **Build output directory**: `dist`

---

## 持续迭代与交流

- **追踪更新**：欢迎在 [GitHub 仓库](https://github.com/Owen-Systems/owengo-playbook) 点击 **Star** 订阅后续实盘更新。
- **轻资产交流入口（占位，后续按需补充）**：
  - 公众号 / 微信：`[待补充]`
  - X (Twitter)：`[待补充]`
  - 纠错与交流：欢迎提交 [GitHub Issue](https://github.com/Owen-Systems/owengo-playbook/issues) 或参照 [`AGENTS.md`](./AGENTS.md) 发起 Pull Request。
