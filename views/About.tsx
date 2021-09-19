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
import bootstrap from 'assets/icons/bootstrap.svg';
import tf from 'assets/icons/tensorflow.svg';
import docker from 'assets/icons/docker.svg';
import mysql from 'assets/icons/mysql.svg';
import mongo from 'assets/icons/mongodb.svg';
import Image from 'next/image';

interface Skill {
  name: string;
  value: number;
}

interface Tech {
  name: string;
  image: string;
  href: string;
}

const skills: Skill[] = [
  { name: 'Desarrollo <i>Web Frontend</i>', value: 75 },
  { name: '<i>Diseño Web</i>', value: 60 },
  { name: 'Desarrollo <i>Web Backend</i>', value: 70 },
  { name: '<i>WPO & SEO</i>', value: 75 },
  { name: 'Herramientas de desarrollo', value: 80 }
];

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
  { name: 'Express.js', image: express, href: 'https://expressjs.com' },
  { name: 'Vue.js', image: vue, href: 'https://vuejs.org' },
  { name: 'Bootstrap', image: bootstrap, href: 'https://getbootstrap.com' },
  { name: 'Python', image: python, href: 'https://www.python.org' },
  { name: 'Tensorflow', image: tf, href: 'https://www.tensorflow.org' },
  { name: 'Docker', image: docker, href: 'https://www.docker.com' },
  { name: 'PHP', image: php, href: 'https://www.php.net' },
  { name: 'MySQL', image: mysql, href: 'https://www.mysql.com' },
  { name: 'MongoDB', image: mongo, href: 'https://www.mongodb.com' }
];

const About = () => {
  return (
    <section id='acerca' className='about section container lg:h-screen'>
      <article className='title-grid pt-16'>
        <h1>Jochizan</h1>
        <h5>Desarrollador FullStack</h5>
      </article>
      <article className='about-grid text-lg-left'>
        <aside className='text-center text-lg-left pb-2'>
          <br />
          <p>
            Hola mi nombre es Joan, tengo la edad 20 años y voy en el tercer año
            de la carrera de Ingeniería. de Sistemas en la UNCP.
          </p>
          <br />
          <p>
            Colaboro con proyectos como <i>Freelance FullStack</i>. Me oriento
            bien en el trabajo en equipo a través de <i>Trello </i> o{' '}
            <i>Jira</i>.
          </p>
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
