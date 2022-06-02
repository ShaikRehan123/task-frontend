import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
