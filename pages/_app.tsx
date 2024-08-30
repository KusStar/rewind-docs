import '../styles/base.css'
import '../styles/custom.css'
import Script from 'next/script'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Script defer src="https://umami.uselessthing.top/script.js" data-website-id="rewind-docs"></Script>
      <Component {...pageProps} />
    </>
  );
}