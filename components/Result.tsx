import React from "react";
import { Medal, Trophy, Award, Crown } from "lucide-react";
const results = [
  {
    icon: <Medal size={35} />,
    title: "1 Climbing cup",
    description: "Lorem ipsum dolor sit",
  },
  {
    icon: <Trophy size={35} />,
    title: "Lorem",
    description: "Lorem ipsum dolor sit",
  },
  {
    icon: <Award size={35} />,
    title: "Lorem",
    description: "Lorem ipsum dolor sit",
  },
  {
    icon: <Crown size={35} />,
    title: "Lorem",
    description: "Lorem ipsum dolor sit",
  },
];
export default function Result() {
  return (
    <>
      <div id="results" className="relative h-screen md:h-auto">
        <img
          src="/hero_2.jpg"
          className="h-screen object-[65%_75%] md:object-center md:h-[50vh] object-cover w-full "
          alt="hero"
        />
        <div className="absolute bottom-10 md:top-20 left-0 flex items-start justify-start text-black font-medium max-w-lg ">
          <div className="backdrop-blur-lg py-10 px-5 mb-10 mx-4">
            <p className="font-black uppercase mb-1">
              <span>|</span>RESULTS
            </p>
            <div className="uppercase font-black text-4xl md:text-5xl leading-[30px] md:leading-10">
              <h2>Facts</h2>
              <h2>Only</h2>
            </div>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              quas vel. Provident iusto unde, explicabo laborum tempora vero
              corrupti
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto pt-20 pb-10 px-4 space-y-5 text-sm">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nobis
          fugiat tempore ullam ipsam voluptate omnis, repudiandae, ea
          voluptatibus fuga facere rem ex excepturi veniam dolore inventore
          minima velit molestias.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae nobis
          fugiat tempore ullam ipsam voluptate omnis, repudiandae, ea
          voluptatibus fuga facere rem ex excepturi veniam dolore inventore
          minima velit molestias. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ullam, inventore!
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 items-start mt-20 space-y-10 space-x-4 divide-x-0 md:divide-x-2 divide-dashed">
          {results.map((r, index) => (
            <div key={index} className="flex flex-col items-center py-5 ">
              <div>{r.icon}</div>
              <h3 className="font-bold uppercase mt-2">{r.title}</h3>
              <p className="text-sm">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
