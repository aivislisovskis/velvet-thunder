import {
  ADD_GET_SCORE,
  ADD_SHOW_SCORE,
  ADD_NO_SCORE,
  ADD_ACTIVE_FACTORY_LIST,
  ADD_PASSIVE_FACTORY_LIST,
  ADD_SEARCH,
  ADD_PREPARE_SENDING,
  ADD_DONE_SENDING
} from './Add.actions.names';

const AddReducer = (state = {
  factoryList:[],
  noScore:true,
  waitingScore:true,
  active:[],
  searchText: '',
}, action) => {
  switch (action.type) {
    case ADD_GET_SCORE:
      return {
        ...state,
        waitingScore: true
      };
    case ADD_SEARCH:
      return {
        ...state,
        searchText: action.searchText
      };
    case ADD_NO_SCORE:
      return {
        ...state,
        waitingScore: false,
        noScore: true
      };
    case ADD_SHOW_SCORE:
      return {
        ...state,
        waitingScore: false,
        noScore: false,
        factoryList: action.factoryList
      };
      case ADD_ACTIVE_FACTORY_LIST:
        return {
          ...state,
          searchText: '',
          active: [...state.active, action.factory]
        };
      case ADD_DONE_SENDING:
        return {
          ...state,
          searchText: '',
          active: []
        }
      case ADD_PASSIVE_FACTORY_LIST:
        return {
          ...state,
          active: [
             ...state.active.slice(0, action.factory),
             ...state.active.slice(action.factory + 1)
           ]
        };
    default:
      return state;
  }
};

export default AddReducer;
