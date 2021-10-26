import React from "react"
import MyButtonController from './MyButtonController';
import Store from './Store';

export default class FluxDemo extends React.Component {
  render() {
    return <MyButtonController store={Store} />;
  }
}
