import { Component } from "react";
import github from "./../assets/github2.jpg";

class GitHub extends Component {
  render() {
    return (
      <img
        className="w-16 cursor-pointer"
        src={github}
        alt="Logo"
        onClick={() => window.open("https://github.com/pebbies", "_blank")}
      />
    );
  }
}

export default GitHub;
