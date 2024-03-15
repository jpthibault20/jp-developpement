import Navbar from '@/components/Navbar'
import React from 'react'
import Carousel from '@/components/Carousel';
import { Button } from "@/components/ui/button"


const home = () => {

  return (
    <>
      <Navbar activePage={"Accueil"} />

      <h1 className='text-center mt-10 text-3xl'>Qui Sommes Nous ?</h1>

      <p className='m-10 lg:mx-60 leading-relaxed text-justify'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac habitasse platea dictumst vestibulum.
        Mauris vitae ultricies leo integer malesuada. Imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque. Eget mauris pharetra et ultrices.
        In massa tempor nec feugiat nisl pretium fusce id. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant.
        Ultricies tristique nulla aliquet enim tortor at auctor.
        Nibh mauris cursus mattis molestie a iaculis. Ac felis donec et odio pellentesque diam volutpat commodo sed.
      </p>

      <div className='lg:place-content-center lg:grid lg:grid-cols-2 lg:gap-48 lg:mx-auto place-content-center grid grid-cols-2 gap-10 mx-auto'>
        <Button variant="ghost" className="bg-[#4f46e5] text-white drop-shadow-xl rounded-2xl">
          Contactez-nous
        </Button>

        <Button variant="ghost" className="bg-[#4f46e5] text-white drop-shadow-xl rounded-2xl">
          Obtenir un devis
        </Button>
      </div>


      <div className="w-full  bg-[#4f46e5] mt-20 text-[#c7d2fe]">
        <h1 className='text-center mt-10 text-3xl'>Nos Compétences</h1>

        <p className='m-10 lg:mx-60 leading-relaxed text-justify'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Eu turpis egestas pretium aenean pharetra. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Semper feugiat nibh sed pulvinar proin.
          Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Donec massa sapien faucibus et molestie ac feugiat.
          Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Orci a scelerisque purus semper eget. Lobortis elementum nibh tellus molestie nunc non blandit.
          Ipsum a arcu cursus vitae congue mauris.
        </p>

        <Carousel />

      </div>

    </>
  )
}

export default home;