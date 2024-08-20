import Image from "next/image";
import React from "react";

export const ExploreCardLeft = (props) => {
  return (
    <div className=" max-w-[1000px] m-auto mobil:max-w-[400px] mobil:px-2 MiniPortable:max-w-[250px] MiniPortable:px-1">
      <div className="grid grid-cols-2 mobil:grid-cols-1 Laptop:ml-10 Tablette:ml-10 mobil:flex mobil:flex-col-reverse MiniPortable:grid-cols-1 MiniPortable:flex MiniPortable:flex-col-reverse MiniPortable:text-wrap">
        <div className="bg-black text-white text-full pt-8 pl-8 pr-14 max-w-[500px] m-auto w-full h-[360px] Tablette:h-[290px] mobil:h-[150px] mobil:py-2 mobil:px-8 MiniPortable:h-full MiniPortable:py-2 MiniPortable:px-2">
          <h2 className="text-4xl font-poppins font-bold Tablette:text-2xl mobil:text-lg mobil:text-center MiniPortable:text-lg">
            savourez nos meilleurs recettes
          </h2>
          <br />
          <p className="text-left Tablette:text-sm mobil:text-xs mobil:text-jistify MiniPortable:text-xs">
            {props.text}
          </p>
        </div>

        <Image
          src={props.img}
          alt={props.alt}
          className="w-[500px] h-[360px] object-cover -ml-12 mt-14 mobil:ml-0 mobil:h-[200px] mobil:mt-0 MiniPortable:h-[150px] MiniPortable:ml-0 MiniPortable:mt-0 Tablette:h-[290px]"
        />
      </div>
    </div>
  );
};
