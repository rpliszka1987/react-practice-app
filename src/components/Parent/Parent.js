import React from "react";
// Import Child component
import Child from "../Child/Child";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    // State initial value
    this.state = { name: "Robert" };
    this.changeName = this.changeName.bind(this);
  }

  //   Function to change the value of name state which will be passed back from Child component
  changeName(newName) {
    this.setState({
      name: newName,
    });
  }

  render() {
    return <Child name={this.state.name} onChange={this.changeName} />;
  }
}

export default Parent;
