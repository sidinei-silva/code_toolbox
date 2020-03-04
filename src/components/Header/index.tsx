import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content } from './styles';

import logo from '../../assets/img/logo_transparent.png';

const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="generations-hub" />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/timestamp">Timestamp</Link>
          <Link to="/dashboard">BoxShadow</Link>
        </nav>
      </Content>
    </Container>
  );
};

export default Header;
