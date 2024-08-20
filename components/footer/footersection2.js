import React from 'react'

export const Footersection2 = () => {
  return (
    <section className="absolute  left-0 max-w-[1300px]  m-auto right-0 top-20 mt-60 p-8 rounded-lg h-50 bg-white bg-opacity-15 Laptop:flex-row-reverse Laptop:pl-0 Laptop:mx-2 Tablette:mx-2 mobil:flex-col mobil:mt-[410px] mobil:m-1 mobil:pl-0 MiniPortable:flex-col MiniPortable:pl-0 MiniPortable:m-1 MiniPortable:top-28 MiniPortable:mt-80 MiniPortable:p-1">
        <div className="mobil:px-2 MiniPortable:px-2 Laptop:ml-6">
          <h2 className="text-center text-white font-bold text-3xl font-poppins MiniPortable:text-lg">
            contactez-nous
          </h2>
          <p className="text-center font-Inter my-8 text-white MiniPortable:text-sm">
            laissez-vous submerger par nos performances
          </p>
          <div className="flex justify-center mobil:flex-col MiniPortable:flex-col-reverse items-center gap-4">
            <button className="text-sm bg-white p-2 font-Inter rounded-lg MiniPortable:text-xs MiniPortable:p-1">
              rejoindre la communauté
            </button>
            <button className="text-sm text-white p-2 font-Inter rounded-lg font-bold bg-gradient-to-tr from-sky-400 to-violet-600 MiniPortable:text-xs MiniPortable:p-1">
              contactez-nous
            </button>
          </div>
        </div>
      </section>
  )
}
