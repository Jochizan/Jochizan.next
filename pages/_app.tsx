import 'styles/globals.css';
import 'styles/app.css';
import Footer from 'layouts/Footer';
import type { AppProps } from 'next/app';

const Jochizan = ({ Component, pageProps }: AppProps) => {
  return (
    <div className='flex flex-col h-screen'>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default Jochizan;
