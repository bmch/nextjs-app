import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onRatingChange } from '../../actions';

const Rating = () => {
  const vis = useSelector((state) => state.visibilityFilter);
  const dispatch = useDispatch();
  const ratings = [4, 4.1, 4.5, 4.8, 5];
  // style={{ $rating: 2.9 }}
  const starStyle = {
    '--rating': 3.5,
  };

  return (
    <>
      star rating below here
      <div
        className="Stars"
        style={starStyle}
        aria-label={'Rating of this product is 2.3 out of 5.'}
      ></div>
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

export default Rating;
