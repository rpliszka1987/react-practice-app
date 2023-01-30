import React from "react";

class Child extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hey my name is Test</h1>
        <select>
          <option value="Robert">Robert</option>
          <option value="Heidi">Heidi</option>
          <option value="Jorge">Jorge</option>
        </select>
      </div>
    );
  }
}

export default Child;
