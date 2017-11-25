/* eslint-disable no-throw-literal */
import { combineEpics } from 'redux-observable';
import Rx from 'rxjs';
import { WIDGET_GET_SCORE } from './Widget.actions.names';
import { actionWidgetGetScore, actionWidgetNoScore, actionWidgetShowScore } from './Widget.actions';

const HardCodedFetchLink = 'http://velvetthunderapimf.azurewebsites.net/score';
const ProductId = 1;

// Epic to check if this is < 3 loan request per minute and if it is not - firing up mutaion for new loan
const getData = (action$, store) =>
  action$.ofType(WIDGET_GET_SCORE)
    .map((action) => {
        console.info(action);
      }
      );

const epicWidget = combineEpics(
  getData
);

export default epicWidget;
