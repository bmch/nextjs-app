export const togglePowerMeter = (payload) => ({
  type: 'SHOW_POWERMETER_INCLUDED',
  payload,
});

export const onRatingChange = (payload) => ({
  type: 'SET_RATING_MIN',
  payload,
});
