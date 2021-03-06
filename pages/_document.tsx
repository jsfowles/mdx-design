// @ts-nocheck
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
          <title>Blooper</title>
          <link rel="stylesheet" href="https://use.typekit.net/dha3ams.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
