import { Component } from "react";

class Paragraph extends Component {
  render() {
    return <div className="text-dusk my-4">{this.props.children}</div>;
  }
}

export default Paragraph;
