import { Song } from "@/constant/songs";
import Link from "next/link";
import React from "react";

const SongCard = ({ songData }: { songData: Song }) => {
  return (
    <Link
      href={`/musics/${songData.id}`}
      className="group block rounded-2xl border border-[#38433E] bg-[#242C29] p-3 transition duration-300 hover:-translate-y-1 hover:border-[#A3B8A8]/40 hover:bg-[#2A332F] hover:shadow-xl hover:shadow-black/30 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#A3B8A8]/25"
    >
      <div className="relative aspect-square overflow-hidden rounded-xl bg-[#1B211F]">
        <img
          src={songData.image}
          alt="song image"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute bottom-2 right-2 rounded-md bg-[#1B211F]/80 px-2 py-0.5 text-xs font-medium text-[#E4E8E2] backdrop-blur-sm">
          {songData.time}
        </span>
      </div>

      <div className="mt-3 px-1">
        <p className="truncate text-sm font-semibold text-[#E4E8E2] transition group-hover:text-[#A3B8A8]">
          {songData.songName}
        </p>
        <p className="mt-0.5 truncate text-xs text-[#8E9A93]">
          {songData.artist}
        </p>
      </div>
    </Link>
  );
};

export default SongCard;
