import 'styles/globals.css';
import 'styles/app.css';
import Footer from 'layouts/Footer';
import type { AppProps } from 'next/app';

const Jochizan = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default Jochizan;
