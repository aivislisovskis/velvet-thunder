import { connect } from 'react-redux';

import WidgetComponent from './Widget.component';
import {
  actionWidgetGetScore
} from './Widget.actions';

const mapStateToProps = (state) => ({
  score: state.Widget.score,
  noScore: state.Widget.noScore,
  waitingScore: state.Widget.waitingScore,
});

const mapDispatchToProps = () => ({
  getScore: actionWidgetGetScore
})

const Widget = connect(
  mapStateToProps,
  mapDispatchToProps
)(WidgetComponent);

export default Widget;
