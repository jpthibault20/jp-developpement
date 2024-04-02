"use client"

import Navbar from '@/components/Navbar'
import React from 'react'
import Carousel from '@/components/CarouselProject';
import BoxOpinion from "@/components/Reviews"
import Image from 'next/image';
import ButtonHomePage from '@/components/ButtonHomePage';
import { TitleText, TitleRevviews, Entreprise } from '@/app/lib/data/homePage'

const home = () => {


  return (
    <>
      <Navbar activePage={"Accueil"} />

      <h1 className='text-center mt-10 text-3xl'>{TitleText[0].title}</h1>

      <p className='mt-10 mx-10 lg:mx-60 leading-relaxed text-justify'>
        {TitleText[0].text1}
      </p>
      <p className='mt-10 mx-10 lg:mx-60 leading-relaxed text-justify'>
        {TitleText[0].text2}
      </p>
      <p className='mt-10 mb-10 mx-10 lg:mx-60 leading-relaxed text-justify'>
        {TitleText[0].text3}
      </p>

      <div className='flex justify-center'>
        <ButtonHomePage color={"blue"} />
      </div>


      <div className="  bg-[#4f46e5] mt-20 text-[#c7d2fe]">
        <h1 className='text-center mt-10 text-3xl'>{TitleText[1].title}</h1>
        <p className='m-10 lg:mx-60 leading-relaxed text-justify'>{TitleText[1].text1}</p>

        <Carousel />

        <div className='flex justify-center mb-10'>
          <ButtonHomePage color={"white"} />
        </div>
      </div>



      <div className='m-10 lg:mx-60 '>
        <h1 className="text-center my-10 text-3xl">{TitleRevviews[0].title}</h1>
        <div>
          <BoxOpinion />
        </div>
      </div>

      <div>
        <h1 className="text-center mt-10 mb-2 text-xl">{Entreprise[0].title}</h1>
        <div className='grid grid-cols-4 gap-4 items-center justify-items-center'>
          <div></div>
          <Image src={Entreprise[1].logo} alt={"logo LTG-tech"} width={100} height={100} />
          <Image src={Entreprise[2].logo} alt={"logo Primservice"} width={100} height={100} />
          <div></div>
        </div>
      </div>
    </>
  )
}

export default home;