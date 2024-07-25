import { Spotlight } from "@/components/ui/Spotlight";

export default function Hero() {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />

        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />

        <Spotlight className="w[50vw] left-80 top-28 h-[80vh]" fill="blue" />
      </div>

      <div className="dark:bg-grid-white/[0.3] bg-grid-black/[0.3] relative flex h-screen w-full items-center justify-center bg-white dark:bg-black-100">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
      </div>
    </div>
  );
}
