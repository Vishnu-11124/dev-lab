import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
import React from "react";

const Player = () => {
  return (
    <div className="flex shrink-0 items-center gap-4 border-t border-[#38433E] bg-[#242C29] px-4 py-3 sm:gap-6 sm:px-6">
      <div className="h-12 w-12 shrink-0 rounded-lg border border-[#38433E] bg-gradient-to-br from-[#33403A] via-[#2A332F] to-[#1B211F]"></div>

      <div className="flex shrink-0 items-center gap-3 sm:gap-4">
        <SkipBack className="h-5 w-5 cursor-pointer text-[#8E9A93] transition hover:text-[#E4E8E2]" />
        <Play className="h-10 w-10 cursor-pointer rounded-full bg-[#A3B8A8] fill-current p-2.5 text-[#1B211F] transition hover:bg-[#B4C7B9]" />
        <Pause className="h-10 w-10 cursor-pointer rounded-full border border-[#38433E] fill-current p-2.5 text-[#E4E8E2] transition hover:border-[#A3B8A8]/50 hover:text-[#A3B8A8]" />
        <SkipForward className="h-5 w-5 cursor-pointer text-[#8E9A93] transition hover:text-[#E4E8E2]" />
      </div>

      <div className="flex min-w-0 flex-1 items-center gap-3 text-xs tabular-nums text-[#8E9A93]">
        <span>2:21</span>
        <div className="relative h-1.5 flex-1 rounded-full bg-[#38433E]">
          <div className="relative h-full w-[70%] rounded-full bg-[#A3B8A8] after:absolute after:right-0 after:top-1/2 after:h-3 after:w-3 after:-translate-y-1/2 after:rounded-full after:bg-[#E4E8E2] after:shadow-md after:content-['']" />
          <input
            type="range"
            name=""
            id=""
            className="absolute -inset-y-2 left-0 h-5 w-full cursor-pointer opacity-0"
          />
        </div>
        <span>3:21</span>
      </div>
    </div>
  );
};

export default Player;
