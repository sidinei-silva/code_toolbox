import React from 'react';
import { Link } from 'react-router-dom';
import { Content, Container } from './styles';

import Header from '../../components/Header';
import Generator from '../../components/Generator';

export default function Main() {
  document.title = 'Home - Code Toolbox';
  return (
    <>
      <Header />
      <Container>
        <Content>
          <Link to="/timestamp">
            <Generator
              title="TimeStamp"
              description="Timestamp generator for javascript"
            />
          </Link>

          <Link to="/border-radius">
            <Generator
              title="Border Radius"
              description="Border Radius generator for CSS"
            />
          </Link>

          <Link to="/box-shadow">
            <Generator
              title="Box Shadow"
              description="Box Shadow generator for CSS"
            />
          </Link>
          <Generator title="Coming Soon" description="Coming Soon" />
        </Content>
      </Container>
    </>
  );
}
