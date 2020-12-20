import { useMemo } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

let store;

const initialState = {
  lastUpdate: 0,
  bikeData: {},
  currentBike: null,
  displayPreference: null,
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

const middleware = [thunk];

const visibilityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_RATING':
      return {
        ...state,
        visibilityFilter: {
          ...state.visibilityFilter,
          rating: action.payload.rating,
        },
      };
    case 'SET_BRAND':
      return {
        ...state,
        visibilityFilter: {
          ...state.visibilityFilter,
          rating: action.payload.rating,
        },
      };
    case 'SET_PRICE':
      return {
        ...state,
        visibilityFilter: {
          ...state.visibilityFilter,
          rating: action.payload.rating,
        },
      };
    case 'SET_WEIGHT':
      return {
        ...state,
        visibilityFilter: {
          ...state.visibilityFilter,
          rating: action.payload.rating,
        },
      };
    case 'SHOW_POWERMETER_INCLUDED':
      return {
        ...state,
        visibilityFilter: {
          ...state.visibilityFilter,
          powermeter: action.powermeter,
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

const rootReducer = combineReducers({
  visibilityFilter: visibilityReducer,
});

function initStore(preloadedState = initialState) {
  return createStore(
    visibilityReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
