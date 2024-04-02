/* eslint-disable @next/next/no-img-element */
"use client"

import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import ContactButton from '@/components/ContactButton';
import { TitleText, servicesItems } from '../lib/data/ServicePage';
import Image from 'next/image'


const Serices = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Navbar activePage={"Services"} />
      <div>
        <h1 className='text-center mt-10 text-3xl mb-20'>{TitleText[0].title}</h1>
        <p className='m-10 lg:mx-60 leading-relaxed text-justify' >
          {TitleText[0].text1}
        </p>
        <p className='m-10 lg:mx-60 leading-relaxed text-justify' >
          {TitleText[0].text2}
        </p>
        <p className='m-10 lg:mx-60 leading-relaxed text-justify' >
          {TitleText[0].text3}
        </p>
      </div>

      <div className="  bg-[#4f46e5] mt-20 py-10 mb-20">
        <div className="grid gap-10 mx-20 grid-cols-1 md:gap-32 lg:gap-10 lg:grid-cols-2 lg:gap-y-32 xl:grid-cols-2 xl:gap-10 xl:gap-x-72 xl:gap-y-40">
          {servicesItems.map((item, index) => (
            <div key={index} className="card lg:card-side bg-[#faf3f3] shadow-xl">
              <figure className='h-full'>
                <Image
                  src={item.picture}
                  alt={"cover project"}
                  width={300}
                  height={600} // Ajustez cette valeur selon vos besoins
                  className='h-full object-cover'
                />
              </figure>
              <div className="card-body flex flex-col items-center justify-center">
                <h2 className="card-title text-center">{item.title}</h2>
                <p className='w-52 text-justify'>{item.description}</p>
                <div className="card-actions justify-center mt-4">
                  <Button
                    variant="ghost"
                    className="bg-[#4f46e5] text-[#dde3ff] drop-shadow-xl rounded-2xl w-[150] hover:bg-[#151335] hover:text-white"
                    onClick={() => setIsOpen(true)}
                    tabIndex={0}
                    aria-label="Contactez-nous"
                  >
                    Obtenir un devis
                  </Button>
                </div>
              </div>
            </div>
          ))}
          {isOpen && (
            <ContactButton setIsOpen={setIsOpen} message="Détail de votre projet" />
          )}
        </div>
      </div>



    </>
  )
}

export default Serices