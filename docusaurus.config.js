const path = require("path");

module.exports = {
  title: "innagine",
  tagline: "帮助你提升前端开发技能",
  titleDelimiter: "-",
  url: "https://blog.csdn.net/imagine_tion",
  baseUrl: "/",
  favicon: "img/logo1.png",
  organizationName: "innagine", // Usually your GitHub org/user name.
  projectName: "innagine.cn", // Usually your repo name.
  stylesheets: ["https://fonts.font.im/css?family=Raleway:500,700"],
  themeConfig: {
    navbar: {
      title: "innagine",
      logo: {
        alt: "宁栋",
        src: "img/logo1.png",
        srcDark: "img/logo1.png",
      },
      items: [
        {
          to: "/",
          label: "博客",
          position: "right",
          items: [
            {
              label: "前端",
              to: "tags/前端",
            },
            {
              label: "职业",
              to: "tags/职业",
            },
            {
              label: "健康",
              to: "tags/健康",
            },
          ],
        },
        // {
        //   label: "视频",
        //   position: "right",
        //   to: "docs/videos/videos-intro",
        // },
        // {
        //   label: "课程",
        //   position: "right",
        //   items: [
        //     {
        //       label: "React 即时通信 UI 开发实战",
        //       to: "docs/course/react-chat-ui/react-chat-ui",
        //     },
        //   ],
        // },
        {
          label: "前端基础",
          position: "right",
          items: [
            {
              label: "CSS",
              to: "docs/css/box-model/box-model",
            },
            {
              label: "JS",
              to: "docs/JS/js-dom",
            },
            
          ],
        },
        {
          label: "资源导航",
          position: "right",
          to: "docs/resources/resources-intro",
        },
        {
          href: "https://www.houdunren.com/Edu/site/1/front/system/index",
          label: "后端学习",
          position: "right",
        },
        {
          href: "https://github.com/innagine",
          label: "GitHub",
          position: "right",
        },
        // {
        //   href: "https://github.com/zxuqian/frontend-questions/issues",
        //   label: "提问",
        //   position: "right",
        // },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Style Guide",
        //       to: "docs/doc1"
        //     },
        //     {
        //       label: "Second Doc",
        //       to: "docs/doc2"
        //     }
        //   ]
        // },
        // {
        //   title: "Community",
        //   items: [
        //     {
        //       label: "Stack Overflow",
        //       href: "https://stackoverflow.com/questions/tagged/docusaurus"
        //     },
        //     {
        //       label: "Discord",
        //       href: "https://discordapp.com/invite/docusaurus"
        //     }
        //   ]
        // },
        {
          title: "Social",
          items: [
            {
              label: "博客",
              to: "/",
            },
            {
              label: "GitHub",
              href: "https://github.com/innagine",
            },
            {
              label: "CSDN",
              href: "https://blog.csdn.net/imagine_tion",
            },
            // {
            //   label: "网易云课堂",
            //   href:
            //     "https://study.163.com/course/courseMain.htm?courseId=1210022809&share=2&shareId=480000002172128",
            // },
            // {
            //   label: "腾讯课堂",
            //   href: "https://ke.qq.com/course/2839093?tuin=3850fdc6",
            // },
          ],
        },
        // {
        //   title: "友情链接",
        //   items: [
        //     {
        //       label: "yuqing521のblog",
        //       to: "https://yuqing521.github.io/",
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} innagine Built with Docusaurus.<p>粤ICP备XXXXXXX号-3</p>`,
    },
    prism: {
      darkTheme: require("prism-react-renderer/themes/vsDark"),
      defaultLanguage: "javascript",
    },
    googleAnalytics: {
      trackingID: "UA-118572241-1",
      anonymizeIP: true, // Should IPs be anonymized?
    },
    gtag: {
      trackingID: "G-6PSESJX0BM",
      // Optional fields.
      anonymizeIP: true, // Should IPs be anonymized?
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/zxuqian/zxuqian.cn/tree/master/docs",
        },
        blog: {
          path: "./blog",
          routeBasePath: "/",
          blogSidebarTitle: "近期文章",
          feedOptions: {
            type: "all",
            title: "innagine",
            copyright: `Copyright © ${new Date().getFullYear()} INNAGINE</p>`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          cacheTime: 600 * 1000, // 600 sec - cache purge period
          changefreq: "daily",
          priority: 0.5,
        },
      },
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    path.resolve(__dirname, "./src/plugin/plugin-baidu-analytics"),
    path.resolve(__dirname, "./src/plugin/plugin-baidu-push"),
    // path.resolve(__dirname, "./src/plugin/plugin-google-adsense"),
  ],
};
