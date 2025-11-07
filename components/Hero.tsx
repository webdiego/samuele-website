import Image from "next/image";
import { Button } from "./ui/button";
import { Medal, Sprout, Activity, Blocks } from "lucide-react";
const highlights = [
  {
    icon: <Activity />,
    text: "Science-based",
    subText: "Lorem ipsum dolor sit",
  },
  {
    icon: <Sprout className="text-xl" />,
    text: "Grown",
    subText: "Lorem ipsum dolor sit",
  },
  {
    icon: <Medal />,
    text: "Result",
    subText: "Lorem ipsum dolor sit",
  },
  {
    icon: <Blocks />,
    text: "Build your shape",
    subText: "Lorem ipsum dolor sit",
  },
];

export default function Hero() {
  return (
    <div className="relative h-[calc(100vh-48px)]">
      <Image
        src="/hero.jpg"
        className="absolute brightness-30"
        priority
        fill={true}
        objectFit="cover"
        alt="hero"
      />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex flex-col items-center justify-center text-white max-w-lg text-center mx-auto pb-20">
        <h1 className="text-5xl md:text-6xl font-black uppercase">
          Build the strength
        </h1>
        <p className="text-sm md:text-base mt-1 max-w-sm">
          Science-based training built around your goals and your next project.
        </p>
        <Button size={"sm"} variant="dark" className=" mt-5 cursor-pointer">
          <p className="text-black uppercase font-bold text-xs ">Start today</p>
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-black text-white py-5 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-5 md:grid-cols-4 items-center  w-full">
          {highlights.map((h, i) => {
            return (
              <div key={i} className="flex items-center justify-center">
                <div className="mr-4 ">{h.icon}</div>
                <div className="flex flex-col">
                  <p className="uppercase text-xs md:text-sm font-bold">
                    {h.text}
                  </p>
                  <p className="text-xs">{h.subText}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
