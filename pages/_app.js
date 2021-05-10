import "../styles/index.scss";
import "../styles/media-container.scss";
import Meta from "./components/meta";

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
