// import { AppProps } from "next/app";
// import MainLayout from "../layout";
// import { ReactNode } from "react";

// // Define a custom page type to include the `disableLayout` property
// interface NextPageWithLayout extends React.FC {
//   disableLayout?: boolean;
// }

// // Extend AppProps to include the custom `NextPageWithLayout` type
// interface AppPropsWithLayout extends AppProps {
//   Component: NextPageWithLayout;
// }

// function MyApp({ Component, pageProps }: AppPropsWithLayout): ReactNode {
//   // Check if the page has `disableLayout` set
//   if (Component.disableLayout) {
//     return <Component {...pageProps} />;
//   }

//   return (
//     <MainLayout>
//       <Component {...pageProps} />
//     </MainLayout>
//   );
// }

// export default MyApp;
