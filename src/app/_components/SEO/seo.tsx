import Head from 'next/head';

const seo = ({ title, description }: any) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
  </>
);

export default seo;