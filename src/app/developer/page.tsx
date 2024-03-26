/* eslint-disable @next/next/no-img-element */
"use client"

import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import ContactButton from '@/components/ContactButton';
import { titleText, developerItems } from '../lib/data/developerPage';
import Image from 'next/image'
import { BriefcaseBusiness } from 'lucide-react';
import Link from 'next/link';

const Developer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className=''>

      </div>
      <Navbar activePage={"Developpeurs"} />

      <div>
        <h1 className='text-center mt-10 text-3xl'>{titleText[0].title}</h1>
        <p className='m-10 lg:mx-60 leading-relaxed text-justify' >
          {titleText[0].text}
        </p>
      </div>

      <div className="  bg-[#4f46e5] mt-20 py-10 mb-20">
        <div className="grid gap-10 mx-20 grid-cols-1 md:gap-32 lg:gap-10 lg:grid-cols-2 lg:gap-y-32 xl:grid-cols-2 xl:gap-10 xl:gap-x-72 xl:gap-y-40">
          {developerItems.map((item, index) => (
            <div key={index} className={`${item.actif ? '' : 'blur-sm'}`}>
              <div  className="card lg:card-side bg-[#faf3f3] shadow-xl">
                <figure className='ml-4 lg:mt-0 mt-5'>
                  <Image src={item.picture} alt={"logo LTG-tech"} width={300} height={300} className='mask mask-squircle'/>
                </figure>
                <div className="card-body">
                  <div className='flex'>
                    <h2 className="card-title font-extrabold">{item.surname}</h2>
                    <h2 className="card-title ml-2">{item.Name}</h2>
                  </div>
                  <p>{item.description}</p>
                  <div className={`${item.actif ? 'card-actions justify-end' : 'hidden'}`}>
                    <button className='p-2'>
                      <Link href="/">
                        <BriefcaseBusiness />
                      </Link>
                    </button>
                    <Button variant="ghost" className="bg-[#4f46e5] text-[#dde3ff] drop-shadow-xl rounded-2xl w-[150]" onClick={() => setIsOpen(true)}>
                      contact
                    </Button>
                  </div>
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

export default Developer
