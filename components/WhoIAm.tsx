"use client";
import * as React from "react";
import { Button } from "./ui/button";
import { motion, useInView } from "framer-motion";

export default function WhoIAm() {
  const ref = React.useRef(null);

  const isInView = useInView(ref);

  return (
    <div
      ref={ref}
      id="whoiam"
      className="bg-white max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 py-20 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div>
          <p className="font-black uppercase mb-1">
            <span>|</span>Who I am
          </p>
        </div>
        <div className="uppercase font-black text-5xl  leading-10">
          <h2>Samuele </h2>
          <h2>Spriano</h2>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-5 md:mt-0 "
      >
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, labore.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga iusto
          porro laboriosam autem beatae deserunt maiores libero praesentium
          dolore cumque. Quae, iste dolorum facilis distinctio velit eos autem
          voluptate debitis.
        </p>
        <Button className="mt-4">
          <p className="uppercase font-bold text-xs">Get started</p>
        </Button>
      </motion.div>
    </div>
  );
}
