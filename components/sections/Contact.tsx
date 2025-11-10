import React from "react";
import { Mail, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div id="contact" className=" w-full bg-black relative">
      {/* Dark White Dotted Grid Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "#000000",
          backgroundImage: `
        radial-gradient(circle, rgba(255, 255, 255, 0.15) 1.5px, transparent 1.5px)
      `,
          backgroundSize: "50px 50px",
          backgroundPosition: "0 0",
        }}
      />
      <div className="relative z-10  flex flex-col items-start max-w-4xl text-white mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row gap-10 md:gap-30 justify-between">
          <div>
            <p className="font-black uppercase mb-1">
              <span>|</span>GET IN TOUCH
            </p>
            <div className="uppercase font-black text-4xl md:text-5xl leading-[30px] md:leading-10 text-left">
              <h2>CONTACT</h2>
            </div>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          {/* icons */}
          <div className=" flex items-center gap-10">
            <div className="flex gap-3">
              <div className="bg-zinc-800 w-min p-3 rounded-sm">
                <Phone />
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <a href="tel:+391234567890">44404444</a>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="bg-zinc-800 w-min p-3 rounded-sm">
                <Mail />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <a href="mailto:info@example.com">s@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
