import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiFrontendmentor } from 'react-icons/si';

const ContactPage = () => {
  return (
    <section className='contact-container'>
      <hr className='long-line' />
      <h3 className='section-title'>get in touch</h3>
      <div className='contact-info'>
        <p>
          If you are looking to get ahold of me, you can send me an email at{' '}
          <span className='contacts-email'>s.stoycheva@gmail.com</span>
        </p>
        <hr className='long-line' />
        <div className='contact-social-link-container'>
          <li className=' contact-social-link'>
            <a
              href='https://github.com/SvetlanaStoycheva'
              target='_blank'
              rel='noreferrer noopener'
            >
              <FaGithub />
            </a>
          </li>
          <li className='contact-social-link'>
            <a
              href='https://www.frontendmentor.io/profile/SvetlanaStoycheva/solutions'
              target='_blank'
              rel='noreferrer noopener'
            >
              <SiFrontendmentor />
            </a>
          </li>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
