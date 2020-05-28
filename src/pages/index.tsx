/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { Content, StyledContainer } from './styles';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Generator from '../components/Generator';

export default function Main() {
  return (
    <>
      <Header />
      <StyledContainer>
        <Content>
          <Link href="/timestamp">
            <a>
              <Generator
                title="TimeStamp"
                description="Timestamp generator for javascript"
              />
            </a>
          </Link>

          <Link href="/border-radius">
            <a>
              <Generator
                title="Border Radius"
                description="Border Radius generator for CSS"
              />
            </a>
          </Link>

          <Link href="/box-shadow">
            <a>
              <Generator
                title="Box Shadow"
                description="Box Shadow generator for CSS"
              />
            </a>
          </Link>

          <Generator title="Coming Soon" description="Coming Soon" />
        </Content>
      </StyledContainer>
      <Footer />
    </>
  );
}
