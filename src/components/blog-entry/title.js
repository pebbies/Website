import { Component } from "react";

class Title extends Component {
  render() {
    return (
      <div className="text-dusk text-lg font-semibold mb-8">
        {this.props.children}
      </div>
    );
  }
}

export default Title;
