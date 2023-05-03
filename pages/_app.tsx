import '../styles/base.css'
import '../styles/custom.css'


export default function Nextra({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}