import React from 'react'

const defaultTheme = {
  projectLink: 'https://github.com/shuding/nextra',
  docsRepositoryBase: 'https://github.com/shuding/nextra',
  titleSuffix: ' – Nextra',
  nextLinks: true,
  prevLinks: true,
  search: true,
  darkMode: true,
  nextThemes: {
    defaultTheme: 'system',
    storageKey: 'theme',
    forcedTheme: undefined
  },
  defaultMenuCollapsed: false,
  // @TODO: Can probably introduce a set of options to use Google Fonts directly
  // font: true,
  footer: true,
  footerText: `MIT ${new Date().getFullYear()} © Nextra.`,
  footerEditLink: 'Edit this page',
  gitTimestamp: 'Last updated on',
  logo: (
    <React.Fragment>
      <span className="mr-2 font-extrabold hidden md:inline">Nextra</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        The Next Docs Builder
      </span>
    </React.Fragment>
  ),
  head: (
    <React.Fragment>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content="Nextra: the next docs builder" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@shuding_" />
      <meta property="og:title" content="Nextra: the next docs builder" />
      <meta property="og:description" content="Nextra: the next docs builder" />
      <meta name="apple-mobile-web-app-title" content="Nextra" />
    </React.Fragment>
  ),
  searchPlaceholder: ({ locale }: { locale?: string }) => {
    if (locale === 'zh-CN') return '搜索文档...'
    return 'Search documentation...'
  },
  unstable_searchResultEmpty: () => (
    <span className="block p-8 text-center text-gray-400 text-sm select-none">
      No results found.
    </span>
  )
  // direction: 'ltr',
  // i18n: [{ locale: 'en-US', text: 'English', direction: 'ltr' }],
}

export default defaultTheme
