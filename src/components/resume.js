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
          Novice Videographer on"Easy watches" often get dismissed as low-effort entertainment, something to zone out to without expecting much in return. Don't expect to watch these shows and have a changed outlook on life. But the next time you find yourself reaching for the familiar, the kind of familiar you turn to when you're feeling vulnerable, take a moment to consider why. If these are the stories that speak to you when you're vulnerable, when you’re truly yourself, maybe they have something important to say about who you are.
          <Tiktok />
        </div>
      </div>
    );
  }
}

export default Resume;
