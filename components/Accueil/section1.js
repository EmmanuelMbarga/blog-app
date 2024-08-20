import React from "react";
import { ExploreCardLeft } from "../cardexplore/exploreLeft";
import { ExploreCardRight } from "../cardexplore/exploreRight";
import gambas from "../../imgs/slider/gambas.jpg";
import poulet from "../../imgs/slider/poulet.jpg";

export default function ViewService() {
  return (
    <section className="m-auto  mt-40 w-full relative -z-50 Tablette:mt-14 mobil:mt-0 MiniPortable:mt-0">
      <h2 className="max-w-[1500px] m-auto text-6xl uppercase font-poppins font-bold tracking-wider bg-gradient-to-br from-blue-500 to-violet-800 text-transparent bg-clip-text mobil:text-2xl MiniPortable:text-lg ">
        #decouvrez
      </h2>
      <ExploreCardLeft
        img={gambas}
        text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro maiores dignissimos! "
        alt="gambas"
      />
      <ExploreCardRight
        img={poulet}
        text={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro maiores dignissimos! .`}
        alt="gambas"

      />
    </section>
  );
}
