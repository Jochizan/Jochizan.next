import { memo } from 'react';
import Link from 'next/link';
import { SyntheticEvent, useRef } from 'react';

const Header = () => {
  const $refMenuBtn = useRef<HTMLButtonElement>(null);
  const $refMenu = useRef<HTMLDivElement>(null);
  const $header = useRef<HTMLDivElement>(null);

  if (process.browser) {
    window.addEventListener('scroll', () => {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      scrollTop > 140
        ? $header.current?.classList.add('bg-header') &&
          $refMenu.current?.classList.add('bg-header')
        : $header.current?.classList.remove('bg-header') &&
          $refMenu.current?.classList.remove('bg-header');
    });
  }

  const handleToggleMenu = () => {
    $refMenuBtn?.current?.firstElementChild?.classList?.toggle('none');
    $refMenuBtn?.current?.lastElementChild?.classList?.toggle('none');
    $refMenu?.current?.classList?.toggle('is-active');
  };

  const handleCloseMenu = (e: any | SyntheticEvent) => {
    if (!e.target.matches('.menu a')) {
      return false;
    }

    $refMenuBtn?.current?.firstElementChild?.classList?.remove('none');
    $refMenuBtn?.current?.lastElementChild?.classList?.add('none');
    $refMenu?.current?.classList?.remove('is-active');
  };

  return (
    <header ref={$header} className='header'>
      <section className='container'>
        <div className='logo'>
          <Link href='/'>Jochizan</Link>
        </div>
        <button
          ref={$refMenuBtn}
          onClick={handleToggleMenu}
          className='menu-btn'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z' />
          </svg>
          <svg
            className='none'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
          >
            <path d='M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z' />
          </svg>
        </button>
        <nav ref={$refMenu} onClick={handleCloseMenu} className='menu'>
          <Link href='#inicio'>Inicio</Link>
          <Link href='#acerca'>Acerca</Link>
          <Link href='#servicios'>Servicios</Link>
          <Link href='#portafolio'>Portafolio</Link>
          <Link href='#contacto'>Contacto</Link>
        </nav>
      </section>
    </header>
  );
};

export default memo(Header);
