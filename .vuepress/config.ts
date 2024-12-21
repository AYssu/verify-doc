import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: "/verify-doc/",
  title: "易验网络验证",
  description: "一款简单的网络验证系统",
  bundler: viteBundler(),
  theme: recoTheme({
    logo: "/logo.png",
    author: "AYssu",
    docsRepo: "https://github.com/AYssu/EasyVerify",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      '/docs/guide/': [ 'introduce', 'fastuse' ]
    },
    navbar: [
      { text: "主页", link: "/" },
      {
        text: "文档",
        children: [
          { text: "快速开始", link: "/docs/guide/introduce" },
        ],
      },
    ]
  }),
});
