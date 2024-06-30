import { Component } from "react";
import Button from "./bottombar/button";

class BottomBar extends Component {
  render() {
    return (
      <div className="mt-24 flex flex-row">
        <Button>About</Button>

        <Button>Blog</Button>

        <Button
          onClick={() => window.open("https://github.com/pebbies", "_blank")}
        >
          Github
        </Button>

        <Button
          onClick={() =>
            window.open("https://www.linkedin.com/in/stone-wang-0/", "_blank")
          }
        >
          Linked In
        </Button>
      </div>
    );
  }
}

export default BottomBar;
