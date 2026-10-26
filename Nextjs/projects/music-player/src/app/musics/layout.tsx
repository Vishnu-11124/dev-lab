import React, { ReactNode } from "react";

const MusicLayout = ({
  children,
  sidebar,
  songs,
  player,
}: {
  children: ReactNode;
  sidebar: ReactNode;
  songs: ReactNode;
  player: ReactNode;
}) => {
  return (
    <div className="flex h-screen overflow-hidden bg-[#1B211F]">
      {sidebar}
      <div className="flex min-w-0 flex-1 flex-col">
        {children}
        <div className="flex min-h-0 flex-1 flex-col">
          <div className="min-h-0 flex-1 overflow-y-auto">{songs}</div>
          {player}
        </div>
      </div>
    </div>
  );
};

export default MusicLayout;
