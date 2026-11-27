// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://playbook.owengo.space',

  integrations: [
    starlight({
      title: 'OwenGo Playbook',
      description:
        'Owen 的出海实战活文档（Living Playbook）：当前第一册聚焦《外贸 B2B Meta 广告实战指南》，提供素材即定向 + 条件逻辑表单 + CAPI 转化回传全链路 SOP 与可复制模板。',
      locales: {
        root: {
          label: '简体中文',
          lang: 'zh-CN',
        },
      },
      customCss: ['./src/styles/custom.css'],
      favicon: '/favicon.svg',
      head: [
        {
          tag: 'link',
          attrs: {
            rel: 'alternate',
            type: 'text/plain',
            href: '/llms.txt',
            title: 'LLMs.txt',
          },
        },
      ],
      social: [
        {
          icon: 'external',
          label: 'Owen 主站 / 项目总览',
          href: 'https://owengo.space',
        },
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/Owen-Systems/owengo-playbook',
        },
      ],
      sidebar: [
        {
          label: '第一册：外贸 B2B Meta 广告实战指南',
          items: [
            { label: '手册总览与阅读路径', slug: 'b2b-meta-ads' },
            {
              label: '版本更新日志（Changelog）',
              slug: 'b2b-meta-ads/changelog',
              badge: { text: 'V0.1', variant: 'note' },
            },
            {
              label: '核心实战（7 章）',
              items: [
                {
                  label: '01 底层重构与算法真相',
                  slug: 'b2b-meta-ads/chapters/01-algorithm-and-mindset',
                },
                {
                  label: '02 防跑偏基建与冷启动沙盒',
                  slug: 'b2b-meta-ads/chapters/02-account-and-sandbox',
                },
                {
                  label: '03 素材即定向：前 3 秒防 C 端',
                  slug: 'b2b-meta-ads/chapters/03-creative-as-targeting',
                },
                {
                  label: '04 询盘防火墙：条件逻辑表单',
                  slug: 'b2b-meta-ads/chapters/04-conditional-lead-form',
                },
                {
                  label: '05 零代码闭环：秒级推送与 CAPI',
                  slug: 'b2b-meta-ads/chapters/05-nocode-capi-loop',
                },
                {
                  label: '06 科学放量与夜间自动化风控',
                  slug: 'b2b-meta-ads/chapters/06-scaling-and-risk-rules',
                },
                {
                  label: '07 业务承接、背调与 48h 分级',
                  slug: 'b2b-meta-ads/chapters/07-sales-follow-up-sop',
                },
              ],
            },
            {
              label: '配套模板库（12 份）',
              items: [
                { label: '模板总览与索引', slug: 'b2b-meta-ads/templates' },
                {
                  label: '01 B2B 三类买家画像映射表',
                  slug: 'b2b-meta-ads/templates/01-buyer-persona-matrix',
                },
                {
                  label: '02 国家梯队与必排黑名单清单',
                  slug: 'b2b-meta-ads/templates/02-country-tiers-blacklist',
                },
                {
                  label: '03 三层级广告命名规范与字典',
                  slug: 'b2b-meta-ads/templates/03-naming-convention-generator',
                },
                {
                  label: '04 冷启动上线 12 项自检表',
                  slug: 'b2b-meta-ads/templates/04-launch-preflight-checklist',
                },
                {
                  label: '05 4 大切角短视频中英文脚本库',
                  slug: 'b2b-meta-ads/templates/05-video-script-library',
                },
                {
                  label: '06 工厂车间 B-Roll 10 镜清单',
                  slug: 'b2b-meta-ads/templates/06-factory-broll-shotlist',
                },
                {
                  label: '07 B2B 英文广告文案库',
                  slug: 'b2b-meta-ads/templates/07-english-ad-copy-library',
                },
                {
                  label: '08 条件逻辑表单与 WA 链接模板',
                  slug: 'b2b-meta-ads/templates/08-conditional-form-and-wa-link',
                },
                {
                  label: '09 询盘管理与 CAPI 状态表',
                  slug: 'b2b-meta-ads/templates/09-lead-tracker-capi-sheet',
                },
                {
                  label: '10 Make + CAPI 与群机器人蓝图',
                  slug: 'b2b-meta-ads/templates/10-make-capi-webhook-blueprint',
                },
                {
                  label: '11 3 套自动化规则与报表列',
                  slug: 'b2b-meta-ads/templates/11-automated-rules-and-reporting',
                },
                {
                  label: '12 WA 破冰追单话术与 48h 分级',
                  slug: 'b2b-meta-ads/templates/12-whatsapp-scripts-and-sla',
                },
              ],
            },
            {
              label: '脱敏实战实验区',
              items: [
                { label: '实验区总览与记录规范', slug: 'b2b-meta-ads/experiments' },
                {
                  label: '标准实验记录模板（EXP）',
                  slug: 'b2b-meta-ads/experiments/exp-template',
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
