import Image from 'next/image';

const Service = ({ img, name, description }: any) => {
  return (
    <article className='service-card'>
      <Image className='min-w-[60px] text-center' src={img} alt={name} />
      <h3>{name}</h3>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <style jsx>{`
        .service-card {
          margin: 1rem auto;
          padding: 1rem;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .service-card img {
          width: 4rem;
          height: auto;
          fill: var(--first-color);
          margin-bottom: 1.25rem;
        }

        .service-card h3 {
          color: var(--title-color);
        }
      `}</style>
    </article>
  );
};

export default Service;
