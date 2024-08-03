import { Spotlight } from "@/components/ui/Spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

export default function Hero() {
  /*
   * For the longest time I had no clue what a HERO section is.
   *
   * "hero" sections universally describes the top section of your page.
   * Like a header maybe?
   *  */
  return (
    <div className="pb-20 pt-36">
      {/* Spotlight divs */}
      {/*<div>*/}
      {/*  /!* This is particularly cool, taking spotlights and placing them outside the viewable screen*/}
      {/*   * to position them and forming glares and stuff...*/}
      {/*   * It's nothing groundbreaking, but just little things you can do.*/}
      {/*   *!/*/}
      {/*  <Spotlight*/}
      {/*    className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"*/}
      {/*    fill="white"*/}
      {/*  />*/}

      {/*  <Spotlight*/}
      {/*    className="left-full top-10 h-[80vh] w-[50vw]"*/}
      {/*    fill="purple"*/}
      {/*  />*/}

      {/*  <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />*/}
      {/*</div>*/}

      {/* Background Div */}
      {/*<div className="dark:bg-grid-2077-dpblue/[0.3] absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.3] dark:bg-black">*/}
      {/*  /!* Radial gradient for the container to give a faded look *!/*/}
      {/*  <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />*/}
      {/*</div>*/}

      {/* Content div */}
      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-center text-xs uppercase tracking-widest text-blue-100">
            Dynamic Web Magic with Next.js
          </h2>

          {/* Words beyond index 3 are purple, check the source code line 40. */}
          <TextGenerateEffect
            className="text-center text-[40px] md:text-5xl lg:text-8xl"
            words="你好，こんにちは！"
          />
          <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
            Yo! I&apos;m Tiger, a Previous.Js developer based in my
            parent&apos;s basement.
          </p>

          <a href="#about">
            <MagicButton
              content="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
