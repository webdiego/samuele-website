"use client";
import Cal from "@calcom/embed-react";

export default function Booking() {
  return (
    <div id="booking" className="max-w-4xl px-4 mx-auto h-full py-10">
      <div className="mb-10">
        <p className="font-black uppercase mb-1">
          <span>|</span>BOOKING
        </p>
        <div className="uppercase font-black text-4xl md:text-5xl leading-[30px] md:leading-10">
          <h2>GET Start</h2>
          <h2>now</h2>
        </div>
        <p className="mt-4 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quas
          vel. Provident iusto unde, explicabo laborum tempora vero corrupti
        </p>
      </div>
      <div>
        <div className="min-h-[700px]">
          <Cal
            calLink={`${process.env.NEXT_PUBLIC_CAL}`}
            style={{ width: "100%", height: "100%" }}
            config={{ theme: "light", layout: "month_view" }}
          />
        </div>
      </div>
    </div>
  );
}
