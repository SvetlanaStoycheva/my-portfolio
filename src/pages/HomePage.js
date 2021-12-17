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

          <Link className='btn-text' to='/about'>
            <button type='button' className='btn'>
              about me
            </button>
          </Link>
        </div>
      </section>
      <section className='about-section'>
        <div className='about-img-container'></div>
        <div className='about-info-container'>
          <span className='line'></span>
          <h3 className='section-title'>about me</h3>
          <p>
            Hello! My name is Svetlana and I enjoy creating things that live on
            the internet. My interest in web development started when I decided
            to try building a ski/climbing website for a friend using Adobe
            Dreamweaver:) My second development adventure was a basic Wordpress
            website for a coworking space company I worked for. In the last year
            I found myself having more time to dive deeper into the front-end
            development world. I took some online courses and prepared a
            portfolio. I'd love you to check it out.
          </p>

          <Link className='btn-clean-text' to='/projects'>
            <button className='btn-clean about-btn' type='button'>
              go to portfolio
            </button>
          </Link>
        </div>
      </section>
      <div className='say-hi'>
        <h3 className='section-title say-hi-title'>get in touch</h3>
        {/* <hr /> */}
        <span className='line say-hi-line'></span>

        <Link className='btn-clean-text' to='/contact'>
          <button className='btn-clean ' type='button'>
            contact me
          </button>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
