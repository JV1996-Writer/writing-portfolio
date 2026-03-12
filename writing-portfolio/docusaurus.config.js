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

  // Redoc 
  [
    'redocusaurus',
    {
      specs: [
        {
          id: 'shopflow-redoc',
          spec: 'static/shopflow.yaml',
          route: '/api-reference',
        },
      ],
      theme: {
        primaryColor: '#2E86AB',
        options: {
          hideDownloadButton: false,
          disableSearch: false,
          expandResponses: '200,201',
        },
      },
    },
  ],
],


  plugins: [
    [
      '@scalar/docusaurus',
      {
        route: '/api',
        showNavLink: false,
        configuration: {
          spec: {
            url: '/writing-portfolio/shopflow.yaml',
          },
          theme: 'deepSpace',
          hideModels: false,
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
          alt: 'JV Portfolio Logo',
          src: 'img/logo.svg',
        },
        style: 'dark',
        items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        // ✅ Dropdown menu replacing the two separate links
        {
          type: 'dropdown',
          label: 'API',
          position: 'left',
          items: [
            {
              label: 'ShopFlow API (Scalar)',
              to: '/api',
            },
            {
              label: 'ShopFlow API (Redoc)',
              to: '/api-reference',
            },
          ],
        },
        {
          to: '/blog', 
          label: 'Blog', 
          position: 'left'
        },
        {
          href: 'mailto:jagadishv333@gmail.com',
          label: 'Email',
          position: 'right',
          className: 'email-link',
        },
        {
          href: 'https://www.linkedin.com/in/jagadisha-v-8b1848166',
          label: 'LinkedIn',
          position: 'right',
          className: 'linkedin-link',
        },
        {
          href: 'https://github.com/JV1996-Writer/writing-portfolio',
          label: 'GitHub',
          position: 'right',
          className: 'github-link',
        },
        {
      // ✅ Resume download — upload your PDF to static/resume.pdf
          href: '/writing-portfolio/resume.pdf',
          label: '⬇ Resume',
          position: 'right',
          className: 'resume-link',
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