import React from "react";
import gambas from "../../imgs/slider/gambas.jpg";
import Image from "next/image";

export const CardList = () => {
  return (
    <div className="-z-30 m-1 bg-white shadow mt-4 rounded-lg cursor-pointer">
      <Image src={gambas} alt="card" className="rounded-lg" />
      <div  className="p-4">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequuntur, voluptas eum et atque debitis, voluptates delectus
          inventore alias minus laboriosam assumenda non, perferendis aut
          quaerat. Suscipit omnis earum provident iusto.
        </p>
        <div className="flex gap-4 my-4">
          <div className="w-10 h-10 bg-gray-400 rounded-full flex justify-center items-center justify-items-center"><p className="text-white font-bold">D</p></div>
          <div>
            <h2 className="font-bold">Dimitri</h2>
            <p className="text-sm text-gray-500">recette de pre-saison</p>
            <span className="text-xs text-gray-500">publié le 11/12/2004 à 11h30</span>
          </div>
        </div>
      </div>
    </div>
  );
};
