import React from 'react';
import { Link } from 'react-router-dom';
import { MdPlayArrow } from 'react-icons/md';

const AboutPage = () => {
  return (
    <div className='about-page-container'>
      <section className='about-section'>
        <div className='about-img-container'></div>
        <div className='about-info-container'>
          <hr className='line' />
          <h3 className='section-title'>about me</h3>
          <p>
            Hello! My name is Svetlana and I enjoy creating things that live on
            the internet. My interest in web development started when I decided
            to try building a ski/climbing website for a friend on Adobe
            Dreamweaver:) My second development adventure was a basic Wordpress
            website for a coworking space company that I worked for. In the last
            year I found myself having more time to dive deeper into the
            front-end development world. I took some online courses and prepared
            a portfolio. I'd love you to check it out.
          </p>
          <button className='btn-clean about-btn' type='button'>
            <Link className='btn-clean-text' to='/projects'>
              go to portfolio
            </Link>
          </button>
        </div>
      </section>
      <hr className='long-line about-line' />
      <section className='skills-container'>
        <div className='skills'>
          <div className='name-skills'>
            <div>
              <span className='skills-icon'>
                <MdPlayArrow />
              </span>
              <p>CSS</p>
            </div>
            <div>
              <span className='skills-icon'>
                <MdPlayArrow />
              </span>
              <p>JavaScript</p>
            </div>
            <div>
              <span className='skills-icon'>
                <MdPlayArrow />
              </span>
              <p>React</p>
            </div>
          </div>
          <div className='skils-text'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              ipsum perferendis itaque ipsam atque cupiditate architecto quas
              quam enim expedita! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Labore ipsum perferendis itaque ipsam atque
              cupiditate architecto quas quam enim expedita! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Labore ipsum perferendis
              itaque ipsam atque cupiditate architecto quas quam enim expedita!
            </p>
          </div>
        </div>
        <div className='skills'>
          <div className='name-skills'>
            <div>
              <span className='skills-icon'>
                <MdPlayArrow />
              </span>
              <p>English</p>
            </div>
            <div>
              <span className='skills-icon'>
                <MdPlayArrow />
              </span>
              <p>German</p>
            </div>
          </div>
          <div className='skils-text'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              ipsum perferendis itaque ipsam atque cupiditate architecto quas
              quam enim expedita! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Labore ipsum perferendis itaque ipsam atque
              cupiditate architecto quas quam enim expedita! Lorem ipsum dolor
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
