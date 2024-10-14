import { Component } from "react";
import Paragraph from "../blog-entry/paragraph";
import Header from "../blog-entry/header";
import Title from "../blog-entry/title";
import Entry from "../blog-entry/entry";
import vergence from "../../assets/vergence-accomodation.png";
import foveated from "../../assets/foveated rendering.png";
import distortions from "../../assets/optical distortions.png";
import aberrationdemo from "../../assets/aberration demo.png";
import chromatic from "../../assets/chromatic aberration.png";
import monochromatic from "../../assets/Monochromatic Aberration.png";
import lens from "../../assets/lens types.png";

class VisualRealism extends Component {
  render() {
    return (
      <Entry>
        <Title>October 14, 2024 - A Quest For Visual Realism</Title>

        <Header>Introduction</Header>

        <Paragraph>
          I've been reading a lot about visual perception, the physiology of the
          human eye, and advancements to display technology. In doing so, I've
          learned about the pursuit to fully replicate our sense of vision in
          modern virtual reality (vr) headsets, and I share some of my thoughts
          below.
        </Paragraph>

        <Paragraph>
          One goal held by modern scientists in the field is to pass the visual
          Turing test. The original Turing test was designed by Alan Turing in
          1950 to evaluate whether a computer could pose as human. The visual
          Turing test is as its name implies - a test to see whether an image
          displayed in virtual reality can be distinguished from the real world.
          There are a few known limitations that must be solved in order to
          achieve visual realism - among those are vergence-accommodation
          conflict, display resolution, field of view (fov), various optical
          distortions, and pupil swim. In the following sections, I will explain
          a bit about what these limitations are, and how Display Systems
          Research (DSR), Reality Labs, and Meta are tackling each.
        </Paragraph>

        <Header>
          Vergence, Accommodation, and Mimicking How We Focus On Images
        </Header>

        <Paragraph>
          In understanding vergence-accommodation mismatch, you must first
          understand two principles about the human eye. The first is muscles in
          the eye will expand and contract to adjust the optical power with
          which we see, such that close objects can be brought into focus. The
          second is the rotation of the eye to "converge" our vision (left and
          right eyes) on the same point. For this principle, it is helpful to
          think about looking at your finger as you bring it closer to your eyes
          - your pupils will rotate inward so that both eyes can focus on the
          same object. Generally, these two principles are coupled in real life,
          but in modern virtual reality headsets, the display remains fixed
          regardless of how close or far the object we are looking at is. This
          leads to fatigue, blurry vision, discomfort, and a loss of immersion.
        </Paragraph>

        <div className="flex flex-col justify-center items-center mt-8">
          <img src={vergence} alt="Logo" className="h-96" />

          <div className="mt-2 italic">
            Notice in the above example, our pupils have rotated inwards to
            focus on the close object.
          </div>
        </div>

        <Paragraph>
          There are several proposed solutions to achieve greater visual
          realism, and they are:
        </Paragraph>

        <Paragraph>
          1. Varifocal Displays - Technology that dynamically changes the focal
          distance of the display based on where you are looking. This is the
          preferred approach used by Meta in their Half-Dome project and
          subsequent prototype headsets.
        </Paragraph>

        <Paragraph>
          2. Light Field Displays - Displays that render multiple depth planes
          simultaneously by mimicking how light travels in real life. My
          understanding is displays built using this technology already account
          for natural eye adjustments such as vergence and accommodation using
          natural depth cues.
        </Paragraph>

        <Paragraph>
          3. Eye-Tracking and Adaptive Optics - Headsets today generally follow
          the user's head position, but do not follow the user's eyes. This is
          the problem of "pupil swim". Making adjustments to images based on
          gaze would allow us to implement things like foveated rendering
          (explained in the paragraph on resolution and fov) and dynamic
          adjustments to focal distance.
        </Paragraph>

        <Paragraph>
          All current consumer-grade headsets, to my knowledge, use fixed
          resolution displays. On the contrary, you can see some early demos of
          varifocal display technology on Youtube{" "}
          <a
            className="underline text-blue-700 font-semibold"
            href="https://www.youtube.com/watch?v=D9HT_0WfHzE"
          >
            here
          </a>{" "}
          and{" "}
          <a
            className="underline text-blue-700 font-semibold"
            href="https://www.youtube.com/watch?v=0LuQbyBqbP8"
          >
            here
          </a>
          .
        </Paragraph>

        <Header>
          Resolution, Field of View, and Limitations in Screen Technology
        </Header>

        <Paragraph>
          It's no secret that today's vr headsets fall short of real world
          resolution requirements, but how clear does a headset have to be in
          order to mimic reality? Additionally, what are the field of view
          requirements? The lower end of retinal resolution is generally
          accepted to be 60 pixels per degree (ppd), which allows users to
          achieve parity with 20/20 vision. My take? 60 ppd is just the
          beginning, and later rounds of innovation will see this goal increase
          to 120 ppd.{" "}
          <a
            className="underline font-semibold text-blue-700"
            href="https://ieeexplore.ieee.org/document/6407850"
          >
            Researchers in Tokyo showed that realism can generally increase
            steadily up to 120 ppd
          </a>
          . Because of the high concentration of cone photoreceptors
          (responsible for color and detail) in the central part of our vision,
          only the central part of the display needs to achieve this level of
          detail. Ever notice that objects in your peripheral vision lack color
          and detail? This is due to a lower concentration of cone
          photoreceptors and a higher concentration of rod photoreceptors, which
          are mostly responsible for low-light vision.
        </Paragraph>

        <div className="flex flex-col justify-center items-center mt-8">
          <img src={foveated} alt="Logo" className="h-96" />

          <div className="mt-2 italic">
            Resolution requirements need not be uniform throughout the entire
            display. Foveated rendering uses eye-tracking technology to render
            high-resolution detail only in the center area of a user's view
            while reducing the detail in the peripheral. This greatly saves
            compute power and costs, while mimicking how we see the world with
            our eyes.
          </div>
        </div>

        <Paragraph>
          <a
            className="underline font-semibold text-blue-700"
            href="https://tech.facebook.com/reality-labs/2022/6/passing-the-visual-turing-test-the-inside-story-of-our-quest-for-visual-realism-in-vr/#butterscotch"
          >
            The butterscotch project
          </a>{" "}
          implemented by Meta Reality Labs and DSR used 3K LCD panels and a
          reduced field of view to achieve 55 ppd, two and a half times that of
          the Quest 2. The result was an early prototype that could let users
          experience near-retinal resolution at the cost of weight, price, and
          accessibility. The Varjo VR-3 can reach up to 60 ppd but has a
          whopping $2,500 price point, requires a high-end pc tether to operate,
          weighs slightly more than the quest (which is already heavier than
          ideal in my opinion), and has extremely limited content.{" "}
        </Paragraph>

        <Paragraph>
          Field of view and resolution have a push-pull relationship. Because
          the size of the display is fixed, in order to fit more content in a
          higher fov, you will need to decrease the resolution, but once you
          decrease the field of view past a certain point, the image no longer
          looks believable. We are able to see 200 degrees horizontally with our
          eyes, while the Quest 2 only has 20 ppd resolution and 120 degrees of
          horizontal fov. You can see a list of devices and their specifications{" "}
          <a
            className="underline font-semibold text-blue-700"
            href="https://vr-compare.com"
          >
            here
          </a>
          .
        </Paragraph>

        <Header>Optical Distortions</Header>

        <Paragraph>
          Lenses today suffer from aberrations, which are imperfections that
          degrade the resulting image quality. Examples of aberrations include
          optical distortions, chromatic aberrations, and spherical aberrations,
          among others. Optical distortions occur due to the stretching and
          compression of an image at the periphery of a lens. Depending on the
          shape of a lens, the image could be affected in one of two ways -
          barrel distortion and pincushion distortion. A good example of barrel
          distortion is the stretching effect that occurs on the outer edges of
          a fish-eyed lens. You may have noticed this effect when using the 0.5x
          zoom on your phone camera.
        </Paragraph>

        <div className="flex flex-col justify-center items-center mt-8">
          <img src={distortions} alt="Logo" className="h-32" />

          <div className="mt-2 italic ml-4">
            Common optical distortions include the barrel distortion (middle)
            and pincushion distortion (right).
          </div>
        </div>

        <Paragraph>
          Chromatic aberrations occur due to the nature of light on the visible
          spectrum. Each color has a different wavelength, and depending on a
          material's refractive index, individual colors may cross a material's
          optical axis at different points. This leads to a slightly different
          path of travel between each of the individual wavelengths. A simple
          diagram demonstrating chromatic aberration is depicted below.
        </Paragraph>

        <div className="flex flex-col justify-center items-center mt-8">
          <img src={aberrationdemo} alt="Logo" className="h-80" />

          <div className="mt-2 italic">
            Longer wavelengths travel more quickly through a lens, which leads
            to different focal points for each individual wavelength or color.
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-8">
          <img src={chromatic} alt="Logo" className="h-96" />

          <div className="mt-2 italic">
            The upper image is properly focused, while the lower image suffers
            from chromatic aberration, resulting in blurriness.
          </div>
        </div>

        <Paragraph>
          Spherical distortions are caused by the shape of a lens. Rays of light
          further away from the center of a lens tend to be refracted (bent)
          more than rays near the center, which leads to an effect called
          monochromatic aberration. Actually, the effect on the image is quite
          similar to that of a chromatic aberration, but since the phenomenon is
          independent of the light's wavelength, we call it monochromatic.
        </Paragraph>

        <div className="flex flex-col justify-center items-center mt-8">
          <img src={monochromatic} alt="Logo" className="h-96" />

          <div className="mt-2 italic">
            Notice that rays further away from the center of the lens are
            refracted more than those in the center, which leads to a mismatch
            of focal points.
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-8">
          <img src={lens} alt="Logo" className="h-96" />

          <div className="mt-2 italic">
            No lens is completely free from optical distortions, and there are a
            near-infinite number of ways to combine convex, concave lenses in a
            display. Examples of lenses developed and used by Meta in their
            headsets include left) the traditional refractive lens, middle) the
            pancake lens, an early prototype developed in 2020, and right) the
            holocake lens, an architectural prototype that achieves compact form
            and utilizes the technology of the pancake lens.
          </div>
        </div>

        <Paragraph>
          The research concepts on various lens types culminates in what Quest
          calls "Mirror Lake", a concept technology that uses the base of the
          holocake lens and a ski-goggle form factor. You can see more of this
          prototype{" "}
          <a
            className="underline text-blue-700 font-semibold"
            href="https://www.youtube.com/watch?v=CAwY18M598s"
          >
            here
          </a>
          . Mirror lake supposedly combines all of the technologies mentioned in
          this blog post - varifocal displays, multiview eye tracking,
          distortion correction, and modern lens architecture. Hopefully, some
          or all of the aforementioned technologies make it into the Quest 3!
        </Paragraph>

        <Header>Final Thoughts</Header>

        <Paragraph>
          To keep things short, virtual reality headsets are still early days
          and in the process of going from "zero" to "one". I see the "one" in
          virtual reality as achieving some level of believable realism in a
          compact form factor that is available at a reasonable price point to
          consumers. Vision and audio are easily the closest to achieving this
          goal, while haptic follows a bit further behind. If there is a way to
          recreate smell and taste, we aren't close to finding it (thanks Google
          Nose).
        </Paragraph>

        <div className="my-4">--</div>

        <div className="mt-4">
          1. LaValle, S. M. (2023). Virtual Reality. Cambridge University Press.
          Retrieved from https://lavalle.pl/vr/
        </div>

        <div className="mt-4">
          2. Facebook Reality Labs. (2022, June). Passing the visual Turing
          test: The inside story of our quest for visual realism in VR. Meta.
          Retrieved from
          https://tech.facebook.com/reality-labs/2022/6/passing-the-visual-turing-test-the-inside-story-of-our-quest-for-visual-realism-in-vr/
        </div>
      </Entry>
    );
  }
}

export default VisualRealism;
