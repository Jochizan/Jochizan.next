import Service from '../components/Service';
import ImgServiceOne from '../assets/icons/service-code.svg';
import ImgServiceTwo from '../assets/icons/service-design.svg';
import ImgServiceThree from '../assets/icons/service-wpo.svg';
import ImgServiceFour from '../assets/icons/service-seo.svg';
import ImgServiceFive from '../assets/icons/service-smo.svg';
import ImgServiceSix from '../assets/icons/service-hosting.svg';

interface ServiceItem {
  img: string;
  name: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    img: ImgServiceOne,
    name: 'Desarrollo Web',
    description:
      'Desarrollo sitios y aplicaciones <i>web</i>. ' +
      'Contribuyo a construir tu proyecto de principio a fin: <i>Frontend</i>, <i>Backend</i>, <i>DBs</i>.'
  },
  {
    img: ImgServiceTwo,
    name: 'Diseño Web',
    description:
      'Maqueto tus diseños estáticos y les proveo de una interfaz para tus aplicaciones y sitios <i>web</i>.' +
      'Óptimo, responsivo y accesible.'
  },
  {
    img: ImgServiceThree,
    name: 'WPO',
    description:
      'Hago que tus sitios y aplicaciones <i>web</i> mejoren su tiempo de carga y respuesta.'
  },
  {
    img: ImgServiceFour,
    name: 'SEO',
    description:
      'Hago que tus sitios y aplicaciones <i>web</i> mejoren su posición en los buscadores orgánicamente.'
  },
  {
    img: ImgServiceFive,
    name: 'API REST',
    description:
      'Te doy una arquitectura de <i>software</i> moderna para sistemas hipermedia y el consumo de sus servicios.'
  },
  {
    img: ImgServiceSix,
    name: 'Web Hosting',
    description: 'Te proveo de un dominio y <i>host</i> para tus proyectos.'
  }
];

const Services = () => {
  return (
    <section id='servicios' className='services section bg-gray-light'>
      <div className='container full-lg-screen'>
        <h2 className='section-title'>Servicios que proveo 👨‍💻</h2>
        {services.map((service, idx: number) => (
          <Service key={idx} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
