import { defineConfig } from 'vitepress'
import { SearchPlugin } from "vitepress-plugin-search"

var options = {
  previewLength: 62,
  buttonLabel: "Search",
  placeholder: "请输入搜索内容",
  allow: [],
  ignore: [],
};
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vite/',
  title: "huangguangyang 专属站点",
  description: "666",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/avatar.jpeg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
  },
  lastUpdated: true,
  vite: { plugins: [SearchPlugin(options)] }
})
