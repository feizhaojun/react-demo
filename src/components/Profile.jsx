import React from "react";
import Counter from './Counter';

class Profile extends React.Component {
  
  constructor() {
    super();
    console.log(React.PropTypes);
  }

  render() {
    return (
      <div className="profile-component">
        <h1>My Name is {this.props.name}.</h1>
        <h2>My age is {this.props.age}.</h2>
        <div>
          <Counter />
        </div>
      </div>
    );
  }
}

export default Profile;