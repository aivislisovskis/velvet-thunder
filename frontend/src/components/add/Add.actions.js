import {
  ADD_GET_SCORE,
  ADD_NO_SCORE,
  ADD_SHOW_SCORE,
  ADD_ACTIVE_FACTORY_LIST,
  ADD_PASSIVE_FACTORY_LIST,
  ADD_SEARCH,
  ADD_PREPARE_SENDING,
  ADD_DONE_SENDING,
  ADD_CHANGE_COMPANY,
  ADD_CHANGE_PRODUCT,
} from './Add.actions.names';

export const actionAddSearch = (searchText) => ({
  type: ADD_SEARCH,
  searchText
});

export const actionAddChangeCompany = (text) => ({
  type: ADD_CHANGE_COMPANY,
  text
});

export const actionAddChangeProduct = (text) => ({
  type: ADD_CHANGE_PRODUCT,
  text
});

export const actionAddGetScore = (id) => ({
  type: ADD_GET_SCORE,
  id
});

export const actionAddsNoScore = () => ({
  type: ADD_NO_SCORE,
});

export const actionAddShowScore = (factoryList) => ({
  type: ADD_SHOW_SCORE,
  factoryList
});

export const actionAddActiveFactoryList = (factory) => ({
  type: ADD_ACTIVE_FACTORY_LIST,
  factory
});

export const actionAddPassiveFactoryList = (factory) => ({
  type: ADD_PASSIVE_FACTORY_LIST,
  factory
});

export const actionAddPrepareSending = () => ({
  type: ADD_PREPARE_SENDING
});

export const actionAddDoneSending = () => ({
  type: ADD_DONE_SENDING
})

const HardCodedFetchLink = 'http://velvetthunderapimf.azurewebsites.net/factories';

export const actionAddUpdate = (item) => (dispatch) => {
  dispatch(actionAddGetScore())
  fetch(HardCodedFetchLink, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })
    .then(response => response.json())
    .then(json => {
      const factoryList = json.map((element) => ({ value: element.UID, text: `${element.Location}; ${element.Latitude}, ${element.Longitude}`}));
      dispatch(actionAddShowScore(factoryList))
    }
    );
  }

  const HardCodedFetchLink2 = 'http://velvetthunderapimf.azurewebsites.net/product';

  export const actionAddSave = (list, company, product) => (dispatch) => {
    dispatch(actionAddPrepareSending())
    fetch(HardCodedFetchLink2, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        list,
        company,
        product
      })
    })
      .then(json => {
        dispatch(actionAddDoneSending())
      }
      );
    }
