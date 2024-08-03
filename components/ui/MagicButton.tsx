import React from "react";

function MagicButton({
  content,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  content: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) {
  return (
    <button className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:mt-10 md:w-60">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#01c8ff_0%,#00b7ff_50%,#0094ff_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center gap-1 rounded-lg bg-black px-7 py-1 text-sm font-medium text-white backdrop-blur-3xl md:gap-2 ${otherClasses}`}
      >
        {position === "left" && icon}
        {content}
        {position === "right" && icon}
      </span>
    </button>
  );
}

export default MagicButton;
