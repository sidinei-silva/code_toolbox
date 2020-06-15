/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import NextApp from 'next/app';
import Router from 'next/router';
import { ThemeProvider } from 'styled-components';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { StylesProvider } from '@material-ui/core/styles';

import { initGA, logPageView } from '../utils/analytics.js';

import GlobalStyle from '../styles/global';

import theme from '../theme';

import '../styles/button-builder/presets/bootstrap.css';

export default class App extends NextApp {
  // Check if in production
  isProduction = process.env.NODE_ENV === 'production';

  componentDidMount() {
    if (this.isProduction) {
      initGA();
      logPageView();
      Router.events.on('routeChangeComplete', logPageView);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyle />
          <StylesProvider injectFirst>
            <Component {...pageProps} />
          </StylesProvider>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}
