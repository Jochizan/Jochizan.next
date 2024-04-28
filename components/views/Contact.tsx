'use client';

import email from '@assets/icons/contact-email.svg';
import home from '@assets/icons/contact-location.svg';
import phone from '@assets/icons/contact-phone.svg';
import media from '@assets/icons/service-smo.svg';

import loader from '@assets/icons/loader.svg';
import happy from '@assets/icons/happy-face.svg';

import ContactCard from '../Contact';
import { SyntheticEvent, useRef, useState } from 'react';
import Image from 'next/image';

interface ContactCardItem {
  title: string;
  image: string;
  description: string | string[][];
}

const data: ContactCardItem[] = [
  {
    title: 'EMAIL',
    image: email,
    description:
      '<a href="mailto:remnyachizot2015@gmail.com">remnyachizot2015@gmail.com</a>'
  },
  {
    title: 'TELÉFONO',
    image: phone,
    description: '<a href="tel:999555217">(+51) 999555217</a>'
  },
  { title: 'UBICACIÓN', image: home, description: 'Huancayo, Junín, Perú' },
  {
    title: 'SOCIAL MEDIA',
    image: media,
    description: [
      ['fab', 'github', 'https://github.com/Jochizan'],
      ['fab', 'linkedin', 'https://www.linkedin.com/in/jochizan'],
      ['fab', 'instagram', 'https://www.instagram.com/jochizan/'],
      ['fab', 'twitter', 'https://twitter.com/jochizan'],
      [
        'fab',
        'youtube',
        'https://www.youtube.com/channel/UCWxm-K22KltrAMizkbCSGpg'
      ]
    ]
  }
];

const Contact = () => {
  const $form = useRef<HTMLFormElement>(null);
  const $loader = useRef<HTMLDivElement>(null);
  const $response = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: SyntheticEvent | any) => {
    e.preventDefault();
    $loader?.current?.classList.remove('none');
    try {
      const res = await fetch(
        'https://formsubmit.co/ajax/remnyachizot2015@gmail.com',
        {
          method: 'POST',
          body: new FormData(e.target)
        }
      );

      if (!res.ok) {
        // eslint-disable-next-line no-throw-literal
        throw {
          err: true,
          status: res.status,
          statusText: !res.statusText ? 'Ocurrió un error' : res.statusText
        };
      }

      await res.json();

      $response?.current?.classList.add('is-open');
    } catch (err: any) {
      let message =
        err.statusText || 'Ocurrió un error al enviar, intenta nuevamente';
      setError(`Error ${err.status}: ${message}`);
    } finally {
      $loader?.current?.classList.add('none');
      $form?.current?.reset();

      setTimeout(() => {
        $response?.current?.classList.remove('is-open');
      }, 3000);
    }
  };

  return (
    <section id='contacto' className='contact pt-1 pb-1 bg-gray-light'>
      <div className='container'>
        <h2 className='section-title'>Contácteme 🤙</h2>
        <article className='contact-cards'>
          {data.map((card, idx) => (
            <ContactCard {...card} key={idx} />
          ))}
        </article>
        <form
          ref={$form}
          onSubmit={handleSubmit}
          className='contact-form box-shadow-1 bg-light'
        >
          <input
            type='text'
            name='name'
            placeholder='Ingresa tu nombre'
            pattern='^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$'
            title='Nombre sólo acepta letras y espacios en blanco'
            required
          />
          <input
            type='email'
            name='email'
            placeholder='Ingresa tu correo'
            pattern='^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$'
            title='Email incorrecto'
            required
          />
          <textarea
            name='comments'
            id='comments'
            cols={50}
            rows={10}
            placeholder='Déjame tus comentarios'
            required
          />
          <div ref={$loader} className='contact-form-loader text-center none'>
            <Image src={loader} alt='Enviando...' />
          </div>
          <div className='btn-center'>
            <button type='submit' className='btn'>
              <p>ENVIAR MENSAJE</p>
            </button>
          </div>
        </form>
        <article ref={$response} id='gracias' className='modal'>
          <div className='modal-content'>
            <article className='contact-form-response'>
              <h3>
                {!error ? (
                  <>
                    ¡Muchas Gracias!
                    <br />
                    Por tus comentarios
                  </>
                ) : (
                  error
                )}
              </h3>
              <Image src={happy} alt='Gracias...' />
            </article>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Contact;
