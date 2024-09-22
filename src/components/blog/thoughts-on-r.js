import { Component } from "react";
import Paragraph from "../blog-entry/paragraph";
import Title from "../blog-entry/title";
import Entry from "../blog-entry/entry";
import closecombat from "../../assets/closecombat.jpeg";

class ThoughtsOnR extends Component {
  render() {
    return (
      <Entry>
        <Title>September 22, 2024 - Lessons From Naval Ravikant</Title>

        <Paragraph>
          Here I provide commentary on "11 Rules for Living" by Naval Ravikant.
          I do this partly because this is a valuable piece of media that has
          inspired me, and when inspired I must write. I do this also to
          solidify the concepts for myself.
        </Paragraph>

        <Paragraph>1. Be Ready To Start Over</Paragraph>

        <Paragraph>
          Here R talks about a path to the peak of a mountain. You realize that
          you're 2/3 of the way to the peak, but this particular path is a dead
          end. In these situations, if we want to get to the peak, we've no
          choice to better. Actually, the sooner you realize that, the better. R
          recounts many famous people who have had to start over - artists, tech
          savants (Steve Jobs in particular, R seems to enjoy glazing),
          entrepreneurs. You have to be willing to be nothing to be everything.
          That nothing and everything are tied so closely together, I find that
          ironic.
        </Paragraph>

        <Paragraph>2. When Inspired, Act Immediately</Paragraph>

        <Paragraph>
          R talks about his unpublished tweet storms. He talks about the idea
          that inspiration is perishable - the longer we wait when we are
          inspired, the more that inspiration fades. Give it enough time, and
          the inspiration is near impossible to act on. I find I run into this a
          lot. I think of an idea on a plane ride, on a walk, and I quickly jot
          it down. By the time I return to my work station and am ready to act
          on it, the idea seems so far away, so muddled. Part of counteracting
          this axiom is being prepared to action on inspiration.
        </Paragraph>

        <Paragraph>3. Choose To Be Yourself</Paragraph>

        <Paragraph>
          "You won't be as good at being me as I am, and I won't be as good at
          being you as you are". I extrapolate this to two learnings. 1. We must
          not try to adopt the paradigms, regimes and rules of others. 2. We'll
          always be able to find an edge when we do something that is uniquely
          our own self.
        </Paragraph>

        <Paragraph>4. Do What Feels Like Play, But Looks Like Work</Paragraph>

        <Paragraph>
          If I'm playing 16 hours a day, you'll never be able to beat me. The
          trick is finding something that is play to me, but that is work to
          other people, meaning it can be monetized.
        </Paragraph>

        <Paragraph>5. Choose Your Desires Carefully</Paragraph>

        <Paragraph>
          In "I Don't Want To Grow Up", a book I read earlier this year that
          touched on this topic, I find a truth that has been repeated to me
          across the course of my life. When you want something so much, not
          only do things become a lot simpler, but the universe tends to align
          itself to give you that thing. The trick is, you can't focus on a
          thousand things at once. We get distracted. We get confused. We become
          lost.
        </Paragraph>

        <Paragraph>6. Fall In Love With Reading</Paragraph>

        <Paragraph>7. Master The Basics</Paragraph>

        <Paragraph>
          I have this bad habit of skimming when content becomes too "in the
          weeds". I used to think this was a bad habit of mine, but now I'm not
          so sure.
        </Paragraph>

        <Paragraph>8. Be An Owner</Paragraph>

        <Paragraph>
          "You are not going to get rich by renting out your time". You can't
          build wealth by working at a job where your inputs, such as time and
          labor, correlate direct with your output, like a salary. George Lucas
          kept royalties on Star Wars, and through his IP, made money long into
          his later years from the franchise. MJ did the same with shoes.
          Footballers like Messi and David Beckham same deal.
        </Paragraph>

        <Paragraph>9. Use The New Leverage</Paragraph>

        <Paragraph>
          Don't look to old leverage to create value. Just as society has
          technological revolutions, bubbles and golden ages, much of the wealth
          created by old forms of leverage (think dotcom wealth, in the current
          AI revolution, or electric and machinery wealth during the dotcom age)
          has dried up. There is not only no longer competitive mote to use
          those points of leverage, there is no capital moving in either.
        </Paragraph>

        <Paragraph>10. Empty Space</Paragraph>

        <Paragraph>
          "All truly great thoughts are conceived by walking" -Nietzsche. Take a
          break from problems that plague your life in order to allow new neural
          connections to form. You may discover an interesting solution. That
          also means when you take a break, you need to completely disconnect.
        </Paragraph>

        <Paragraph>11. Overcome The Need For External Validation</Paragraph>

        {/* <div className="flex justify-center items-center mt-8">
          <img src={closecombat} alt="Logo" className="h-96" />
        </div> */}
      </Entry>
    );
  }
}

export default ThoughtsOnR;
