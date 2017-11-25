import { connect } from 'react-redux';

import WidgetComponent from './Widget.component';
import {
  actionWidgetGetScore
} from './Widget.actions';

const mapStateToProps = (state) => ({
  score: state.WidgetReducer.score,
  noScore: state.WidgetReducer.noScore,
  waitingScore: state.WidgetReducer.waitingScore,
});

const mapDispatchToProps = () => ({
  getScore: actionWidgetGetScore
})

const Widget = connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetComponent);

export default Widget;
