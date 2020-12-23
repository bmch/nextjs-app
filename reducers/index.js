const initialState = {
  lastUpdate: 0,
  bikeData: {},
  currentBike: null,
  visibilityFilter: {
    sortParams: null,
    rating: 'all',
    brand: 'all',
    weight: 'all',
    score: 'all',
    price: 'all',
    powermeter: false,
  },
};

const initialVisibilityState = {
  visibilityFilter: {
    sortParams: null,
    rating: 'all',
    brand: 'all',
    weight: 'all',
    score: 'all',
    price: 'all',
    powermeter: false,
  },
};

const visibilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RATING_MIN':
      return {
        ...state,
        visibilityFilter: {
          ...state.visibilityFilter,
          rating: action.payload,
        },
      };
    case 'SHOW_POWERMETER_INCLUDED':
      return {
        ...state,
        visibilityFilter: {
          ...state.visibilityFilter,
          powermeter: action.payload,
        },
      };
    case 'SET_SORT_PARAMS':
      return {
        ...state,
        visibilityFilter: {
          ...state.visibilityFilter,
          rating: action.payload.rating,
        },
      };
    default:
      return state;
  }
};

export default visibilityReducer;

// case 'SET_BRAND':
//   return {
//     ...state,
//     visibilityFilter: {
//       ...state.visibilityFilter,
//       rating: action.payload.rating,
//     },
//   };
// case 'SET_PRICE':
//   return {
//     ...state,
//     visibilityFilter: {
//       ...state.visibilityFilter,
//       rating: action.payload.rating,
//     },
//   };
// case 'SET_WEIGHT':
//   return {
//     ...state,
//     visibilityFilter: {
//       ...state.visibilityFilter,
//       rating: action.payload.rating,
//     },
//   };
