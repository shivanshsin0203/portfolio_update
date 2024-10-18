import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Shivansh Singh is an amazing developer that like to make complex stuff as easy as possible."
      />
      <meta
        name="keywords"
        content=""
      />
      <meta property="og:title" content="Shivansh Singh Portfolio" />
      <meta
        property="og:description"
        content="A normal life is Boring."
      />
      <meta property="og:url" content="" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Shivansh Singh',
};
