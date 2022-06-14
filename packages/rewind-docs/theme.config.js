const Logo = ({ size, ...props }) => (
  <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" {...props}>
    <g
      id="Custom-Preset"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd"
      transform={`scale(${size / 320})`}
    >
      <path
        id="re"
        stroke="currentColor"
        strokeWidth={20}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M222.202 206.84 125.93 43 28 206.84h147.01l-48.911-86.358-25.5 46.737"
      />
    </g>
  </svg>
);

// theme.config.js
export default {
  projectLink: 'https://github.com/kusstar/rewind-docs', // GitHub link in the navbar
  docsRepositoryBase: 'https://github.com/kusstar/rewind-docs/blob/master', // base URL for the docs repository
  titleSuffix: ' – 倒带',
  floatTOC: true,
  nextLinks: true,
  prevLinks: true,
  search: true,
  unstable_flexsearch: true,
  darkMode: true,
  nextThemes: {
    defaultTheme: 'system',
  },
  footerEditLink: false,
  searchPlaceholder: '搜索……',
  logo: (
    <>
      <Logo size={32} style={{
        marginTop: 6
      }}/>
      <span>倒带</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Mincu" />
      <meta name="og:title" content="Mincu" />
    </>
  ),
}
