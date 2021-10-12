import React from 'react';
import { Link } from 'react-router-dom';
import { MdPlayArrow } from 'react-icons/md';

const AboutPage = () => {
  return (
    <div className='about-page-container'>
      <section className='about-section'>
        <div className='about-img-container-office'></div>
        <div className='about-info-container'>
          <span className='line'></span>
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
      <span className='long-line about-line'></span>
      <section className='skills-container'>
        <div className='skills'>
          <div className='name-skills'>
            <div>
              <span className='skills-icon'>
                <MdPlayArrow />
              </span>
              <p>HTML/CSS</p>
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
              I started learning programming basics with the free online
              lectures and exercises that SoftUni offered ca. two years ago. I
              took the Entry Module, the Fundamentals Molule and from the JS Web
              Developer Module, the JS Advanced Course. Then I discovered the
              John Smilga's courses on YouTube and took some of them on Udemy:
              Javascript Tutorial and Projects Course, HTML & CSS Tutorial and
              Projects Course, React Tutorial and Projects Course. Some of the
              projects on my portfolio are inspired by his final course
              projects. Lately I found the Frontend Mentor platform, which
              provides a variety of front-end challenges and enables you to
              practice building websites to a design (figma design file) and a
              project brief. Working on these projects has helped me to start
              finding my own workflow and solve real-world coding problems.
            </p>
            <div className='social-buttons'>
              <button className='btn-clean about-btn' type='button'>
                <a
                  className='btn-clean-text'
                  href='https://github.com/SvetlanaStoycheva'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  my gitHub
                </a>
              </button>
              <button className='btn-clean about-btn' type='button'>
                <a
                  className='btn-clean-text'
                  href='https://www.frontendmentor.io/profile/SvetlanaStoycheva/solutions'
                  target='_blank'
                  rel='noreferrer noopener'
                >
                  my frontend mentor
                </a>
              </button>
            </div>
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
              I've been fortunate enough to have spent four years at the
              University of Heidelberg, being part of some of the scientific
              projects in the{' '}
              <a
                href='https://www.pci.uni-heidelberg.de//apc/index.html'
                target='_blank'
                rel='noreferrer noopener'
              >
                Applied Physical Chemistry Institut
              </a>
              . I did enjoy a lot my time in the beautiful Heidelberg, working
              and generally spending time with my international colleagues.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
