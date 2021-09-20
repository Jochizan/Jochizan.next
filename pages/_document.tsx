import Document, { Html, Head, Main, NextScript } from 'next/document';

class DocJochizan extends Document {
  render() {
    return (
      <Html lang='es'>
        <Head>
          <meta
            name='description'
            content='Hola! 👋👋👋 bienvenid@ a mi Portafolio profesional soy Jochizan y soy desarrollador de software para la web'
          />
          <meta name='theme-color' content='#A0AC5B' />
          <link rel='canonical' href='https://www.jochizan.me' />
          <link rel='icon' href='favicon.ico' />
          <link rel='favicon' href='favicon/' />
          <meta name='twitter:card' content='summary' />
          <meta property='og:title' name='twitter:title' content='Jochizan' />
          <meta
            property='og:image'
            name='twitter:image'
            content='hero-image.png'
          />
          <meta
            property='og:url'
            name='twitter:url'
            content='https://www.jochizan.me'
          />
          <meta
            property='og:description'
            name='twitter:description'
            content='Hola! 👋👋👋 bienvenid@ a mi Portafolio Profesional, soy Jochizan y soy Desarrollador Web'
          />
          <meta property='og:type' content='website' />
          <link rel='apple-touch-icon' href='favicon/apple-icon.png' />
          <link rel='manifest' href='manifest.json' />
          <meta name='msapplication-TileColor' content='#A0AC5B' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='anonymous'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body style={{ backgroundColor: '#284b62' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DocJochizan;
