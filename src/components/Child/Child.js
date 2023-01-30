import React from "react";

// Child component
class Child extends React.Component {
  // Creating and setting state
  constructor(props) {
    super(props);
    // Binding the handleChange()
    this.handleChange = this.handleChange.bind(this);
  }

  //   Changes the name value
  handleChange(e) {
    const name = e.target.value;
    this.props.onChange(name);
  }

  render() {
    return (
      <div>
        {/* Gets the name props */}
        <h1>Hey my name is {this.props.name}!</h1>
        {/* Drop down menu */}
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
