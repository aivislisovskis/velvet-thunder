import {
  WIDGET_GET_SCORE,
  WIDGET_NO_SCORE,
  WIDGET_SHOW_SCORE
} from './Widget.actions.names';

export const actionWidgetGetScore = (id) => ({
  type: WIDGET_GET_SCORE,
  id
});

export const actionWidgetNoScore = () => ({
  type: WIDGET_NO_SCORE,
});

export const actionWidgetShowScore = (score) => ({
  type: WIDGET_SHOW_SCORE,
  score
});

const HardCodedFetchLink = 'http://velvetthunderapimf.azurewebsites.net/score';

export const actionWidgetUpdate = (item) => (dispatch) => {
  dispatch(actionWidgetGetScore())
  fetch(HardCodedFetchLink + `?productId=${item}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })
    .then(response => response.json())
    .then(json => dispatch(actionWidgetShowScore(json)));
  }
