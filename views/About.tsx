import Techc from 'components/Tech';
import jochizan from 'assets/jochizan.png';
import html from 'assets/icons/html.svg';
import css from 'assets/icons/css.svg';
import js from 'assets/icons/javascript.svg';
import ts from 'assets/icons/typescript.svg';
import php from 'assets/icons/php.svg';
import python from 'assets/icons/python.svg';
import react from 'assets/icons/react.svg';
import express from 'assets/icons/express.svg';
import vue from 'assets/icons/vue.svg';
import next from 'assets/icons/next.svg';
import tf from 'assets/icons/tensorflow.svg';
import docker from 'assets/icons/docker.svg';
import mysql from 'assets/icons/mysql.svg';
import mongo from 'assets/icons/mongodb.svg';
import Image from 'next/image';
interface Tech {
  name: string;
  image: string;
  href: string;
}

const techs: Tech[] = [
  { name: 'Html', image: html, href: 'https://www.w3.org/html' },
  {
    name: 'Css',
    image: css,
    href: 'https://developer.mozilla.org/es/docs/Web/CSS'
  },
  { name: 'JavaScript', image: js, href: 'https://www.javascript.com' },
  { name: 'TypeScript', image: ts, href: 'https://www.typescriptlang.org' },
  { name: 'React.js', image: react, href: 'https://es.reactjs.org' },
  { name: 'Vue.js', image: vue, href: 'https://vuejs.org' },
  { name: 'Next.js', image: next, href: 'https://nextjs.org' },
  { name: 'Express.js', image: express, href: 'https://expressjs.com' },
  { name: 'Python', image: python, href: 'https://www.python.org' },
  { name: 'Tensorflow', image: tf, href: 'https://www.tensorflow.org' },
  { name: 'Docker', image: docker, href: 'https://www.docker.com' },
  { name: 'PHP', image: php, href: 'https://www.php.net' },
  { name: 'MySQL', image: mysql, href: 'https://www.mysql.com' },
  { name: 'MongoDB', image: mongo, href: 'https://www.mongodb.com' }
];

const About = () => {
  return (
    <section
      id='acerca'
      className='about section container lg-screen-full pb-5'
    >
      <article className='title-grid'>
        <h1>Jochizan</h1>
        <h5>Desarrollador FullStack</h5>
      </article>
      <article className='about-grid text-lg-left'>
        <aside className='text-center text-lg-left pb-2'>
          <br />
          <p>
            Hola mi nombre es Joan Roca Hormaza y soy fanático, amante y
            seguidor de tecnologías para el desarrollo de software especializado
            en la web, y ahora estoy enfocado en el mantenimiento de servicios
            sencillos de la organización <i>Tiquor</i> para la implementación de
            aplicaciones <i>open-source</i> de todo tipo.
          </p>
          <br />

          <br />
          <p>
            Mi especialidad es hacer la maquetación de un sitio <i>web</i>, así
            como la interactividad de estos, teniendo buenas prácticas para una
            mejor escalabilidad y mantenibilidad.
          </p>
        </aside>
        <div className='text-center pt-1'>
          <a
            className='btn'
            href='https://drive.google.com/file/d/1PV_a8MtmXPxSBGgRpQ6qiH0oQhs6KXjy/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            DESCARGA MI CV
          </a>
        </div>
      </article>
      <article className='image-grid '>
        <Image className='gray-scale' src={jochizan} alt='jochizan' />
      </article>
      <article className='tech-grid'>
        <h2 className='grid-tech text-center'>Mi stack de tecnologías</h2>
        <section className='grid-convert'>
          {techs.map((tech, idx) => (
            <Techc key={idx} {...tech} />
          ))}
        </section>
      </article>
    </section>
  );
};

export default About;
