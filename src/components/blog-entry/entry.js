import { Component } from "react";
import { Link } from "react-router-dom";

class Entry extends Component {
  render() {
    return (
      <div className="p-6 pr-48">
        <Link to="/blog">Back</Link>

        <div className="mt-2">{this.props.children}</div>
      </div>
    );
  }
}

export default Entry;
