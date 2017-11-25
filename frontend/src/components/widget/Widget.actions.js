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
