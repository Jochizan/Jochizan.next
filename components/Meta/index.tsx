import Head from 'next/head';
import { SEO } from 'config';

const Meta = ({ title }: { title: string }) => (
  <Head>
    <title>{title}</title>
    <meta key='description' name='description' content={SEO.description} />
    <meta key='og:type' name='og:type' content={SEO.openGraph.type} />
    <meta key='og:title' name='og:title' content={title} />
    <meta
      key='og:description'
      name='og:description'
      content={SEO.openGraph.description}
    />
    <meta key='og:url' name='og:url' content={SEO.openGraph.url} />
    <meta key='og:image' name='og:image' content={SEO.openGraph.image.src} />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:site' content='@jochizan' />
    <meta name='twitter:title' content={title} />
    <meta name='twitter:description' content={SEO.openGraph.description} />
    <meta name='twitter:image' content={SEO.openGraph.image.src} />
  </Head>
);

export default Meta;
