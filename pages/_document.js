import React from 'react';
import PropTypes from 'prop-types';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

/* 
keywords:
eduardo hidalgo
eduardo hidalgo díaz
eduardo hidalgo díaz rugama
eduardo hidalgo rugama
eduardo rugama
eduardo díaz
eduardo díaz rugama

eduardo hidalgo facebook
eduardo hidalgo twitter
eduardo hidalgo linkedin
eduarod hidalgo platzi
eduardo hidalgo software
eduardo hidalgo engineer
eduardo hidalgo ingeniero
eduardo hidalgo web
eduardo hidalgo webpage
eduardo hidalgo developer
eduardo hidalgo desarrollador
eduardo hidalgo page
eduardo hidalgo página
eduardo hidalgo now
eduardo hidalgo portafolio

*/

class MyDocument extends Document {
  render() {
    return (
      <html lang="en" dir="ltr">
        <Head>
          <title>Eduardo Hidalgo Webpage</title>
          {/* <!-- Meta Tags descriptivos --> */}
          <meta name="description" content="Software Engineer and Fullstack Developer. Personal web page about Eduardo Hidalgo's projects and skills."></meta>
          <meta name="author" content="Eduardo Hidalgo Díaz Rugama"/>
          {/* <!-- Meta Tags compatibilidad y UX --> */}
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge"/>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <link rel='shortcut icon' type='image/x-icon' href='/static/favicon.ico' />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"/>
          {/* <!-- Meta Tags SEO --> */}
          <meta name="Robots" content="all"/>
          <meta name="google-site-verification" content="69Xur2nA0FF1A0mLjvdVdr1-T5Zbp7UIOITLaZ7vK9w" />
          <link href="https://fonts.googleapis.com/css?family=Oswald|PT+Sans+Narrow" rel="stylesheet"></link>

          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-131822637-1"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  let pageContext;
  
  const page = ctx.renderPage(Component => {
    const WrappedComponent = props => {
      pageContext = props.pageContext;
      return <Component {...props} />;
    };

    WrappedComponent.propTypes = {
      pageContext: PropTypes.object.isRequired,
    };

    return WrappedComponent;
  });

  let css;
  // It might be undefined, e.g. after an error.
  if (pageContext) {
    css = pageContext.sheetsRegistry.toString();
  }

  return {
    ...page,
    pageContext,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        <style
          id="jss-server-side"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: css }}
        />
        {flush() || null}
      </React.Fragment>
    ),
  };
};

export default MyDocument;
