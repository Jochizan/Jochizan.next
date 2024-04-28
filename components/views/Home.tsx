import { memo } from 'react';
import heroImage from '@assets/hero-image.png';
import Header from '../layouts/Header';

const Home = () => {
  return (
    <section id='inicio' className='home'>
      <article
        className='hero-image'
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <aside className='hero-image-opacity'>
          <div className='hero-image-content'>
            <Header />
            <h2 className='hero-image-title'>
              Bienvenid@s
              <br />a mi sitio
            </h2>
            <a href='#contacto' className='btn'>
              CONTÁCTAME
            </a>
          </div>
        </aside>
      </article>
    </section>
  );
};

export default memo(Home);
