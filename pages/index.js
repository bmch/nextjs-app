import React from 'react';
import Link from 'next/link';
import { getBikeData } from '../db/db';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleBikeData } from '../selectors';

export const getStaticProps = async (context) => {
  const bikeData = await getBikeData();
  return {
    props: {
      initialReduxState: {
        lastUpdate: Date.now(),
        bikeData,
        currentBike: null,
        displayPreference: null,
        visibilityFilter: {
          sortParams: null,
          rating: 'all',
          brand: 'all',
          weight: 'all',
          score: 'all',
          price: 'all',
          powermeter: 'all',
        },
      },
    },
  };
};

export default function Home(props) {
  console.log('this is props in home', props);
  const dispatch = useDispatch();

  const bikeData = useSelector((state) => getVisibleBikeData(state));
  //const bikeData = useSelector((state) => state.bikeData);

  const updatedTime = useSelector((state) => state.lastUpdate);

  return (
    <div>
      <section className="filters">
        <div>{updatedTime}</div>

        <button
          onClick={() =>
            dispatch({ type: 'SHOW_POWERMETER_INCLUDED', powermeter: 'all' })
          }
        >
          show all
        </button>

        <button
          onClick={() =>
            dispatch({ type: 'SHOW_POWERMETER_INCLUDED', powermeter: true })
          }
        >
          filter - only power meter included
        </button>
      </section>

      <section className="cards">
        {bikeData &&
          bikeData.map(
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
