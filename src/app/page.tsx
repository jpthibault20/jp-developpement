import Navbar from '@/components/Navbar'
import React from 'react'
import Carousel from '@/components/CarouselProject';
import BoxOpinion from "@/components/Reviews"
import { Button } from "@/components/ui/button"
import Image from 'next/image';
import logoLTG from '../../public/image/logoLTG-tech.svg'
import logoPrimservice from '../../public/image/logoPrimservice.svg'


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

      <div className='flex justify-center'>
          <Button variant="ghost" className="bg-[#4f46e5] text-white drop-shadow-xl rounded-2xl w-[150px] mr-10">
            Contactez-nous
          </Button>
          <Button variant="ghost" className="bg-[#4f46e5] text-white drop-shadow-xl rounded-2xl w-[150px]">
            Obtenir un devis
          </Button>
        </div>


      <div className="  bg-[#4f46e5] mt-20 text-[#c7d2fe]">
        <h1 className='text-center mt-10 text-3xl'>Nos Compétences</h1>
        <p className='m-10 lg:mx-60 leading-relaxed text-justify'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Eu turpis egestas pretium aenean pharetra. Porttitor massa id neque aliquam vestibulum morbi blandit cursus. Semper feugiat nibh sed pulvinar proin.
          Condimentum id venenatis a condimentum vitae sapien pellentesque habitant. Donec massa sapien faucibus et molestie ac feugiat.
          Tellus integer feugiat scelerisque varius morbi enim nunc faucibus. Orci a scelerisque purus semper eget. Lobortis elementum nibh tellus molestie nunc non blandit.
          Ipsum a arcu cursus vitae congue mauris.
        </p>
        <Carousel />

        <div className='flex justify-center mb-10'>
          <Button variant="ghost" className="bg-[#c7d2fe] text-black drop-shadow-xl rounded-2xl w-[150px] mr-10">
            Contactez-nous
          </Button>
          <Button variant="ghost" className="bg-[#c7d2fe] text-black drop-shadow-xl rounded-2xl w-[150]">
            Obtenir un devis
          </Button>
        </div>
      </div>



      <div className='m-10 lg:mx-60 '>
        <h1 className="text-center my-10 text-3xl">Ce Qu&apos;ils Disent De Nous</h1>
        <div>
          <BoxOpinion />
        </div>
      </div>

      <div>
        <h1 className="text-center mt-10 mb-2 text-xl">Ils Nous Ont Fais Confiance</h1>
        <div className='grid grid-cols-4 gap-4 items-center justify-items-center'>
          <div></div>
          <Image src={logoLTG} alt={"logo LTG-tech"} width={100} height={100} />
          <Image src={logoPrimservice} alt={"logo Primservice"} width={100} height={100} />
          <div></div>
        </div>
      </div>
    </>
  )
}

export default home;