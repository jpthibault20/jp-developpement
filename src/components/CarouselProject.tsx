"use client"
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card } from '@nextui-org/react'
import { CardContent } from './ui/card'
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay"

import jpDev from '../../public/image/reacNextjs.png'
import datalog from '../../public/image/datalogger.jpg'
import dom from '../../public/image/homeAssistant.png'
import teeShirt from '../../public/image/teeShirtConnect.jpg'


const dataProject = [
  {
    title: "JP-Developement.com",
    picture: jpDev,
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Vitae nunc sed velit dignissim sodales. Nibh tellus molestie nunc non blandit"
  },
  {
    title: "Dataloggeur ",
    picture: datalog,
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Vitae nunc sed velit dignissim sodales. Nibh tellus molestie nunc non blandit"
  },
  {
    title: "Installation Domotique",
    picture: dom,
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Vitae nunc sed velit dignissim sodales. Nibh tellus molestie nunc non blandit"
  },
  {
    title: "Tee-shirt connectée",
    picture: teeShirt,
    message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer vitae justo eget magna. Turpis nunc eget lorem dolor sed viverra ipsum nunc aliquet. Vitae nunc sed velit dignissim sodales. Nibh tellus molestie nunc non blandit"
  },
]
const CarouselProject = () => {

  return (
    <div className="flex justify-center mb-10">
      <Carousel className="w-full max-w-2xl"
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
        <CarouselContent>
          {dataProject.map((item, idx) => (
            <CarouselItem key={idx}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex flex-col sm:flex-row items-center justify-center p-6">
                    <div className="mb-4 sm:mb-0 sm:mr-10">
                      <span className="text-xl font-semibold">{item.title}</span>
                      <p className="mt-2">{item.message}</p>
                    </div>
                    <div className="sm:max-w-xs">
                      <Image src={item.picture} alt="Image project" width={1000} height={1000} className="w-full sm:w-auto" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default CarouselProject
