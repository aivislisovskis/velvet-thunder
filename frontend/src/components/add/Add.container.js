import { connect } from 'react-redux';

import AddComponent from './Add.component';
import {
  actionAddUpdate,
  actionAddActiveFactoryList,
  actionAddPassiveFactoryList,
  actionAddSearch,
  actionAddSave,
  actionAddChangeCompany,
  actionAddChangeProduct
} from './Add.actions';

const mapStateToProps = (state) => ({
  factoryList: state.AddReducer.factoryList,
  noScore: state.AddReducer.noScore,
  waitingScore: state.AddReducer.waitingScore,
  searchText: state.AddReducer.searchText,
  active: state.AddReducer.active,
  companyName: state.AddReducer.companyName,
  productName: state.AddReducer.productName
});

const mapDispatchToProps = ({
  getAdd: actionAddUpdate,
  useItem: actionAddActiveFactoryList,
  onUpdateInput: actionAddSearch,
  remove: actionAddPassiveFactoryList,
  saveProduct: actionAddSave,
  onChangeCompany: actionAddChangeCompany,
  onChangeProduct: actionAddChangeProduct,
});

const Add = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddComponent);

export default Add;
