import Lottie from "lottie-react";
import walkingAnimation from "./../assets/walking-animation.json";
import { Component } from "react";

class WalkingAnimation extends Component {
  render() {
    return (
      <>
        <Lottie
          animationData={walkingAnimation}
          loop={true}
          autoplay={true}
          style={{ width: 200, height: 200 }}
        />
      </>
    );
  }
}

export default WalkingAnimation;
