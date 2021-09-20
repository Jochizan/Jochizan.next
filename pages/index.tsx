import Meta from 'components/Meta';
import type { NextPage } from 'next';
import About from 'views/About';
import Contact from 'views/Contact';
import Home from 'views/Home';
import Portfolio from 'views/Portfolio';
import Services from 'views/Services';

const HomePage: NextPage = () => {
  return (
    <div className='flex-grow bg-white'>
      <Meta title='Jochizan' />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default HomePage;
