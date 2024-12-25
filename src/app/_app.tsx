import Layout from './layout';

function MyApp({ Component, pageProps }) {
  // Apply layout conditionally
  const getLayout = Component.getLayout || ((page: any) => {page});

  return getLayout(<Component {...pageProps} />);
}

export default MyApp;