import { Component } from "react";
import Paragraph from "../blog-entry/paragraph";
import Title from "../blog-entry/title";
import Entry from "../blog-entry/entry";
import nervegear from "../../assets/nervegear.jpg";

class Proprioception extends Component {
  render() {
    return (
      <Entry>
        <Title>
          October 6, 2024 - Proprioception, Tickling, and Full-Dive Virtual
          Reality
        </Title>

        <div className="flex-row text-dusk my-4">
          As I delve into{" "}
          <a
            className="text-blue-700 font-semibold underline"
            href="https://lavalle.pl/vr/"
            target="_blank"
          >
            Steven LaValle's book on virtual reality system
          </a>
          , one section within the chapter on hardware, sensors, displays, and
          virtual world generators particularly caught my attention: the
          discussion on proprioception. To the uninitiated, it may be difficult
          to appreciate the research being done to improve sensory feedback in
          mixed reality machines. However, in order to achieve the elusive
          full-dive virtual reality experience (don't tell me it's impossible,
          because I won't listen), we must address several questions about
          replicating the complex hierarchical processing system of the human
          mind, both in terms of input and output.
        </div>

        <Paragraph>
          One such system is the proprioception system. This system has to do
          with the "ability to sense the relative position of parts of our
          bodies and the amount of muscular effort being involved in moving
          them" (LaValle, 2023). As I type on my keyboard, I intuitively know
          where I expect my fingers to be and can feel the tactile response of
          each finger pressing down on the keycaps. The approximate awareness of
          where my fingers are located, where they are moving, and how they are
          roughly oriented in space is precisely what the proprioceptive system
          facilitates.
        </Paragraph>

        <Paragraph>
          Interestingly, my aha moment with this concept, and a commonly used
          example to illustrate this sense, came in the form of tickling. When
          you tickle yourself, you don't react or laugh because you already know
          where your hands will touch - your senses tell you this as you perform
          the motions. Conversely, if someone else tickles you, you react
          because you are unable to predict their actions. This missing
          information is crucial to the tickling sensation.
        </Paragraph>

        <Paragraph>
          As we strive for more immersive forms of virtual reality, we will
          inevitably encounter the challenge of fully replicating proprioception
          as we navigate virtual spaces. Several factors come into play here.
          With modern hand tracking technology, we actually have a very nascent
          form of proprioception because we can see our virtual hand moving in
          tandem with our real hand; however, we are unable to experience the
          full sensation due to insufficient tactile, balance, and other forms
          of feedback.
        </Paragraph>

        <Paragraph>
          Such feedback is essential for enhancing the mixed reality experience
          as we seek greater immersion and may have detrimental effects on
          real-world applications. One notable application involves improving
          patient outcomes in virtual reality physical therapy. Researchers have
          discovered that without adequate neurofeedback channels—specifically,
          visual and proprioceptive sensory channels—the formation of motor
          skills is not feasible, or significantly weakened (Zakharov, Kolsanov,
          & Khivintseva, 2021). This point underscores a significant limitation
          that explains, albeit partially, the feeling of "plasticity" when
          using modern VR devices.
        </Paragraph>

        <Paragraph>
          Posited solutions include haptic suits and built-in vestibular
          stimulation technology (to stimulate the body's sense of balance), but
          both come with significant drawbacks in price and intrusiveness. Part
          of me thinks that the necessity to replicate so many senses is what
          makes a full-body haptic suit more likely in the near-term, than the
          standalone headset approach. If Nervegear is at all possible, we are
          lightyears away from a real-life equivalent.{" "}
        </Paragraph>

        <div className="flex justify-center items-center mt-8">
          <img src={nervegear} alt="Logo" className="h-96" />
        </div>

        <div className="mt-24">
          1. LaValle, S. M. (2023). Virtual Reality. Cambridge University Press.
          Retrieved from https://lavalle.pl/vr/
        </div>

        <div className="mt-4">
          2. Zakharov, M., Kolsanov, A., & Khivintseva, E. (2021). The Role of
          Sensory Channels in Motor Skill Formation. In Human-Computer
          Interaction (pp. 39-53). IntechOpen. Retrieved from
          https://www.intechopen.com/chapters/75326
        </div>
      </Entry>
    );
  }
}

export default Proprioception;
