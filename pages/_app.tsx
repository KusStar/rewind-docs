import '../styles/base.css'
import '../styles/custom.css'

import { Analytics } from "@vercel/analytics/react";

export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}