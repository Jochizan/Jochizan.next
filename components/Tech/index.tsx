import Image from 'next/image';

const Tech = ({ name, image, href }: any) => {
  return (
    <section className='tech'>
      <section className='tech-container flex'>
        <Image src={image} alt={name} />
      </section>
      <a href={href} target='_blank' rel='noreferrer'>
        {name}
      </a>
      <style jsx>
        {`
          .tech {
            box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px,
              rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px,
              rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;
            border-radius: 6px;
          }

          .tech-container {
            padding: 0.5rem;
            padding-bottom: 0.25rem;
            min-height: 112px;
          }

          .tech a {
            text-decoration: none;
            font-size: smaller;
            text-align: center;
            padding: 0.25rem;
            margin: 0;
          }
        `}
      </style>
    </section>
  );
};

export default Tech;
