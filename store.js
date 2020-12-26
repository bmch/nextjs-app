import { useMemo } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import visibilityReducer from './reducers';

let store;

const middleware = [thunk];

// const rootReducer = combineReducers({
//   visibilityFilter: visibilityReducer,
// });
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
