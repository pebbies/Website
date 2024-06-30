import { Component } from "react";
import dripos from "./../assets/dripos.png";

class Dripos extends Component {
  render() {
    return (
      <img
        className="h-6 ml-3 cursor-pointer rounded-md"
        src={dripos}
        alt={"Logo"}
        onClick={() =>
          window.open(
            "https://techcrunch.com/2024/04/24/coffee-shop-software-dripos-square-toast/?guccounter=1",
            "_blank"
          )
        }
      />
    );
  }
}

export default Dripos;
