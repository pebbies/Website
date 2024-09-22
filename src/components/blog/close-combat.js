import { Component } from "react";
import Paragraph from "../blog-entry/paragraph";
import Title from "../blog-entry/title";
import Entry from "../blog-entry/entry";
import closecombat from "../../assets/closecombat.jpeg";

class CloseCombat extends Component {
  render() {
    return (
      <Entry>
        <Title>September 21, 2024 - Close Combat Mage</Title>

        <Paragraph>
          Picking a show is a lot like deciding what to eat for dinner. Every
          now and then, you'll try something new or highly recommended, but most
          of the time, you fall back on what's familiar and comforting. For me,
          that comfort has always been anime, particularly the kind of power
          fantasy where the main character is overwhelmingly strong and faces
          little to no real challenge. These stories are often over-the-top,
          with heroes effortlessly defeating their enemies in spectacular ways.
          On a quiet Monday evening, I found myself looking for just that and
          stumbled upon a gem: 近戰法師, or Close Combat Mage.
        </Paragraph>

        <Paragraph>
          The show follows a university professor with a deep passion for
          martial arts. But, in the real world, practicing his art is difficult
          — after all, we can't exactly go around beating people up. By chance,
          the main character is introduced to Parallel Worlds, a virtual reality
          MMORPG, where he finds a way to blend his love for martial arts with
          cutting-edge technology. The story follows his journey as he discovers
          a new sense of purpose, both in the game and in his life.
        </Paragraph>

        <Paragraph>
          But what I really want to explore is what our own creature comforts —
          like the shows we always turn to — might say about us. Maybe the kinds
          of stories we seek out reflect something deeper about the path we're
          on, or the person we wish we were. Maybe they reveal a weakness we're
          deluding ourselves into thinking isn't one. Or it's a hobby we really
          want to dive into but just don't want to spend the time. Regardless,
          we want to live vicariously in a life that isn't our own. In my
          particular case, it's easy for me to slip into delusion of a world
          where challenges don't exist, where good times don't create weak men.
        </Paragraph>

        <Paragraph>
          "Easy watches" often are dismissed as low-effort entertainment,
          something to zone out to without expecting much in return. Don't
          expect to watch these shows and have a changed outlook on life. But
          the next time you find yourself reaching for the familiar, the kind of
          familiar you turn to when you're feeling vulnerable, take a moment to
          consider why. If these are the stories that speak to you when you're
          vulnerable, when you’re truly yourself, maybe they have something
          important to say about who you are.
        </Paragraph>

        <div className="flex justify-center items-center mt-8">
          <img src={closecombat} alt="Logo" className="h-96" />
        </div>
      </Entry>
    );
  }
}

export default CloseCombat;
