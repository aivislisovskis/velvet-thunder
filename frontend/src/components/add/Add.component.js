import React from 'react';
import AutoComplete from 'material-ui/AutoComplete';
import {List, ListItem} from 'material-ui/List';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

import './Add.css';

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
          <TextField
        hintText="Enter company name"
        floatingLabelText="Company name"
        onChange={(event) => props.onChangeCompany(event.target.value)}
        defaultValue={props.companyName}
      />
      <TextField
        hintText="Enter product title"
        floatingLabelText="Product title"
        onChange={(event) => props.onChangeProduct(event.target.value)}
        defaultValue={props.productName}
      />
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
      <RaisedButton label="Default" onClick={() => props.saveProduct(props.active, props.companyName, props.productName)}/>
    </div>
    );
  }
}

export default AddComponent;
