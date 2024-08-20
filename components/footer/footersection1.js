import React from 'react'
import happy from "../../imgs/png/fille-en-jaune.png";
import Image from "next/image";

export const Footersecton1 = () => {
  return (
<section className="absolute flex left-0 right-0 -top-44  max-w-[1300px] pl-8 pt-8 m-auto rounded-lg h-50 bg-gradient-to-br from-sky-500 to-violet-600 Laptop:flex-row-reverse Laptop:pl-0 Laptop:mx-2 Tablette:mx-2 mobil:flex-col mobil:m-1 mobil:pl-0 MiniPortable:flex-col MiniPortable:pl-0 MiniPortable:m-1">
        <div className="mobil:px-2 MiniPortable:px-2 Laptop:ml-6">
          <h2 className="text-white font-bold text-3xl font-poppins MiniPortable:text-lg">
            Projet N°1, blog personnel
          </h2>
          <p className="font-Inter w-[70%] my-8 text-white MiniPortable:text-xs MiniPortable:w-full MiniPortable:text-left">
            retrouver les informations necessaire sur la confection de nos
            repas et la prise en charge dans nos differentes structure
          </p>
          <div className="flex items-center gap-4 MiniPortable:gap-1">
            <div className="h-10 w-10 rounded-full bg-white MiniPortable:w-6 MiniPortable:h-4"></div>
            <p className="text-sm text-white MiniPortable:text-xs">
              {" "}
              100% de services garanties
            </p>
          </div>
        </div>
        <div>
          <Image
            src={happy}
            alt="happy"
            className="w-[400px] h-[400px] object-cover mobil:w-[300px] mobil:h-[300px] MiniPortable:w-[150px] MiniPortable:h-[150px]"
          />
        </div>
      </section>
  )
}
