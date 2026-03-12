// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docs Portfolio',
  tagline: 'Senior Technical Writer | Documentation Engineer',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://JV1996-Writer.github.io',
  baseUrl: '/writing-portfolio/',
  organizationName: 'JV1996-Writer',
  projectName: 'writing-portfolio',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/JV1996-Writer/writing-portfolio/tree/main/',
          // ✅ No docItemComponent needed for Scalar
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: 'https://github.com/JV1996-Writer/writing-portfolio/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // ✅ No themes array needed for Scalar

  plugins: [
    [
      '@scalar/docusaurus',
      {
        label: 'ShopFlow API',
        route: '/api',
        configuration: {
          spec: {
            url: '/writing-portfolio/shopflow.yaml',
            // ✅ Must include baseUrl prefix for GitHub Pages!
          },
          theme: 'deepSpace',
          // ✅ Looks stunning for a portfolio!
          hideModels: false,
          // ✅ Shows your Product, Order schemas
        },
      },
    ],
  ],

  themeConfig:
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'JV Portfolio',
        logo: {
          alt: 'Portfolio Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          // ✅ Points to Scalar API reference
          {
            to: '/api',
            label: 'ShopFlow API',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/JV1996-Writer/writing-portfolio',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Portfolio',
            items: [
              {
                label: 'ShopFlow API Docs',
                to: '/api',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/JV1996-Writer',
              },
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com',
                // ✅ Update with your real LinkedIn!
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} JV Writing Portfolio. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'yaml'],
      },
    }),
};

export default config;