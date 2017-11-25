import React from 'react';

import style from './Widget.css';

class WidgetComponent extends React.Component {
  constructor(props) {
    super(props);
    props.getScore(props.match.params.productId);
  }

  render() {
    const { props } = this;
    return (
     <div>
       <span className={style.colored}>
       Grra
     </span>
     </div>
    );
  }
}

export default WidgetComponent;
