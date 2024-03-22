import Navbar from '@/components/Navbar'
import React from 'react'
import Contactform from '@/components/Contactform'

const Contact = () => {


  return (
    <>
      <Navbar activePage={"Contact"} />

      <div className='lg:grid lg:gap-10 lg:ml-20 lg:grid-cols-2 lg:mt-20 md:mt-20'>
        <div className='flex items-center justify-center mx-20'>
          <div className='md:mb-10'>
            <h1 className='text-center text-3xl'>text</h1>
            <p className='leading-relaxed text-justify mt-20'>
              id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate
              odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis
              convallis tellus id interdum velit laoreet id donec ultrices tincidunt arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed id semper
              risus in hendrerit gravida rutrum quisque non tellus orci ac auctor augue mauris augue neque gravida in fermentum et sollicitudin ac orci phasellus egestas
              tellus rutrum t  ellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel pretium
              lectus quam id leo in vitae tur
            </p>
          </div>
        </div>
        <div className='bg-[#4f46e5] p-20 flex items-center justify-center'>
          <div className=' w-80'>
            <Contactform />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Contact
