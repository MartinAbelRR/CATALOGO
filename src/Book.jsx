import { useEffect, useState } from 'react';

import {books, images} from './libs/data'

import { InputChange } from './components/InputChange';
import { Page } from './components/Page';

export const Book = () => {
  const [hidden, setHidden] = useState();
  const [width, setWidth] = useState(screen.width);

  useEffect(() => {
    if(width >= 1024) {
      setHidden(false);
    }
    else {
      setHidden(true);
    }
    console.log(width);
    
    window.addEventListener('resize', () => {
      setWidth(screen.width);
    })
    
    return () => {
      window.addEventListener('resize', () => {
        setWidth(screen.width);
      })
    }
  }, [width])

  return (
    <>    
    {/* Forma 4 */}
    <div className='bg-linear min-h-screen'>
      <main className='max-w-5xl mx-auto overflow-hidden py-[36.5px] w-[90%] md:max-w-7xl'>
        {
          hidden ? 
          <div className='flex flex-col gap-y-2'>
            {
              images.map((image, index) => {
                return (
                    <img key={index} src={image.src} alt={image?.id} className='block h-full rounded-sm shadow-xl w-full'/>
                )
              })
            }
          </div>
          
          : 

          <div className='flex relative'>
          {
            books.map((image, index) => (
              <InputChange key={index} value={image?.id}/>
            ))
          }
          

          <figure className='h-[800px] w-[400px] md:h-[800px] md:w-[700px]'>
          </figure>

          <div className='flip-book'>            
            {
              books.map((image, index) => (
                <Page key={index} srcs={image?.srcs} value={image?.id}/>
              ))
            } 
          </div>
        </div>
        }      
      </main>
      
      <footer className=' bg-[#A3BFD9] h-[5vh]'>
        <div className='flex font-medium  h-full items-center justify-center selection:not-sr-only text-black text-2xl'>
          &copy; Concretera Mistercon SAC-2024
        </div>
      </footer>
    </div>
    </>
  )
}
