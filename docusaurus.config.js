/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '知识书签',
  tagline: '',
  url: 'https://google-microsoft.github.io/bookmarks-site',
  baseUrl: '/bookmarks-site/',
  projectName: 'bookmarks-site', // Usually your repo name.
  organizationName: 'google-microsoft', // Usually your GitHub org/user name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: '知识书签',
      logo: {
        alt: 'My Facebook Project Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: '基础修炼',
          position: 'left',
          items: [
            {to: 'docs/basic-learn/cloudserver', label: '云服务', position: 'left'},
            {to: 'docs/basic-learn/computer', label: '计算机基础', position: 'left'},
            {to: 'docs/itcast/itcast', label: '传智播客课件和视频教程', position: 'left'},
          ],
        },

        {
          label: '编程',
          position: 'left',
          items: [
            {to: 'docs/program/rust', label: 'rust学习', position: 'left'},
            {to: 'docs/program/tool', label: 'tool', position: 'left'},
            {to: 'docs/program/vim', label: 'vim学习', position: 'left'},
            {to: 'docs/program/serivce', label: '服务学习', position: 'left'},
            {to: 'docs/program/ionic', label: 'ionic相关', position: 'left'},
          ],
        },
        {
          label: 'Office相关',
          position: 'left',
          items: [
            {to: 'docs/office/ppt', label: 'PPT相关', position: 'left'},
          ],
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/oss_logo.png',
        href: 'https://opensource.facebook.com',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `  `,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,

        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
