import React from 'react';
import bcg from '../utils/gallery-images/hero-bcg.jpg';
// import meImg from '../utils/gallery-images/me.jpg';

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
            about me
          </button>
        </div>
      </section>
      <section className='about-section'>
        <div className='about-img-container'>
          {/* <img src={meImg} alt='' /> */}
        </div>
        <div className='about-info-container'>
          <hr className='line' />
          <h3 className='section-title'>about me</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore in
            corporis repellendus amet reprehenderit delectus sunt vel nobis ipsa
            natus voluptatum, impedit aliquam ipsum aperiam harum libero
            obcaecati iure voluptates voluptatem saepe voluptate a animi
            necessitatibus? Totam saepe, veniam, reprehenderit voluptatibus amet
            consequatur dolores corporis minima maxime veritatis eaque dolorum?
          </p>
          <button className='btn-clean about-btn' type='button'>
            go to portfolio
          </button>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
