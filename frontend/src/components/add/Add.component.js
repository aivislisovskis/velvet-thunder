import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import {List, ListItem} from 'material-ui/List';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';


import './Add.css';

const style = {
  margin: 20,
};

const containerstyle = {
  margin: 'auto',
  width: 500,
}

const paddingStyle = {
  padding:20,
}

class AddComponent extends React.Component {
  constructor(props) {
    super(props);
    props.getAdd(props.match.params.productId);
  }

  render() {
    const { props } = this;

    const onUpdateInput = (text) => {
      props.onUpdateInput(text);
    }

    return (
      <div>
        <AppBar
      title="Eternal Earth"
    />
    <div style={containerstyle}>
    <Paper style={style}>
    <Toolbar>
    <ToolbarTitle text="Company submit form" />
    </Toolbar>
    <div style={paddingStyle}>
          <TextField
        hintText="Enter company name"
        floatingLabelText="Company name"
        onChange={(event) => props.onChangeCompany(event.target.value)}
        value={props.companyName}
      /><br/>
      <TextField
        hintText="Enter product title"
        floatingLabelText="Product title"
        onChange={(event) => props.onChangeProduct(event.target.value)}
        value={props.productName}
      /><br/>
        <AutoComplete
          floatingLabelText="Search factory..."
          filter={AutoComplete.fuzzyFilter}
          dataSource={props.factoryList}
          dataSourceConfig={{ text: 'text', value: 'value',}}
          maxSearchResults={10}
          onNewRequest={props.useItem}
          onUpdateInput={onUpdateInput}
          searchText={props.searchText}
        />
      <List>{props.active.map((element, key) => {
        return <ListItem primaryText={element.text} rightIcon={<IconButton onClick={() => props.remove(key)} tooltip="Remove from list">
      <ActionDelete />
    </IconButton>} />;
      })}
      </List>
      <RaisedButton label="Submit" primary={true} onClick={() => props.saveProduct(props.active, props.companyName, props.productName)}/>
      </div>
      </Paper>
    </div>
    </div>
    );
  }
}

export default AddComponent;
