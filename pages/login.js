import React from 'react'
import Headerapp from '@/components/Navbar'
import { FormLogin } from '@/components/auth/formLogin'

export default function LogIn() {
  return (
    <div className='relative'>
        <div className='-mt-40'>
        <Headerapp/>
        </div>
        <div className='mt-40 '>
        <div className='max-w-[1500px] relative -z-20 pt-20 m-auto  mobil:px-4'>
          <div className='flex justify-evenly '>
            <div className='bg-violet-400 rounded-full h-40 w-40 mt-20 blur-lg'></div>
            <div className='bg-yellow-400 h-40 w-40 mt-20  blur-lg'></div>
          </div>
          <div className='flex justify-evenly mt-60 '>
            <div className='bg-red-400 h-40 w-40 mt-20  blur-lg'></div>
            <div className='bg-blue-400 h-40 w-40 mt-20  blur-lg rotate rotate-45'></div>
          </div>
        </div>
        </div>
        <FormLogin/>
    </div>
  )
}
