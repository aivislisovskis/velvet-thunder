import React from 'react';

import style from './Widget.css';

class WidgetComponent extends React.Component {
  constructor(props) {
    super(props);
    props.getScore();
  }

  render() {
    const { props } = this;
    return (
     <div>
     </div>
    );
  }
}

export default WidgetComponent;
