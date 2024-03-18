import Navbar from '@/components/Navbar'
import React from 'react'
import Image from 'next/image';
import test from '../../../public/image/datalogger.jpg'
import { Button } from '@/components/ui/button';

const serices = () => {

  const servicesItems = [
    {
      title: 'Conception hd',
      picture: test,
      description: 'Un système est conçu, géré et déployé après avoir été correctement défini depuis son cahier de charges fonctionnel.'
    },
    {
      title: 'Conception',
      picture: test,
      description: 'Un système embarqué fait référence à un système informatique complet intégré dans un dispositif dédié à une fonction ou une série de fonctions spécifiques.'
    },
    {
      title: 'Conception système embarqué',
      picture: test,
      description: 'Un système embarqué fait référence à un système informatique complet intégré dans un dispositif dédié à une fonction ou une série de fonctions spécifiques.'
    },
    {
      title: 'Conception système embarqué',
      picture: test,
      description: 'Un système embarqué fait référence à un système informatique complet intégré dans un dispositif dédié à une fonction ou une série de fonctions spécifiques.'
    },
    // Ajouter d'autres objets ici si nécessaire
  ];
  return (
    <>
      <Navbar activePage={"Services"} />
      <div>
        <h1 className='text-center mt-10 text-3xl'>Nos Services</h1>
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
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 sm:gap-x-10 md:gap-x-40 lg:grid-cols-2 lg:gap-x-96 gap-y-40 mx-32"> */}
        <div className="grid gap-10 mx-20 grid-cols-1 md:gap-32 lg:gap-10 lg:grid-cols-2 lg:gap-y-32 xl:grid-cols-2 xl:gap-10 xl:gap-x-72 xl:gap-y-40">
          {servicesItems.map((item, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">

              <div className='hidden sm:flex items-center'>
                <Image src={item.picture} alt="Image project" width={100} height={100} className="w-full sm:w-1/2" />
                <h2 className="text-[#504f70] text-lg font-bold text-center w-full">{item.title}</h2>
              </div>

              <div className='block sm:hidden items-center'>
                <h2 className="text-[#504f70] text-lg font-bold text-center w-full mb-4">{item.title}</h2>
                <Image src={item.picture} alt="Image project" width={100} height={100} className="w-full sm:w-1/2" />
              </div>

              <p className="text-gray-600  h-40 place-items-center flex">{item.description}</p>
              <div className='flex justify-center'>
                <Button variant="ghost" className="bg-[#4f46e5] text-white drop-shadow-xl rounded-2xl w-[150px] mr-10 ">
                  Obtenir un devis
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default serices