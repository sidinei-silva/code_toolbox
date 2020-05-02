import React from 'react';

import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';

import theme from './theme';

import Routes from './routes';

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </MuiThemeProvider>
  );
}
