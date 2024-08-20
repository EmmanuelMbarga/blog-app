import React from "react";
import styles from "../../styles/section.module.css";

export const Section3 = () => {
  return (
    <>
      <section className="max-w-[1900px] bg-gradient-to-br from-violet-600 to-sky-600 rounded-b-full h-96 m-auto my-20 mobil:mt-12">
        <div className={`${styles.textContainer} py-8 text-white`}>
          <h2 className={`${styles.primaryText}`}>
            {" "}
            préférez-vous des plats spécifiques ?
          </h2>
          <h3 className={`${styles.secondText}`}>
            Nos restaurants et nos services de qualités
          </h3>
          <p className={`${styles.primaryParagraph}`}>
            Nos meilleurs choix de restauration et services à Mimboman et dans
            le Cameroun
          </p>
        </div>

        <div className="max-w-[700px] m-auto Laptop:max-w-[400px] Tablette:max-w-[300px] mobil:max-w-[200px] MiniPortable:max-w-[100px] Laptop:-mt-10 mobil:-mt-8 MiniPortable:-mt-7">
          <div className="grid grid-cols-2 gap-4 mobil:grid-cols-1 MiniPortable:grid-cols-1">
            <Btn text="Tout savoir sur les services de chef !!" />
            <Btn text="Tout savoir sur les services de chef !!" />
            <Btn text="Tout savoir sur les services de chef !!" />
            <Btn text="Tout savoir sur les services de chef !!" />
          </div>
        </div>
      </section>
    </>
  );
};

const Btn = (props) => {
  return (
    <button className="text-center p-1 text-lg font-bold transition-all hover:scale-105 bg-white hover:transition-all cursor-pointer rounded-lg shadow Laptop:text-sm Tablette:text-xs mobil:text-xs MiniPortable:text-xs">
      {props.text}
    </button>
  );
};
