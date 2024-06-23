import { Component } from "react";
import Tiktok from "./../components/tiktok";
import Nomura from "./../components/nomura";

class Resume extends Component {
  render() {
    return (
      <div className="mt-12">
        <div className="mt-4 flex flex-row items-center">
          Former Investment Banker at
          <Nomura />
        </div>

        <div className="mt-4 flex flex-row items-center">
          Undergraduate Degree from
          <div className="ml-2 font-semibold text-purple-500">
            Northwestern University
          </div>
        </div>

        <div className="mt-4 flex flex-row items-center">
          Novice Videographer at
          <Tiktok />
        </div>
      </div>
    );
  }
}

export default Resume;
