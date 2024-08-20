import React from "react";

export const FormLogin = () => {
  return (
    <div className="max-w-[500px] flex justify-center items-center w-full m-auto h-[350px] bg-white absolute bottom-0 top-44 left-0 right-0 rounded mobil:max-w-[450px] ">
      <form className="p-4">
        <div className="mb-4">
          <label htmlFor="email" className="font-poppins font-bold">email</label>
          <br />
          <input type="email" name="email" id="email" className="border outline-none p-2 text-sm w-fit" />
        </div>
        <div>
          <label htmlFor="password" className="font-poppins font-bold">password</label>
          <br />
          <input type="password" name="password" id="password" className="border outline-none p-2 text-sm w-fit" />
        </div>
        <div className="mb-4 flex justify-center mt-16">
          <button className=" p-1 rounded bg-blue-500 text-white font-bold shadow" type="submit" >envoyer</button>
        </div>
      </form>
    </div>
  );
};
