import { Component } from "react";
import List from "../components/blog/list";
import { Link } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
      <div className="p-6">
        <Link to="/">Back</Link>

        <div className="text-dusk font-semibold text-lg mt-2">My Thoughts</div>

        <List />
      </div>
    );
  }
}

export default Blog;
