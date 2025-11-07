import { BlurIn } from "./effects/BlurIn";
import Carousel from "./Carousel";
import { EmblaOptionsType } from "embla-carousel";

export default function PersonalTraining() {
  const images = [
    {
      imgPath: "/hero.jpg",
    },
    {
      imgPath: "/hero_1.jpg",
    },
    {
      imgPath: "/hero_2.jpg",
    },
    {
      imgPath: "/hero.jpg",
    },
    {
      imgPath: "/hero_1.jpg",
    },
    {
      imgPath: "/hero_2.jpg",
    },
  ];

  const OPTIONS: EmblaOptionsType = { dragFree: true };
  const SLIDE_COUNT = images.length;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <>
      <BlurIn>
        <div id="personal-trainer" className="h-screen relative">
          <img
            src="/personal.jpg"
            className="absolute h-screen object-cover w-full "
            alt="hero"
          />
          <div className="absolute h-screen flex items-end justify-end text-white font-medium right-0 max-w-xl mx-auto ">
            <div className="backdrop-blur-lg py-10 px-5 mb-10 mx-5 md:mx-10">
              <p className="font-black uppercase mb-1">
                <span>|</span>PERSONAL TRAINER
              </p>
              <div className="uppercase font-black text-4xl md:text-5xl leading-[30px] md:leading-10">
                <h2>Stand </h2>
                <h2>Up</h2>
              </div>
              <p className="mt-2 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, quas vel. Provident iusto unde, explicabo laborum
                tempora vero corrupti
              </p>
            </div>
          </div>
        </div>
      </BlurIn>
      <div className="max-w-4xl mx-auto py-20 px-4 space-y-5 text-sm">
        <h3 className="font-semibold text-gray-700">
          Lorem ipsum dolor sit amet.
        </h3>
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
        <div className="mt-2">
          <Carousel slides={SLIDES} options={OPTIONS} images={images} />
        </div>
      </div>
    </>
  );
}
