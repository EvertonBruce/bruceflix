import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <p>
        Criado com <span role="img" aria-label="heart">❤️</span> por
        {' '}
        <a href="https://www.linkedin.com/in/everton-nascimento-de-oliveira/">
          Everton Bruce
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
