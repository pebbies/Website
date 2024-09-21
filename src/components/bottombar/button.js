import { Component } from "react";

class Button extends Component {
  state = { isHighlighted: false };

  mouseEnter = () => {
    this.setState({ isHighlighted: true });
  };

  mouseLeave = () => {
    this.setState({ isHighlighted: false });
  };

  render() {
    const { isHighlighted } = this.state;
    const { onClick } = this.props;

    return (
      <div
        className={`flex flex-row inline-flex items-center ${
          isHighlighted ? "text-dusk" : "text-darkSky"
        } rounded-md mr-6 cursor-pointer`}
        onClick={() => onClick && onClick()}
        onMouseEnter={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Button;
