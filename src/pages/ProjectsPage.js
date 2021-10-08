import React from 'react';
import { projects } from '../utils/constants';

const ProjectsPage = () => {
  return (
    <section className='projects-container'>
      <h3 className='section-title products-title'>some things I've built:</h3>
      {projects.map((item) => {
        const {
          id,
          img,
          title,
          subtitle,
          info,
          url,
          sourceCode,
          borderClass,
        } = item;
        return (
          <div
            className={`${
              id % 2 === 0
                ? 'single-project right-position'
                : 'single-project left-position'
            }`}
            key={id}
          >
            <div className='img-container'>
              <img
                src={img}
                alt='project-screenshot'
                className={`${borderClass} project-image`}
              />
            </div>
            <hr className='long-line project-line' />
            <div className='info-container'>
              <h3 className='section-title'>{title}</h3>
              <h4 className='subtitle'>{subtitle}</h4>
              <p>{info}</p>
              <div className='project-buttons'>
                <button className='btn-clean' type='button'>
                  <a
                    type='button'
                    href={url}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    view project
                  </a>
                </button>
                <button className='btn-clean' type='button'>
                  <a
                    href={sourceCode}
                    target='_blank'
                    rel='noreferrer noopener'
                  >
                    source code
                  </a>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ProjectsPage;
