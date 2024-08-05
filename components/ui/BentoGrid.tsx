import { cn } from "@/lib/utils";
import { GlobeDemo } from "./GridGlobe";
import { Meteors } from "@/components/ui/Meteors";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-5 md:grid-rows-4 md:gap-8",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  return (
    <div
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between space-y-4 overflow-hidden rounded-3xl border border-white/[0.1] shadow-input transition duration-200 hover:shadow-xl dark:shadow-none",
        className,
      )}
      style={{
        background: "rgb(0,0,0)",
        backgroundColor:
          "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 27%, rgba(0,75,67,1) 59%, rgba(0,193,184,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="absolute h-full w-full">
          <img
            src={img}
            alt={img}
            className={cn(imgClassName, "object-cover, object-center")}
          />
        </div>
        <div
          className={`absolute -bottom-5 right-0 ${id === 5 && "w-full opacity-80"}`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="h-full w-full object-cover object-center"
            />
          )}
        </div>

        {id === 1 && (
          <a
            href="https://www.github.com/t0raT"
            target="_blank"
            className="absolute left-0 top-0 z-50 inline-block h-full w-full cursor-pointer"
          ></a>
        )}

        {id === 6 && (
          <Meteors>
            <div className="absolute z-50 flex items-center justify-center font-bold text-white" />
          </Meteors>
        )}

        <div
          className={cn(
            titleClassName,
            "relative flex min-h-40 flex-col p-5 px-5 transition duration-200 group-hover/bento:translate-x-2 md:h-full lg:p-10",
          )}
        >
          <span className="z-10 font-sans text-sm font-extralight text-[#c1c2d3] md:text-xs lg:text-base">
            {description}
          </span>
          <span className="z-10 max-w-96 font-sans text-lg font-bold lg:text-2xl">
            {title}
          </span>

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="absolute -right-3 flex w-fit gap-5 lg:gap-4">
              <div className="flex flex-col gap-3 lg:gap-5">
                <span className="rounded-lg bg-[#111] px-3 py-4 text-center" />
                {["React.js", "Next.js", "TypeScript"].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-[#111] px-3 py-2 text-center text-xs opacity-50 lg:py-4 lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-3 lg:gap-5">
                {["Bash", "C", "Tailwind CSS"].map((item) => (
                  <span
                    key={item}
                    className="rounded-lg bg-[#111] px-3 py-2 text-center text-xs opacity-50 lg:py-4 lg:opacity-100"
                  >
                    {item}
                  </span>
                ))}
                <span className="rounded-lg bg-[#111] px-3 py-4 text-center" />
              </div>
            </div>
          )}

          {id === 4 && (
            <a
              href="https://www.linkedin.com/in/daian-liu-a69990193/"
              target="_blank"
              className="absolute left-0 top-0 z-50 inline-block h-full w-full cursor-pointer"
            ></a>
          )}
        </div>
      </div>
    </div>
  );
};
