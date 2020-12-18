import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image'
import Layout, { siteTitle } from '../components/layout';
import { getBikeData } from '../db/db';
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async (context) => {
  const bikeData = await getBikeData();
  return {
    props: {
      bikeData,
    },
  };
  // sort
  // weight  
  // review score 
  // price
  // brand

  // aero/ light/ mountain
  //
}

export default function Home({ bikeData }) {

  const [bikes, setBikes] = React.useState(bikeData);

  useEffect(() => {
    setBikes(bikes);
  }, [bikes])

  const sortByPriceAscending = () => {
    const sorted = [...bikes].sort((a, b) => {
      return a.price - b.price;
    });
    setBikes(sorted);
  };

  return (

    // <Head>
    //   <title>{siteTitle}</title>
    // </Head>
    <div>
      <section className="filters">
        <button onClick={sortByPriceAscending}>Price - Low to High</button>

      </section>
      <section className="cards" >
        {bikes.map(({ id, launch_date, name, price, score, image_url, model_variant }) => (

          <Link href={`/bikes/${name}`} key={id}>
            <div className="cards__card" >
              <img
                src={image_url}
                alt={name}
              />
              <div className="cards__card__details">
                {model_variant}
                <br />
                {price}
              </div>
            </div>
          </Link>
        ))}

      </section>
    </div>
  );
}
