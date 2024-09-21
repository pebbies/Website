import { Component } from "react";
import { Link } from 'react-router-dom';
import Button from "./bottombar/button";
import { UserIcon } from "@heroicons/react/24/solid";
import { BookOpenIcon } from "@heroicons/react/24/solid";
import { ComputerDesktopIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";

class BottomBar extends Component {
  render() {
    return (
      <div className="mt-12 flex flex-row">
        {/* <Button>
          <UserIcon className="size-4 mr-2" /> About
        </Button> */}

        <Link to="/blog">
          <Button>
            <BookOpenIcon className="size-4 mr-2" />
            Blog
          </Button>
        </Link>

        <Button
          onClick={() => window.open("https://github.com/pebbies", "_blank")}
        >
          <ComputerDesktopIcon className="size-4 mr-2" />
          Github
        </Button>

        <Button
          onClick={() =>
            window.open("https://www.linkedin.com/in/stone-wang-0/", "_blank")
          }
        >
          <ChatBubbleLeftRightIcon className="size-4 mr-2" />
          Linked In
        </Button>
      </div>
    );
  }
}

export default BottomBar;
