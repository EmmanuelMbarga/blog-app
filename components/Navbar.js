import Link from "next/link";
import React, { useEffect, useState } from "react";
import { CiMenuBurger } from "react-icons/ci";

function Headerapp() {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [checkWith, setCheckWith] = useState(0);

  useEffect(() => {
    const checkWithfunc = () => {
      setCheckWith(window.innerWidth);
    };
    checkWithfunc();
    window.addEventListener("resize", checkWithfunc);
    return () => {
      window.removeEventListener("resize", checkWithfunc);
    };
  });

  const handlerBurgerMenu = () => {
    setBurgerMenu(!burgerMenu);
    setCheckWith(checkWith);
  };

  return (
    <>
      <nav className="flex z-50 fixed w-full justify-around bg-white p-4 shadow-md items-center Tablette:flex-row-reverse mobil:justify-between MiniPortable:justify-between">
        <Link href='/'>
        <div className="relative  p-2">
          <span className="text-2xl font-poppins font-bold p-2 bg-sky-500 text-white MiniPortable:text-lg">
            E
          </span>
          <span className="text-2xl font-poppins font-bold absolute top-2 p-2 bg-violet-900 text-white MiniPortable:text-lg">
            M
          </span>
        </div>
        </Link>
        <div>
        <div className="flex justify-end mb-4 Tablette:justify-start mobil:hidden MiniPortable:hidden">
          <button className="capitalize font-poppins bg-gradient-to-tr from-sky-500 to-violet-500 rounded-lg px-2 py-1 text-sm text-white mx-4"><Link href="#">sing in</Link></button> 
          <button className="capitalize font-poppins bg-gradient-to-tr from-sky-500 to-violet-500 rounded-lg px-2 py-1 text-sm text-white"><Link href="/login"> log in</Link></button>
        </div>

        <ul className="flex gap-10 font-Inter font-bold cursor-pointer mobil:hidden MiniPortable:hidden">
          <li className="hover:text-blue-700 hover:transition-all"><Link href="/">Home</Link></li>
          <li className="hover:text-blue-700 hover:transition-all">About</li>
          <li className="hover:text-blue-700 hover:transition-all">contacts</li>
        </ul>
        </div>
        <button
          onClick={handlerBurgerMenu}
          className="invisible absolute mobil:visible mobil:relative mobil:border mobil:p-2 MiniPortable:border MiniPortable:p-1 MiniPortable:visible MiniPortable:relative"
        >
          <CiMenuBurger />
        </button>
      </nav>
      {!burgerMenu ||
        (checkWith <= 480 && (
          <section className="fixed z-50 bg-black backdrop-blur-lg bg-opacity-50 text-white  w-full h-full top-0">
            <button
              onClick={handlerBurgerMenu}
              className="text-4xl absolute right-10 mt-10 "
            >
              x
            </button>
            <ul className="gap-10 font-Inter font-bold text-center cursor-pointer mt-40">
              <li className="mobil:text-xl mobil:my-4 mobil:text-fill MiniPortable:text-lg MiniPortable:my-4 MiniPortable:text-full">
                Home
              </li>
              <li className="mobil:text-xl mobil:my-4 mobil:text-fill MiniPortable:text-lg MiniPortable:my-4 MiniPortable:text-full">
                About
              </li>
              <li className="mobil:text-xl mobil:my-4 mobil:text-fill MiniPortable:text-lg MiniPortable:my-4 MiniPortable:text-full">
                contacts
              </li>
            </ul>
          </section>
        ))}
    </>
  );
}

export default Headerapp