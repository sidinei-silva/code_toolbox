/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import NextDocument, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet as StyledComponentSheets } from 'styled-components';
import { ServerStyleSheets as MaterialUiServerStyleSheets } from '@material-ui/core/styles';

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const materialUiSheets = new MaterialUiServerStyleSheets();
    const styledComponentSheet = new StyledComponentSheets();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            styledComponentSheet.collectStyles(
              materialUiSheets.collect(<App {...props} />),
            ),
        });
      const initialProps = await NextDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialUiSheets.getStyleElement()}
            {styledComponentSheet.getStyleElement()}
          </React.Fragment>,
        ],
      };
    } finally {
      styledComponentSheet.seal();
    }
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <script
            data-ad-client="ca-pub-7691472053775313"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
          <meta
            name="description"
            content="A website with a toolbox for developers, with code generators and conversions to help in everyday life."
          />
          <meta
            name="keywords"
            content="Code, code, toolbox, Toolbox, Code Toolbox, code toolbox, CodeToolbox, codetoolbox, BorderRadius, RadiusBorder, borderradius, radiusborder, Border Radius, Border, border, radius, Radius, Radius Border, radius border, boxshadow, shadowbox, BoxShadow, ShadowBox, Shadow Box, shadow box, Box Shadow, box shadow , Box, Shadow, shadow, box, timestamp, Timestamp, Time Stamp, time stamp, time ,CSS, JavaScript"
          />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta charset="utf-8" />
          <title>Code Toolbox</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
