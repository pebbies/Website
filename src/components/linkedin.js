import { Component } from "react";
import Linkedin from "./../assets/linkedin.png";

class LinkedIn extends Component {
  render() {
    return (
      <img
        className="w-8 cursor-pointer"
        src={Linkedin}
        alt="Logo"
        onClick={() =>
          window.open("https://www.linkedin.com/in/stone-wang-0/", "_blank")
        }
      />
    );
  }
}

export default LinkedIn;
