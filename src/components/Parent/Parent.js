import React from "react";
import Child from "../Child/Child";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Robert" };
    this.changeName = this.changeName.bind(this);
  }

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
