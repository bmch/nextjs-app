import React from 'react';
import Link from 'next/link';
import { getBikeData } from '../db/db';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleBikeData } from '../selectors';
import { togglePowerMeter } from '../actions';
import Pane from '../components/Pane';

export const getStaticProps = async (context) => {
  const bikeData = await getBikeData();
  return {
    props: {
      initialReduxState: {
        lastUpdate: Date.now(),
        bikeData,
        currentBike: null,
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

  const bikeData = useSelector((state) => {
    if (state.visibilityFilter) {
      console.log('running selector... ');
      return getVisibleBikeData(state);
    }
    return state.bikeData;
  });

  console.log('bike data is ', bikeData);

  //const bikeData = useSelector((state) => state.bikeData);

  const updatedTime = useSelector((state) => state.lastUpdate);

  return (
    <div>
      <section className="filters">
        <div>{updatedTime}</div>
        <Pane />
        <button onClick={() => dispatch(togglePowerMeter('all'))}>
          show all
        </button>

        <button onClick={() => dispatch(togglePowerMeter(true))}>
          filter - only power meter included
        </button>
      </section>

      <section className="cards">
        {bikeData &&
          bikeData.map(
            ({ id, name, price, score, image_url, model_variant }) => (
              <Link href={`/bikes/${name}`} key={id}>
                <div className="cards__card">
                  <img
                    className="cards__card__img"
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
            )
          )}
      </section>
    </div>
  );
}
