import React from 'react';
import './Footer.scss';

import gitHub from '../../images/github.png';
import linkedIn from '../../images/linkedin.png';
import arrowUp from '../../images/arrow-up.png';

const Footer = () => {
  const goUp = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer>
      <div className='wrapper'>
        <button onClick={goUp}>
          <img src={arrowUp} alt='Arrow up' />
        </button>
        <div className='social-networks'>
          <a href='https://github.com/elenagiura' target='blank'>
            <img src={gitHub} alt='GitHub' />
          </a>
          <a href='https://www.linkedin.com/in/elena-giura/' target='blank'>
            <img src={linkedIn} alt='LinkedIn' />
          </a>
        </div>
        <hr />
        <p>&#169; 2021 - Template developed by Elena Milosevic</p>
      </div>
    </footer>
  );
};

export default Footer;
