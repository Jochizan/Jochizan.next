import Image from 'next/image';

const Job = ({ name: title, source, description, href, onClick }: any) => {
  return (
    <a href={href} className='portfolio-card' onClick={onClick}>
      <Image src={source} alt={title} />
      <aside className='portfolio-card-info'>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </aside>
      <style jsx>
        {`
          .portfolio-card {
            position: relative;
            width: 100%;
            margin: 0 auto;
            display: block;
          }

          .portfolio-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }

          .portfolio-card-info {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            padding: 1rem;
            background-color: var(--third-color);
            color: var(--white-color);
            opacity: 0;
            pointer-events: none;
            transition: all 0.5s ease-in-out;
          }

          .portfolio-card:hover .portfolio-card-info {
            opacity: 1;
            pointer-events: auto;
          }

          .portfolio-card-info > div {
            padding: 1rem;
            overflow: auto;
            max-height: 100%;
            border: thin solid var(--white-color);
          }
        `}
      </style>
    </a>
  );
};

export default Job;
