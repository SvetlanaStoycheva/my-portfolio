import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <main>
      <section className='hero'>
        <div className='hero-img'></div>
        <div className='hero-greeting'>
          <h3 className='section-title hero-title'>
            Hey, I'm Svetlana and I enjoy building things for the web.
          </h3>
          <button type='button' className='btn'>
            <Link className='btn-text' to='/about'>
              about me
            </Link>
          </button>
        </div>
      </section>
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
      <div className='say-hi'>
        <h3 className='section-title say-hi-title'>get in touch</h3>
        <div className='line'>
          <hr className='say-hi-line' />
        </div>

        <button className='btn-clean ' type='button'>
          <Link className='btn-clean-text' to='/contact'>
            contact me
          </Link>
        </button>
      </div>
    </main>
  );
};

export default HomePage;
