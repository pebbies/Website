import { Component } from "react";
import Tiktok from "./../components/tiktok";

class Resume extends Component {
  render() {
    return (
      <div className="mt-8">
        <div className="mt-4 flex flex-row items-center">
          Former Investment Banker at
          <div className="font-semibold ml-2">Nomura</div>
        </div>

        <div className="mt-4 flex flex-row items-center">
          BA in Economics, Minor in Computer Science from
          <div className="font-semibold ml-2">Northwestern University</div>
        </div>

        <div className="mt-4 flex flex-row items-center">
          Certificate in AR/VR: Technologies and Applications from
          <div className="font-semibold ml-2">University of Michigan (Coursera)</div>
        </div>

        {/* <div className="mt-4 flex flex-row items-center">
          Certificate in XR Development from
          <div className="font-semibold ml-2">University of Michigan (Coursera)</div>
        </div> */}

        <div className="mt-4 flex flex-row items-center">
          Novice Videographer on
          <Tiktok />
        </div>
      </div>
    );
  }
}

export default Resume;
