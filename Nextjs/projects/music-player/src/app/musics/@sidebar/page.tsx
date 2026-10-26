import React from "react";

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-60 flex-col gap-8 overflow-y-auto border-r border-[#38433E] bg-[#242C29] p-4">
      <section>
        <h2 className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-[#8E9A93]">
          MENU
        </h2>
        <nav>
          <ul className="space-y-1 text-sm font-medium text-[#C9D0CB]">
            <li className="cursor-pointer rounded-lg bg-[#2F3A35] px-3 py-2.5 text-[#E4E8E2]">
              Discover
            </li>
            <li className="cursor-pointer rounded-lg px-3 py-2.5 transition hover:bg-[#2F3A35] hover:text-[#E4E8E2]">
              Trending
            </li>
            <li className="cursor-pointer rounded-lg px-3 py-2.5 transition hover:bg-[#2F3A35] hover:text-[#E4E8E2]">
              Recent
            </li>
          </ul>
        </nav>
      </section>

      <section>
        <h2 className="mb-3 px-3 text-xs font-semibold uppercase tracking-widest text-[#8E9A93]">
          FAVORITE
        </h2>
        <ul className="space-y-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <li
              key={i}
              className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 transition hover:bg-[#2F3A35]"
            >
              <img
                className="h-10 w-10 rounded-lg object-cover ring-1 ring-[#38433E]"
                src="https://images.pexels.com/photos/27692363/pexels-photo-27692363.jpeg"
                alt="image"
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-[#E4E8E2]">
                  Random
                </p>
                <p className="truncate text-xs text-[#8E9A93]">Person</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
