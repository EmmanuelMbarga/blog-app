import React from 'react'
import { Footersecton1 } from './footersection1';
import { Footersection2 } from './footersection2';
import { Footersection3 } from './footersection3';

export const Footer = () => {
  return (
    <footer className="pt-[600px] mt-80 relative -z-50  h-[70rem] bg-sky-900 Tablette:pt-[550px] mobil:pt-[400px] MiniPortable:pt-[350px]">
    <div>
      {/* -----------------------------------------------------sectionfouter1----------------------------------------------------- */}
      <Footersecton1/>
      {/* -----------------------------------------------------sectionfouter2----------------------------------------------------- */}
      <Footersection2/>
    </div>
      {/* -----------------------------------------------------sectionfouter3----------------------------------------------------- */}
      <Footersection3/>
  </footer>
  )
}
