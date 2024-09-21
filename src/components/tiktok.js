import { Component } from "react";
import tiktok from "./../assets/tiktok.png";

class Tiktok extends Component {
  render() {
    return (
      <img
        src={tiktok}
        alt="Logo"
        className="h-5 ml-2 cursor-pointer"
        onClick={() =>
          window.open(
            "https://www.tiktok.com/@sleepymonsterfilm?_t=8puNIDNB5u2&_r=1",
            "_blank"
          )
        }
      />
    );
  }
}

export default Tiktok;
