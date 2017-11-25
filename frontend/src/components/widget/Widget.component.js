import React from 'react';

import './Widget.css';

class WidgetComponent extends React.Component {
  constructor(props) {
    super(props);
    props.getScore();
  }

  render() {
    const { props } = this;
    return (
      <a className="vtlogolink" target="_blank" href={ "/details/" + props.match.params.productId }>
      <div className="vtlogo green">
      <div className="upper">
        <span className="char1">s</span>
        <span className="char2">u</span>
        <span className="char3">s</span>
        <span className="char4">t</span>
        <span className="char5">a</span>
        <span className="char6">i</span>
        <span className="char7">n</span>
        <span className="char8">a</span>
        <span className="char9">b</span>
        <span className="char10">i</span>
        <span className="char11">l</span>
        <span className="char12">i</span>
        <span className="char13">t</span>
        <span className="char14">y</span>
      </div>
      <div className="star">
        <div className="seal">
          <div className="face">
            <div className="evaluation">
            {props.score}
            </div>
          </div>
        </div>
      </div>
      <div className="lower">
        <span className="char1">s</span>
        <span className="char2">c</span>
        <span className="char3">o</span>
        <span className="char4">r</span>
        <span className="char5">e</span>
      </div>
    </div>
    </a>
    );
  }
}

export default WidgetComponent;
