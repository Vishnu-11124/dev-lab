"use client";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1 className="text-orange-600">Welcome Dude</h1>
      <div className="flex gap-3">
        <button className="m-2 px-3 py-2 bg-violet-600 text-white text-xl font-bold rounded-2xl">
          <Link href="/developers">Developers</Link>
        </button>
        <button className="m-2 px-3 py-2 bg-violet-600 text-white text-xl font-bold rounded-2xl">
          <Link href="/projects">Projects</Link>
        </button>
        <button className="m-2 px-3 py-2 bg-violet-600 text-white text-xl font-bold rounded-2xl">
          <Link href="/client-data-fetching">Client Data</Link>
        </button>
      </div>
      <div>
        <Image
          src="https://images.pexels.com/photos/20172070/pexels-photo-20172070/free-photo-of-silhouette-of-woman.png?auto=compress&w=600"
          alt="image"
          width={300}
          height={100}
          style={{ width: "300px", height: "auto" }}
          loading="eager"
        />
      </div>
    </div>
  );
};

export default Home;
