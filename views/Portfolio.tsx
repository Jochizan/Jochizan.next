import Job0 from '../assets/projects/plant-ds.png';
import Job1 from '../assets/projects/graph-dijkstra.png';
import Job2 from '../assets/projects/bicimex.png';

import Job from '../components/Job';
import { SyntheticEvent, useRef, useState } from 'react';
import Image from 'next/image';

interface JobItem {
  description: string;
  source: StaticImageData;
  client: string;
  date: string;
  name: string;
  href: string;
}

const jobs: JobItem[] = [
  {
    source: Job0,
    href: 'https://tiquor.github.io/plant-ds',
    name: 'Plant DS',
    client: 'UL Org.',
    date: '24/08/21',
    description:
      'PlantDS es un proyecto colaborativo de código abierto bajo licencia Apache 2.0 que tiene como objetivo la implementación de redes neuronales convolucionales en una aplicación web moderna con React y su utilización en nuestro país en donde se sufre una gran cantidad de perdidas en cultivos debido a enfermedades que afectan a este. Para poder aportar puede ir a nuestro GitHub, y poder sugerir u aportar cambios que guste a este proyecto y otros similares.'
  },
  {
    source: Job1,
    href: 'https://tiquor.github.io/graph-dijkstra',
    name: 'Graph Dijsktra',
    client: 'UL Org.',
    date: '20/08/21',
    description:
      'Pequeño proyecto para implementar el algoritmo de dijkstra con JavaScript y React para la interfaz y con el motor de react-force-graph.'
  },
  {
    source: Job2,
    href: 'https://bicimexfisnavi.herokuapp.com',
    name: 'E-Bicimex',
    client: 'Bicimex',
    date: '20/02/21',
    description:
      'Proyecto de implementación de un mini-ecommerce hecho con html, css, js, php y mysql para la empresa Bicimex de Tarma.'
  }
];

const Portfolio = () => {
  const modal = useRef<HTMLDivElement>(null);
  const [job, setJob] = useState<JobItem>({
    href: '',
    name: '',
    date: '',
    client: '',
    source: Job0,
    description: ''
  });

  const handleModal = (e: SyntheticEvent, job: JobItem) => {
    e.preventDefault();
    setJob(job);
    modal?.current?.classList.add('is-open');
  };

  const handleClose = (e: SyntheticEvent) => {
    e.preventDefault();
    modal?.current?.classList.remove('is-open');
  };

  const handlePreventClose = (e: SyntheticEvent) => e.stopPropagation();

  return (
    <>
      <section id='portafolio' className='portfolio section'>
        <h2 className='section-title'>Mis Trabajos 💼</h2>
        <div className='container'>
          {jobs.map((job, idx) => (
            <Job {...job} key={idx} onClick={(e: any) => handleModal(e, job)} />
          ))}
        </div>
      </section>
      <article ref={modal} className='modal' id='job-1' onClick={handleClose}>
        <div className='modal-content' onClick={handlePreventClose}>
          <a href='#cerrar' className='modal-close' onClick={handleClose}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z' />
            </svg>
          </a>
          <article className='portfolio-modal'>
            <div className='modal-container'>
              <Image src={job.source} alt={job.name} />
            </div>
            <div className='portfolio-info'>
              <h3>{job.name}</h3>
              <p>{job.description}</p>
              <aside className='portfolio-details'>
                <small>
                  <b>CLIENTE: </b>
                </small>
                <small>{job.client}</small>
                <small>
                  <b>FECHA: </b>
                </small>
                <small>{job.date}</small>
                <small>
                  <b>ENLACE: </b>
                </small>
                <small>
                  <a
                    href={job.href || 'https://www.linkedin.com/in/jochizan'}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {job.name}
                  </a>
                </small>
              </aside>
            </div>
          </article>
        </div>
      </article>
    </>
  );
};

export default Portfolio;
