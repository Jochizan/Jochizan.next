import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

library.add(fab);

const ContactCard = ({ image, title, description }: any) => {
  return (
    <aside className='contact-card box-shadow-1'>
      <Image src={image} alt={title} />
      <h5>{title}</h5>
      {title === 'SOCIAL MEDIA' ? (
        <small className='social-container'>
          {description.map((el: any, idx: number) => (
            <a
              className='black-color'
              title={el[1]}
              key={idx}
              href={el[2]}
              target='_blank'
              rel='noreferrer'
            >
              {/*@ts-ignore*/}
              <FontAwesomeIcon icon={[`${el[0]}`, `${el[1]}`]} />
            </a>
          ))}
        </small>
      ) : (
        <small dangerouslySetInnerHTML={{ __html: description }} />
      )}
      <style jsx>{`
        .contact-card {
          margin: 1rem auto;
          padding: 1rem;
          width: 100%;
          height: 144px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          background-color: var(--white-color);
          align-items: center;
        }

        .black-color {
          color: var(--text-color);
        }
        .social-container {
          padding-top: 1rem;
        }

        .social-container a {
          padding: 0 0.4rem;
          text-decoration: none;
        }

        .social-container a svg {
          width: 2rem !important;
          height: 2rem;
        }

        .contact-card > img {
          width: 2rem;
          height: 2rem;
          fill: var(--first-color);
        }

        .contact-card > small {
          font-size: 14px;
          margin-top: -1rem;
        }

        .contact-card > small a {
          font-size: 32px;
        }
      `}</style>
    </aside>
  );
};

export default ContactCard;
