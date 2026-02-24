// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'لافندر | Lavender',
  tagline: 'هذا الموقع هو موقع توثيق لثيم لافندر على منصة سلة للتجارة الإلكترونية.',
  favicon: '/img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://ilyesCodes.github.io',
  baseUrl: '/lavender-docs-build/',

  organizationName: 'ilyesCodes',
  projectName: 'lavender-docs-build',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ar',
    locales: ['ar'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ilyesCodes/lavender-docs-build/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/ilyesCodes/lavender-docs-build/edit/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/LAVENDER.png',
    navbar: {
      title: 'لافندر',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'دليل الاستعمال',
        },
        {to: '/blog', label: 'مدونة', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [{label: 'Tutorial', to: '/docs/intro'}],
        },
        {
          title: 'Community',
          items: [{label: 'X', href: 'https://x.com/docusaurus'}],
        },
        {
          title: 'More',
          items: [{label: 'Blog', to: '/blog'}],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lavender, BAYO LTD. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
