import {
  DETAILS_GET_SCORE,
  DETAILS_SHOW_SCORE,
  DETAILS_NO_SCORE
} from './Details.actions.names';

const DetailsReducer = (state = {
  score:"...",
  noScore:true,
  waitingScore:true
}, action) => {
  switch (action.type) {
    case DETAILS_GET_SCORE:
      return {
        ...state,
        waitingScore: true
      };
    case DETAILS_NO_SCORE:
      return {
        ...state,
        waitingScore: false,
        noScore: true
      };
    case DETAILS_SHOW_SCORE:
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

export default DetailsReducer;
