import React from "react";
import img1 from "./../imgs/slider/gambas.jpg";
import Image from "next/image";

export default function SliderApp() {
  return (
    <>
      <section className="relative -z-50 mt-24 max-w-[1900px] w-full m-auto h-[27.9rem]">
        <Image
          src={img1}
          alt="gambas"
          className="h-[32rem] object-cover Tablette:h-[28rem] mobil:h-[22rem] MiniPortable:h-[22rem]"
        />
        <div className="h-[32rem] bg-black bg-opacity-45 backdrop-blur-sm -mt-[32rem] relative z-50 Tablette:h-[28rem] Tablette:-mt-[28rem] mobil:h-[22rem] mobil:-mt-[22rem] MiniPortable:-mt-[22rem] MiniPortable:h-[22rem] ">
          <div className="text-center translate-y-44 m-auto font-poppins font-bold mobil:translate-y-24 MiniPortable:translate-y-24">
            <h1 className="text-2xl text-white uppercase Tablette:text-lg mobil:text-lg MiniPortable:text-base">
              bienvenu chez nous !{" "}
            </h1>
            <h2 className="text-3xl text-white uppercase -tracking-tighter mt-4 Tablette:text-xl mobil:text-xl MiniPortable:text-lg">
              nous allons vous faire découvrir nos belles merveilles
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}
