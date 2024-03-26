/* eslint-disable @next/next/no-img-element */

"use client"
import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import ContactButton from '@/components/ContactButton';
import { TitleText, servicesItems } from './ServicePage';

const Serices = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar activePage={"Services"} />
      <div>
        <h1 className='text-center mt-10 text-3xl'>{TitleText[0].title}</h1>
        <p className='m-10 lg:mx-60 leading-relaxed text-justify' >
          {TitleText[0].text}
        </p>
      </div>

      <div className="  bg-[#4f46e5] mt-20 py-10 mb-20">
        <div className="grid gap-10 mx-20 grid-cols-1 md:gap-32 lg:gap-10 lg:grid-cols-2 lg:gap-y-32 xl:grid-cols-2 xl:gap-10 xl:gap-x-72 xl:gap-y-40">
          {servicesItems.map((item, index) => (
            <div key={index} className="card lg:card-side bg-[#faf3f3] shadow-xl">
              <figure className=''>
                <img src={item.picture} alt="cover project" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                  <Button variant="ghost" className="bg-[#4f46e5] text-[#dde3ff] drop-shadow-xl rounded-2xl w-[150]" onClick={() => setIsOpen(true)}>
                    Obtenir un devis
                  </Button>
                  
                </div>
              </div>
            </div>
          ))}
          {isOpen && (
            <ContactButton setIsOpen={setIsOpen} message="Détail de votre projet"/>
          )}
        </div>
      </div>



    </>
  )
}

export default Serices