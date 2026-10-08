import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/moon-theme-documentation/__docusaurus/debug',
    component: ComponentCreator('/moon-theme-documentation/__docusaurus/debug', '5ed'),
    exact: true
  },
  {
    path: '/moon-theme-documentation/__docusaurus/debug/config',
    component: ComponentCreator('/moon-theme-documentation/__docusaurus/debug/config', 'ffc'),
    exact: true
  },
  {
    path: '/moon-theme-documentation/__docusaurus/debug/content',
    component: ComponentCreator('/moon-theme-documentation/__docusaurus/debug/content', '3f0'),
    exact: true
  },
  {
    path: '/moon-theme-documentation/__docusaurus/debug/globalData',
    component: ComponentCreator('/moon-theme-documentation/__docusaurus/debug/globalData', '819'),
    exact: true
  },
  {
    path: '/moon-theme-documentation/__docusaurus/debug/metadata',
    component: ComponentCreator('/moon-theme-documentation/__docusaurus/debug/metadata', '339'),
    exact: true
  },
  {
    path: '/moon-theme-documentation/__docusaurus/debug/registry',
    component: ComponentCreator('/moon-theme-documentation/__docusaurus/debug/registry', 'bd3'),
    exact: true
  },
  {
    path: '/moon-theme-documentation/__docusaurus/debug/routes',
    component: ComponentCreator('/moon-theme-documentation/__docusaurus/debug/routes', 'c2c'),
    exact: true
  },
  {
    path: '/moon-theme-documentation/changelog',
    component: ComponentCreator('/moon-theme-documentation/changelog', 'ed5'),
    exact: true
  },
  {
    path: '/moon-theme-documentation/markdown-page',
    component: ComponentCreator('/moon-theme-documentation/markdown-page', '29c'),
    exact: true
  },
  {
    path: '/moon-theme-documentation/docs',
    component: ComponentCreator('/moon-theme-documentation/docs', '94d'),
    routes: [
      {
        path: '/moon-theme-documentation/docs',
        component: ComponentCreator('/moon-theme-documentation/docs', '24e'),
        routes: [
          {
            path: '/moon-theme-documentation/docs',
            component: ComponentCreator('/moon-theme-documentation/docs', 'cd4'),
            routes: [
              {
                path: '/moon-theme-documentation/docs/category/الإعدادات-العامة',
                component: ComponentCreator('/moon-theme-documentation/docs/category/الإعدادات-العامة', '098'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/category/الصفحات',
                component: ComponentCreator('/moon-theme-documentation/docs/category/الصفحات', '5a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/category/مكونات-الصفحة-الرئيسية',
                component: ComponentCreator('/moon-theme-documentation/docs/category/مكونات-الصفحة-الرئيسية', '240'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/intro',
                component: ComponentCreator('/moon-theme-documentation/docs/intro', '3ea'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/pages/blog-index',
                component: ComponentCreator('/moon-theme-documentation/docs/pages/blog-index', '1df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/pages/blog-single',
                component: ComponentCreator('/moon-theme-documentation/docs/pages/blog-single', 'fdc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/pages/brand-index',
                component: ComponentCreator('/moon-theme-documentation/docs/pages/brand-index', '901'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/pages/brand-single',
                component: ComponentCreator('/moon-theme-documentation/docs/pages/brand-single', '3c1'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/pages/cart',
                component: ComponentCreator('/moon-theme-documentation/docs/pages/cart', '3df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/pages/product-page',
                component: ComponentCreator('/moon-theme-documentation/docs/pages/product-page', '224'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/about-us-section',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/about-us-section', '286'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/banners-slider',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/banners-slider', 'd63'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/blog',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/blog', '001'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/brands',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/brands', '20f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/descriptive',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/descriptive', '7cd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/discount-section',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/discount-section', '4e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/divider',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/divider', 'fd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/faq',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/faq', 'c9c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/fixed-products',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/fixed-products', 'd94'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/grid_links',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/grid_links', '9df'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/main-links-builder',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/main-links-builder', '794'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/maps',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/maps', '186'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/marquee',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/marquee', '65c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/products-banner',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/products-banner', '2de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/products-slider',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/products-slider', 'd3a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/simple-main-links',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/simple-main-links', 'b9a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/slide-show',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/slide-show', 'fff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/socials',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/socials', '4ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/static-banners',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/static-banners', '7db'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/stats',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/stats', '210'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/store-features',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/store-features', '5d3'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/store-history',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/store-history', '9fc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/store-steps',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/store-steps', 'd23'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/tab-fixed-products',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/tab-fixed-products', '566'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/testimonials',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/testimonials', '138'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-basics/video-section',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-basics/video-section', '75f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/moon-theme-documentation/docs/tutorial-extras/store-identity',
                component: ComponentCreator('/moon-theme-documentation/docs/tutorial-extras/store-identity', '567'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/moon-theme-documentation/',
    component: ComponentCreator('/moon-theme-documentation/', '958'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
