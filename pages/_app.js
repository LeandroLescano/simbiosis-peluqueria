import "../styles/index.scss";
import "../styles/media-container.scss";
import "../styles/sponsors.scss";
import 'swiper/swiper.scss';

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
