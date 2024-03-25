"use client"

import { X } from 'lucide-react'
import React from 'react'
import Contactform from './Contactform'


const ContactButton = ({isOpen, setIsOpen, message}: {isOpen: boolean, setIsOpen: (load: boolean) => void, message:string }) => {
  return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
        <div className="p-6 bg-white rounded-md text-black flex">

            <p className='w-48 mr-20 text-center place-content-center text-lg'>
                N&apos;hésitez pas à nous envoyer un message. <br /><br /> Nous nous engageons à vous répondre dans les plus brefs délais, généralement sous 24 heures ouvrables.
            </p>

            <div className='mt-10'>
                <Contactform message={message} />
            </div>

            <div className='flex place-content-end text-[#4d4d4db4] mb-3'>
                <X onClick={() => setIsOpen(false)}/>
            </div>
            
            
        </div>
        </div>
  )
}

export default ContactButton
