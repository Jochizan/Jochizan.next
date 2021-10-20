import Document, { Html, Head, Main, NextScript } from 'next/document';

class DocJochizan extends Document {
  render() {
    return (
      <Html lang='es'>
        <Head>
          <meta name='theme-color' content='#A0AC5B' />
          <link rel='canonical' href='https://jochizan.me' />
          <link rel='icon' href='favicon.ico' />
          <link rel='favicon' href='favicon/' />
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
