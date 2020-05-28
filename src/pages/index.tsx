/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { Content, StyledContainer } from '../styles/main/styles';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Generator from '../components/Generator';

export default function Main() {
  return (
    <>
      <Head>
        <title> Code Toolbox</title>
        <meta
          name="description"
          content="A website with a toolbox for developers, with code generators and conversions to help in everyday life."
        />
        <meta
          name="keywords"
          content="Code, code, toolbox, Toolbox, Code Toolbox, code toolbox, CodeToolbox, codetoolbox, BorderRadius, RadiusBorder, borderradius, radiusborder, Border Radius, Border, border, radius, Radius, Radius Border, radius border, boxshadow, shadowbox, BoxShadow, ShadowBox, Shadow Box, shadow box, Box Shadow, box shadow , Box, Shadow, shadow, box, timestamp, Timestamp, Time Stamp, time stamp, time ,CSS, JavaScript"
        />
      </Head>
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
