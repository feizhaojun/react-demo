import React from "react";
import ButtonActions from './ButtonActions.js';

export default class MyButtonController extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = this.props.store.getAll();
  }

  createNewItem() {
    ButtonActions.addNewItem('new Test Item');
    this.setState(this.props.store.getAll());
  }
  render() {
    return <div>
      {console.log('render', this.state)}
      <button onClick={() => this.createNewItem()}>New Item</button>
    </div>;
  }
}