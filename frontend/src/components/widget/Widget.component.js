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
      <div className={style.vt-logo}>
      <div className={style.upper}>
        <span className={style.char1}>s</span>
        <span className={style.char2}>u</span>
        <span className={style.char3}>s</span>
        <span className={style.char4}>t</span>
        <span className={style.char5}>a</span>
        <span className={style.char6}>i</span>
        <span className={style.char7}>n</span>
        <span className={style.char8}>a</span>
        <span className={style.char9}>b</span>
        <span className={style.char10}>i</span>
        <span className={style.char11}>l</span>
        <span className={style.char12}>i</span>
        <span className={style.char13}>t</span>
        <span className={style.char14}>y</span>
      </div>
      <div className={style.star}>
        <div className={style.seal}>
          <div className={style.face}>
            <div className={style.evaluation}>
            {props.score}
            </div>
          </div>
        </div>
      </div>
      <div className={style.lower}>
        <span className={style.char1}>s</span>
        <span className={style.char2}>c</span>
        <span className={style.char3}>o</span>
        <span className={style.char4}>r</span>
        <span className={style.char5}>e</span>
      </div>
    </div>
    );
  }
}

export default WidgetComponent;
