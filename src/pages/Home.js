import { Component } from "react";
import LinkedIn from "./../components/linkedin";
import GitHub from "./../components/github";
import Resume from "./../components/resume";
import Dripos from "./../components/dripos";

class Home extends Component {
  render() {
    return (
      <div className="p-6">
        <div className="flex justify-between flex-row items-center text-lg font-semibold">
          <div>Stone Wang</div>

          <div className="flex flex-row">
            <LinkedIn />

            <GitHub />
          </div>
        </div>

        <div className="mt-6 flex flex-row text-xl font-bold items-center">
          <div className="text-blue-600">{`Software Engineer`}</div>

          <div className="ml-2">at</div>

          <Dripos />
        </div>

        <Resume />
      </div>
    );
  }
}

export default Home;
