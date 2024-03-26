import Navbar from '@/components/Navbar'
import React from 'react'
import Contactform from '@/components/Contactform'
import { titleText } from './contactPage'

const Contact = () => {


  return (
    <>
      <Navbar activePage={"Contact"} />

      <div className='lg:grid lg:gap-10 lg:ml-20 lg:grid-cols-2 lg:mt-20 md:mt-20'>
        <div className='flex items-center justify-center mx-20'>
          <div className='md:mb-10'>
            <h1 className='text-center text-3xl'>{titleText[0].title}</h1>
            <p className='leading-relaxed text-justify mt-20 lg:mx-0 mx-20'>
              {titleText[0].text}
            </p>
          </div>
        </div>
        <div className='bg-[#4f46e5] p-20 flex items-center justify-center'>
          <div className=' w-80'>
            <Contactform message="Votre message"/>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Contact
