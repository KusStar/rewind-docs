import "nextra-theme-rewind/style.css";
import '../styles/custom.css'

export default function Nextra({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(<Component {...pageProps} />);
}
