import '../styles/base.css'
import '../styles/custom.css'
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </>
  );
}