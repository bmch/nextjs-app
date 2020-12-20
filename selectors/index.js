import { createSelector } from 'reselect';

//input selectors - non-memoized selector fns - they dont transform data selected.

const getVisibilityFilter = (state) => state.visibilityFilter;
const getBikeData = (state) => state.bikeData;

export const getVisibleBikeData = createSelector(
  [getVisibilityFilter, getBikeData],
  (visibilityFilter, bikeData) => {
    if (!bikeData) return;
    return bikeData
      .filter((b) => {
        return (
          (visibilityFilter.brand == 'all' ||
            visibilityFilter.brand == b.brand) &&
          (visibilityFilter.price == 'all' ||
            visibilityFilter.price == b.price) &&
          (visibilityFilter.rating == 'all' ||
            visibilityFilter.rating == b.rating) &&
          (visibilityFilter.powermeter == 'all' ||
            visibilityFilter.powermeter == b.includes_powermeter)
        );
      })
      .sort((a, b) => {
        if (visibilityFilter.sort == 'price') {
          return b.price - a.price;
        }
        if (visibilityFilter.sort == 'rating') {
          return b.rating - a.rating;
        }
        if (visibilityFilter.sort == 'alphabetically') {
          return a.name > b.title ? 1 : a.name < b.name ? -1 : 0;
        }
      });
  }
);
