import React from "react";

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        <h1>Hey my name is {this.props.name}!</h1>
        <select onChange={this.handleChange}>
          <option value="Robert">Robert</option>
          <option value="Heidi">Heidi</option>
          <option value="Jorge">Jorge</option>
        </select>
      </div>
    );
  }
}

export default Child;
