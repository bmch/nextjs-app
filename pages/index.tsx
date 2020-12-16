import Link from 'next/link';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getBikeData } from '../db/db';
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async (context) => {
  const bikeData = await getBikeData();
  return {
    props: {
      bikeData,
    },
  };
}

export default function Home({ bikeData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Ipsum Text</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {bikeData.map(({ id, launch_date, name, price, score }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/bikes/${name}`}>
                <a>{name}</a>
              </Link>
              <br />
              {id}
              <br />
              Launch Date {launch_date}
              <br />
              Price - £{price}
              <br />
              Score - {score}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
