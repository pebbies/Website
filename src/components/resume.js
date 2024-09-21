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
          Undergraduate Degree from
          <div className="font-semibold ml-2">Northwestern University</div>
        </div>

        <div className="mt-4 flex flex-row items-center">
          Novice Videographer on
          <Tiktok />
        </div>
      </div>
    );
  }
}

export default Resume;
