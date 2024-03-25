"use client"

import { X } from 'lucide-react'
import React from 'react'
import Contactform from './Contactform'


const ContactButton = ({setIsOpen, message}: {setIsOpen: (load: boolean) => void, message:string }) => {
  return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <div className="p-6 bg-white rounded-md text-black flex">
                <div className='md:flex'>
                    <div className='max-h place-content-center ml-10 mr-14'>
                    <h1 className='text-center text-2xl mb-10'>Nous contacter</h1>
                    <p className='w-48 text-center place-content-center text-lg'>
                        N&apos;hésitez pas à nous envoyer un message. <br /><br /> Nous nous engageons à vous répondre dans les plus brefs délais, généralement sous 24 heures ouvrables.
                    </p>
                </div>

                <div className='mt-10'>
                    <Contactform message={message} />
                </div>
                </div>

                

                <div className='items-start text-[#4d4d4db4] mb-3'>
                    <button>
                        <X onClick={() => setIsOpen(false)}/>
                    </button>
                    
                </div>
            
            </div>
        </div>
  )
}

export default ContactButton
