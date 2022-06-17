export default {
  navbar: true,
  sidebar: true,
  toc: true,
  pagination: true,
  footer: false,
  layout: 'default',
  typesetting: 'default',
  breadcrumb: false
} as PageTheme

export type PageTheme = {
  navbar: Boolean
  sidebar: Boolean
  toc: Boolean
  pagination: Boolean
  footer: Boolean
  layout: 'default' | 'full' | 'raw'
  typesetting: 'default' | 'article'
  breadcrumb: Boolean
}
