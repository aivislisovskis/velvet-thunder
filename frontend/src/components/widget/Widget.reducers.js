import {
  WIDGET_GET_SCORE,
  WIDGET_SHOW_SCORE,
  WIDGET_NO_SCORE
} from './Widget.actions.names';

const WidgetReducer = (state = {
  score:"...",
  noScore:true,
  waitingScore:true
}, action) => {
  switch (action.type) {
    case WIDGET_GET_SCORE:
      return {
        ...state,
        waitingScore: true
      };
    case WIDGET_NO_SCORE:
      return {
        ...state,
        waitingScore: false,
        noScore: true
      };
    case WIDGET_SHOW_SCORE:
      return {
        ...state,
        waitingScore: false,
        noScore: false,
        score: action.score
      };
    default:
      return state;
  }
};

export default WidgetReducer;
