import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onRatingChange } from '../../actions';
import styles from './Rating.module.scss';

export default () => {
  const vis = useSelector((state) => state.visibilityFilter);
  const dispatch = useDispatch();
  const ratings = [4, 4.1, 4.5, 4.8, 5];

  return (
    <>
      star rating below here
      <div
        className="styles.Stars"
        style={{ '$-rating': 2.9 }}
        aria-label={'Rating of this product is 2.3 out of 5.'}
      >
        test
      </div>
      <select
        defaultValue={vis.rating}
        onChange={(e) => dispatch(onRatingChange(e.target.value))}
      >
        <option value="all">All</option>
        {ratings.map((r, i) => (
          <option key={i} value={r}>
            {r}
          </option>
        ))}
      </select>
    </>
  );
};
