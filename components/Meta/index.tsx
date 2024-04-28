'use client';

import Head from 'next/head';
import { SEO } from '../../config';

const Meta = ({ title }: { title: string }) => (
  <Head>
    <title>{title}</title>
    <meta charSet='utf-8' />
    <meta property='description' name='description' content={SEO.description} />
    <meta property='og:type' name='og:type' content={SEO.openGraph.type} />
    <meta property='og:title' name='og:title' content={title} />
    <meta
      property='og:description'
      name='og:description'
      content={SEO.openGraph.description}
    />
    <meta property='og:url' name='og:url' content={SEO.openGraph.url} />
    <meta
      property='og:image'
      name='og:image'
      content={SEO.openGraph.image.src}
    />
    <meta name='twitter:card' content='summary_large_image' />
    <meta name='twitter:site' content='jochizan' />
    <meta name='twitter:title' content={title} />
    <meta name='twitter:creator' content='jochizan' />
    <meta name='twitter:description' content={SEO.openGraph.description} />
    <meta name='twitter:image' content={SEO.openGraph.image.src} />
    <meta name='hostname' content={SEO.hostname} />
  </Head>
);

export default Meta;
