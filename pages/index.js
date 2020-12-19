import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getBikeData } from '../db/db';
import { useSelector, useDispatch } from 'react-redux';

export const getStaticProps = async (context) => {
  const bikeData = await getBikeData();
  return {
    props: {
      initialReduxState: {
        lastUpdate: Date.now(),
        bikeData,
      },
    },
  };
};

export default function Home({ bikeData }) {
  const dispatch = useDispatch();
  const bikes = useSelector((state) => state.bikeData);
  const displayPref = useSelector((state) => state.displayPreference);
  const updatedTime = useSelector((state) => state.lastUpdate);

  const sortByPriceAscending = () =>
    dispatch({
      type: 'SORT_PRICE_ASCENDING',
      lastUpdate: Date.now(),
    });

  return (
    <div>
      <section className="filters">
        <div>{updatedTime}</div>
        <button onClick={sortByPriceAscending}>Price - Low to High</button>
      </section>
      <section className="cards">
        {(displayPref ? displayPref : bikes).map(
          ({ id, name, price, score, image_url, model_variant }) => (
            <Link href={`/bikes/${name}`} key={id}>
              <div className="cards__card">
                <img src={image_url} alt={name} />
                <div className="cards__card__details">
                  {model_variant}
                  <br />
                  {price}
                </div>
              </div>
            </Link>
          )
        )}
      </section>
    </div>
  );
}
