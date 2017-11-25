import {
  DETAILS_GET_SCORE,
  DETAILS_NO_SCORE,
  DETAILS_SHOW_SCORE
} from './Details.actions.names';

export const actionDetailsGetScore = (id) => ({
  type: DETAILS_GET_SCORE,
  id
});

export const actionDetailsNoScore = () => ({
  type: DETAILS_NO_SCORE,
});

export const actionDetailsShowScore = (score) => ({
  type: DETAILS_SHOW_SCORE,
  score
});

const HardCodedFetchLink = 'http://velvetthunderapimf.azurewebsites.net/detailedscore';

export const actionDetailsUpdate = (item) => (dispatch) => {
  dispatch(actionDetailsGetScore())
  fetch(HardCodedFetchLink + `?productId=${item}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })
    .then(response => response.json())
    .then(json => dispatch(actionDetailsShowScore(json)));
  }
