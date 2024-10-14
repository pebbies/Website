import { Component } from "react";
import Button from "../bottombar/button";
import { Link } from "react-router-dom";

class List extends Component {
  render() {
    const list = [
      {
        page: "4",
        title: "October, 2024 - A Quest For Visual Realism",
      },
      {
        page: "3",
        title:
          "October, 2024 - Proprioception, Tickling, and Full-Dive Virtual Reality",
      },
      { page: "2", title: "September, 2024 - Lessons From Naval Ravikant" },
      { page: "1", title: "September, 2024 - Close Combat Mage" },
    ];

    return (
      <div className="mt-4">
        {list.map((entry) => (
          <li>
            <Link to={`/blog/${entry.page}`}>
              <Button>{entry.title}</Button>
            </Link>
          </li>
        ))}
      </div>
    );
  }
}

export default List;
