import { memo } from 'react';

const Footer = () => {
  return (
    <footer className='footer'>
      <small>sitio diseñado por </small>
      <a className='style-none' href='https://www.linkedin.com/in/jochizan'>
        @jochizan
      </a>
    </footer>
  );
};

export default memo(Footer);
