import { BlurIn } from "./effects/BlurIn";
export default function PersonalTraining() {
  return (
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              quas vel. Provident iusto unde, explicabo laborum tempora vero
              corrupti
            </p>
          </div>
        </div>
      </div>
    </BlurIn>
  );
}
