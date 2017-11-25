import React from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import FileFolder from 'material-ui/svg-icons/file/folder';
import ActionAssignment from 'material-ui/svg-icons/action/assignment';
import {blue500, yellow600} from 'material-ui/styles/colors';
import EditorInsertChart from 'material-ui/svg-icons/editor/insert-chart';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import './Details.css';

const style = {
};


class DetailsComponent extends React.Component {
  constructor(props) {
    super(props);
    props.getDetails(props.match.params.productId);
  }

  render() {
    const { props } = this;
    return (
    <div className="body">
      <AppBar
      title="Eternal Earth"
    />
    <Toolbar>
    <ToolbarTitle text="Sustainability scoring of washing machine made by Grammargate Corparation" />
    </Toolbar>
    <div className="gridContainer">
    <div className="sidebar">
    <a className="vtlogolink">
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
            9.3
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
    <List style={style}>
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        rightIcon={<ActionInfo />}
        primaryText="Ironize"
        secondaryText="Iron supplier"
      />
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        rightIcon={<ActionInfo />}
        primaryText="Big Metal"
        secondaryText="Metal plant fron Africa"
      />
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        rightIcon={<ActionInfo />}
        primaryText="Plactic Fun co"
        secondaryText="Plastic material supplier"
      />
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        rightIcon={<ActionInfo />}
        primaryText="Plactic Fun co"
        secondaryText="Plastic material supplier"
      />
      <ListItem
        leftAvatar={<Avatar icon={<FileFolder />} />}
        rightIcon={<ActionInfo />}
        primaryText="Plactic Fun co"
        secondaryText="Plastic material supplier"
      />
    </List>
    </div>
    <div className="mainbar">
      </div>
      </div>
    </div>
    );
  }
}

export default DetailsComponent;
