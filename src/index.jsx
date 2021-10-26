import React from "react";
import ReactDOM from "react-dom";

// import Profile from './components/Profile';
import FluxDemo from './components/FluxDemo';

// const props = {
//   name: 'Mukti',
//   age: 35,
// }

ReactDOM.render(
  <React.StrictMode>
    {/* <Profile name={props.name} /> */}
    {/* <App /> */}
    <FluxDemo />
  </React.StrictMode>,
  document.getElementById('root')
);