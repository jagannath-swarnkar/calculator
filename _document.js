import Document, { Html, Head, Main, NextScript } from "next/document";
import { PRIMARY_COLOR } from "../lib/color";
import {
  APP_NAME,
  DESCRIPTION,
  FAV_ICON16,
  FAV_ICON36,
  APP_ICON,
  DEFAULT_LANGUAGE
} from "../lib/config";
import { SheetsRegistry, JssProvider, createGenerateId } from "react-jss";
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    /**
     * @Author Bhoomika
     * @Date 28-04-2021
     * @returns configuration to render react-jss styles on server side
     */
    const registry = new SheetsRegistry();
    const generateId = createGenerateId();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => (
          <JssProvider registry={registry} generateId={generateId}>
            <App {...props} />
          </JssProvider>
        ),
      });
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
        </>
      ),
    };
  }
  render() {
    const APPNAME = APP_NAME;
    const DESC = DESCRIPTION;
    const IMAGE = APP_ICON;
    const TITLE = APP_NAME;
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
          <meta name="msapplication-TileColor" content={PRIMARY_COLOR} />
          <meta name="msapplication-tap-highlight" content="no" />
          <meta name="theme-color" content={PRIMARY_COLOR} />
          <link rel="apple-touch-icon" sizes="180x180" href={IMAGE} />
          <link rel="icon" type="image/png" sizes="32x32" href={FAV_ICON16} />
          <link rel="icon" type="image/png" sizes="16x16" href={FAV_ICON36} />
          <link rel="manifest" href="/menifest.json" />
          {/* <link rel='mask-icon' href='/static/icons/safari-pinned-tab.svg' color='#5bbad5' /> */}
          {/* <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          /> */}
          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap"
            rel="stylesheet"
          />
          {/* <script
            defer="defer"
            src={`https://maps.googleapis.com/maps/api/js?key=${MAP_KEY}&libraries=places`}
          ></script> */}
          {/* <script defer={true} src="https://sdk.amazonaws.com/js/aws-sdk-2.19.0.min.js"></script> */}
          <link rel="shortcut icon" href={FAV_ICON36} />
          <script src="/js/fingerprint.js" type="text/javascript"></script>
          <link
            rel="preload"
            as="font"
            type="font/ttf"
            href="/font/Avenir-Book.ttf"
          />
          <link
            rel="preload"
            as="font"
            type="font/ttf"
            href="/font/Avenir-Light.ttf"
          />
          <link
            rel="preload"
            as="font"
            type="font/ttf"
            href="/font/Avenir-Roman.ttf"
          />
          <link
            rel="preload"
            as="font"
            type="font/otf"
            href="/font/AvenirLTStd-Book.otf"
          />
          <link
            rel="preload"
            as="font"
            type="font/otf"
            href="/font/AvenirLTStd-Light.otf"
          />
          <link
            rel="preload"
            as="font"
            type="font/otf"
            href="/font/AvenirLTStd-Roman.otf"
          />
          <link
            rel="preload"
            as="font"
            type="font/ttf"
            href="/font/Avenir-Heavy.ttf"
          />
          <link
            rel="preload"
            as="font"
            type="font/ttf"
            href="/font/Avenir-Black.ttf"
          />
          <script src="/js/jquery.min.js" defer="defer"></script>
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js "
            defer="defer"
          ></script>
          {/* <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
            defer="defer"
          ></script> */}
          <link
            as="style"
            rel="stylesheet preload"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
            type="text/css"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Carter+One&family=Cookie&family=Kaushan+Script&family=Permanent+Marker&family=Rampart+One&display=swap"
            rel="stylesheet" />
          <script
            src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
            defer="defer"
          ></script>
          <link
            as="style"
            rel="stylesheet preload"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
            type="text/css"
            crossOrigin="anonymous"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Dancing+Script:wght@700&family=Pacifico&display=swap"
          />

          {/* IVS Player CDN */}
          <script src="https://player.live-video.net/1.5.0/amazon-ivs-player.min.js" />

          {/* <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          /> */}
          {/* <link
            rel="stylesheet"
            type="text/css"
            href="/public/css/styles.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/public/css/home_mobile.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/public/css/modals.css"
          /> */}
          {/* Cropper Img CDN */}
          {/* <script
            src="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/0.8.1/cropper.min.js"
            defer="defer"
          ></script> */}
          {/* <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.6/cropper.min.css"
          /> */}
          {/* Cropper CDN */}
          {/* 
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/cropperjs/1.5.6/cropper.min.js"
            defer="defer"
          ></script> */}
          {/* Apex Charts CDN */}
          {/* <script src="https://cdn.jsdelivr.net/npm/apexcharts" defer="defer"></script>
          <script
            src="https://cdn.jsdelivr.net/npm/react-apexcharts"
            defer="defer"
          ></script> */}
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
