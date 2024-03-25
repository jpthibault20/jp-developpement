/* eslint-disable @next/next/no-img-element */
"use client"

import Navbar from '@/components/Navbar'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import test from '../../../public/image/picture profile1.svg'
import Link from "next/link"
import ContactButton from '@/components/ContactButton';

const Developer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const servicesItems = [
    {
      Name: 'Jeane',
      surname: 'Dupont',
      picture: '/image/testDev.jpg',
      description: 'Développeur web full-stack passionné, je maîtrise HTML, CSS, JavaScript, PHP, Python et Java. Je suis rigoureux, méthodique et doté d un bon esprit d équipe.'
    },
    {
      Name: 'Jeane',
      surname: 'Dupont',
      picture: '/image/testDev.jpg',
      description: 'Développeur web full-stack passionné, je maîtrise HTML, CSS, JavaScript, PHP, Python et Java. Je suis rigoureux, méthodique et doté d un bon esprit d équipe.'
    },
    {
      Name: 'Jeane',
      surname: 'Dupont',
      picture: '/image/testDev.jpg',
      description: 'Développeur web full-stack passionné, je maîtrise HTML, CSS, JavaScript, PHP, Python et Java. Je suis rigoureux, méthodique et doté d un bon esprit d équipe.'
    },
    {
      Name: 'Jeane',
      surname: 'Dupont',
      picture: '/image/testDev.jpg',
      description: 'Développeur web full-stack passionné, je maîtrise HTML, CSS, JavaScript, PHP, Python et Java. Je suis rigoureux, méthodique et doté d un bon esprit d équipe.'
    },
    // Ajouter d'autres objets ici si nécessaire
  ];

  return (
    <>
      <div className=''>

      </div>
      <Navbar activePage={"Developpeurs"} />

      <div>
        <h1 className='text-center mt-10 text-3xl'>Nos Developpeurs</h1>
        <p className='m-10 lg:mx-60 leading-relaxed text-justify' >id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate
          odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis
          convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper
          risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas
          tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium
          lectus quam id leo in vitae turpis massa sed elementum tempus egestas sed sed risus pretium quam vulputate dignissim suspendisse in est ante in nibh mauris
          cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet nulla facilisi morbi tempus iaculis urna id
          volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean et tortor at risus viverra adipiscing at in tellus integer feugiat
          scelerisque varius morbi</p>
      </div>

      <div className="  bg-[#4f46e5] mt-20 py-10 mb-20">
        <div className="grid gap-10 mx-20 grid-cols-1 md:gap-32 lg:gap-10 lg:grid-cols-2 lg:gap-y-32 xl:grid-cols-2 xl:gap-10 xl:gap-x-72 xl:gap-y-40">
          {servicesItems.map((item, index) => (
            <div key={index} className="card lg:card-side bg-[#faf3f3] shadow-xl">
              <figure className='ml-4'>
                <img src={item.picture} alt="cover project" className='mask mask-squircle' />
              </figure>
              <div className="card-body">
                <div className='flex'>
                  <h2 className="card-title font-extrabold">{item.surname}</h2>
                  <h2 className="card-title ml-2">{item.Name}</h2>
                </div>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                  <Button variant="ghost" className="bg-[#4f46e5] text-[#dde3ff] drop-shadow-xl rounded-2xl w-[150]" onClick={() => setIsOpen(true)}>
                    contact
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

export default Developer
