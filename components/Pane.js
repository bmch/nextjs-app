// selectedYear,
// selectedGenre,
// selectedRating,
// years = [],
// genres = [],
// ratings = [],
// sorting,
// onYearChange,
// onGenreChange,
// onRatingChange,
// onSortingChange,

// visibilityFilter: {
//     sortParams: null,
//     rating: 'all',
//     brand: 'all',
//     weight: 'all',
//     score: 'all',
//     price: 'all',
//     powermeter: 'all'
// }

import Rating from './rating/Rating';

const Pane = () => {
  return (
    <div>
      Filters:
      <Rating />
    </div>
  );
};

export default Pane;
