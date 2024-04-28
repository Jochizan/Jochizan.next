'use client';

import type { NextPage } from 'next';
import Footer from '@/components/layouts/Footer';
import Meta from '@/components/Meta';
import Home from '@/components/views/Home';
import About from '@/components/views/About';
import Services from '@/components/views/Services';
import Portfolio from '@/components/views/Portfolio';
import Contact from '@/components/views/Contact';

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
