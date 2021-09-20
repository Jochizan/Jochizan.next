import Meta from 'components/Meta';
import Footer from 'layouts/Footer';
import type { NextPage } from 'next';
import Home from 'views/Home';
import About from 'views/About';
import Contact from 'views/Contact';
import Services from 'views/Services';
import Portfolio from 'views/Portfolio';

const HomePage: NextPage = () => {
  return (
    <>
      <div className='flex-grow bg-white'>
        <Meta title='Jochizan' />
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
