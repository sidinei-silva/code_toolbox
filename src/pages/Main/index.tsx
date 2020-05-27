import React from 'react';
import { Content, StyledContainer } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Generator from '../../components/Generator';

export default function Main() {
  document.title = 'Home - Code Toolbox';
  return (
    <>
      <Header />
      <StyledContainer>
        <Content>
          <Generator
            title="TimeStamp"
            description="Timestamp generator for javascript"
          />

          <Generator
            title="Border Radius"
            description="Border Radius generator for CSS"
          />

          <Generator
            title="Box Shadow"
            description="Box Shadow generator for CSS"
          />
          <Generator title="Coming Soon" description="Coming Soon" />
        </Content>
      </StyledContainer>
      <Footer />
    </>
  );
}
