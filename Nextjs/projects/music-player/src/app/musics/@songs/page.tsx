import SongCard from "@/components/SongCard";
import { songs } from "@/constant/songs";
import React from "react";

const Songs = () => {
  return (
    <div className="min-h-screen bg-[#1B211F] p-6 sm:p-8">
      <h2 className="mb-8 text-2xl font-semibold tracking-tight text-[#E4E8E2]">
        Songs Collection
      </h2>
      <ul className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {songs.map((s) => (
          <li key={s.id}>
            <SongCard songData={s} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Songs;
