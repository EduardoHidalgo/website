import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Eduardo Hidalgo</title>
          <meta
            name="description"
            content="I'm a Software Engineer passionate about collaborating and
              building technology products using engineering and creativity."
          />
          <meta name="googlebot" content="notranslate" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
