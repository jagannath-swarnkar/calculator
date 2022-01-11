import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document";
import * as config from "../utils/config";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    const APPNAME = config.APP_NAME;
    const DESC = config.APP_DESCRIPTION;
    const IMAGE = config.APP_ICON;
    const TITLE = config.APP_NAME;
    const COLOR = config.PRIMARY_COLOR;
    const APPLE_TOUCH_ICON = config.APPLE_TOUCH_ICON;
    const FAV_ICON16 = config.FAV_ICON16;
    const FAV_ICON36 = config.FAV_ICON36;
    const DEFAULT_LANGUAGE = config.DEFAULT_LANGUAGE;
    const APP_URL = config.APP_URL;
    const OG_IMAGE = config.OG_IMAGE;

    return (
      <Html lang={DEFAULT_LANGUAGE}>
        <Head>
          <meta charSet="UTF-8"></meta>
          <link rel="icon" href={IMAGE} type="image/png" sizes="16x16"></link>
          <meta name="application-name" content={APPNAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={TITLE} />
          <meta name="description" content={DESC} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="msapplication-TileColor" content={COLOR} />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content={COLOR} />
          <link rel="apple-touch-icon" sizes="180x180" href={APPLE_TOUCH_ICON} />
          <link rel="icon" type="image/png" sizes="32x32" href={FAV_ICON16} />
          <link rel="icon" type="image/png" sizes="16x16" href={FAV_ICON36} />
          <link rel="manifest" href="/menifest.json" />
          <link rel="shortcut icon" href={FAV_ICON36} />

          {/* <!-- Primary Meta Tags --> */}

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website"/>
          <meta property="og:url" content={APP_URL}/>
          <meta property="og:title" content={TITLE}/>
          <meta property="og:description" content={DESC}/>
          <meta property="og:image" content={OG_IMAGE}/>

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content={APP_URL}/>
          <meta property="twitter:title" content={TITLE}/>
          <meta property="twitter:description" content={DESC}/>
          <meta property="twitter:image" content={OG_IMAGE}></meta>
                   
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
