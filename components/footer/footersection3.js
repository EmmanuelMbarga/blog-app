import React from 'react'

export const Footersection3 = () => {
  return (
    <section className="flex justify-between max-w-[1000px] m-auto p-0 rounded-lg h-50 Laptop:pl-0 Laptop:mx-2 Tablette:mx-2 mobil:flex-col mobil:bottom-0 mobil:mt-[430px] mobil:m-1 mobil:pl-0 MiniPortable:flex-col MiniPortable:pl-0 MiniPortable:m-1 MiniPortable:mt-[400px] MiniPortable:p-1">
      
        <div className="relative p-2">
          <span className="text-2xl font-poppins font-bold p-2 bg-sky-500 text-white MiniPortable:text-lg">
            E
          </span>
          <span className="text-2xl font-poppins font-bold absolute top-2 p-2 bg-violet-900 text-white MiniPortable:text-lg">
            M
          </span>
        </div>
        <div>
          <h2 className="text-xl font-poppins font-bold text-white">service</h2>
        </div>
        <div>
          <h2 className="text-xl font-poppins font-bold text-white">contacts</h2>
        </div>
    </section>
  )
}
