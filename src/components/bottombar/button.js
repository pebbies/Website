import { Component } from "react";

class Button extends Component {
  render() {
    const { onClick } = this.props;

    return (
      <div
        className="bg-dusk text-sky-100 rounded-md px-2 mr-4 cursor-pointer"
        onClick={() => onClick && onClick()}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Button;