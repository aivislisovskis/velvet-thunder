import { connect } from 'react-redux';

import DetailsComponent from './Details.component';
import {
  actionDetailsUpdate
} from './Details.actions';

const mapStateToProps = (state) => ({
  score: state.DetailsReducer.score,
  noScore: state.DetailsReducer.noScore,
  waitingScore: state.DetailsReducer.waitingScore,
});

const mapDispatchToProps = ({
  getDetails: actionDetailsUpdate
});

const Details = connect(
  mapStateToProps,
  mapDispatchToProps
)(DetailsComponent);

export default Details;
