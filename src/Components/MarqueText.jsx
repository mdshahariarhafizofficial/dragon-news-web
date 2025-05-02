import React from "react";
import Marquee from "react-fast-marquee";

const MarqueText = () => {
  return (
    <div>
      <div className="flex items-center gap-5 bg-base-200 p-4">
        <p className="bg-secondary text-white px-5 py-2 text-xl">Latest</p>

        <Marquee className="flex gap-5">
          <p className="text-black font-semibold">
            Match Highlights: Germany vs Spain — as it happened ! Match
            Highlights: Germany vs Spain as...
          </p>
          <p className="text-black font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi odit tempora voluptatibus dignissimos sapiente non unde sit voluptate officiis reprehenderit.
          </p>
        </Marquee>
      </div>
    </div>
  );
};

export default MarqueText;
