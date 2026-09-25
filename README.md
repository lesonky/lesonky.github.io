# www.200jin.cn

本仓库（`lesonky/lesonky.github.io`）是 GitHub Pages **用户站点**的部署仓库，通过 CNAME 绑定自定义域名 **https://www.200jin.cn/**。

## 目录结构

```
.
├── index.html      # 新主页：导航页（纯静态，无构建、无依赖）
├── 404.html        # 站点 404 页
├── favicon.svg     # 站点图标
├── CNAME           # www.200jin.cn
├── archive/        # 旧版主页（Wukoon 博客）整站留档，2026-09-25 归档
└── README.md       # 本文件
```

### 子路径站点

以下站点的源码在各自的仓库里，通过 GitHub Pages 部署到本域名的子路径：

| 路径 | 站点 | 源码仓库 |
| --- | --- | --- |
| `/180bpm/` | 180BPM 超慢跑节拍器 | `lesonky/180bpm` |
| `/invoice_merge_tool/` | 发票合并助手 | `lesonky/invoice_merge_tool` |
| `/rdg/` | 随机数据生成器 | `lesonky/rdg` |
| `/gpt4o-image-prompts/` | Nano Banana 提示词画廊 | `lesonky/gpt4o-image-prompts` |
| `/cocotail/` | 便利店调酒 · 速查手册 | `lesonky/cocotail` |
| `/coffee/` | 咖啡师风味学院 | `lesonky/coffee` |
| `/english_words/` | The Last Light of Aeloria | `lesonky/english_words` |

## 如何修改主页

`index.html` 是手写的单文件页面（内联 CSS），直接改就行，pushes 到 `main` 分支后 GitHub Pages 会自动发布（约 1 分钟）。

新增一个站点 = 在对应的 `<section><ul>` 里加一个 `<li>`：

```html
<li><a href="/新路径/">
  <span class="name">站点名称</span>
  <span class="path">/新路径/</span>
  <span class="desc">一句话说明</span>
</a></li>
```

## 关于 archive/

`archive/` 是 2026-09-25 从 `lesonky/200jin`（已归档，只读）最后一次构建出来的**完整静态站点**，
构建时把 VitePress 的 `base` 改成了 `/archive/`，所以整站可以原样放在子路径下访问。

- 线上地址：https://www.200jin.cn/archive/
- 源码快照：https://github.com/lesonky/200jin/releases/tag/homepage-v1-archive

如需重新生成归档副本，参考该 Release 里的 `200jin-site-archive.zip`。

## 注意

- 本仓库的 `main` 分支**就是**线上站点的内容，不要再用旧的 `200jin` CI（`JamesIves/github-pages-deploy-action`，`clean: true`）往这里部署，否则会整站覆盖。
- `master` 分支是更早期的 docsify wiki，仅作历史保留，未部署。
