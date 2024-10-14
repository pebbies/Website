import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="flex flex-row text-dusk font-semibold text-lg my-4">{this.props.children}</div>
    );
  }
}

export default Header;
