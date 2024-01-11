import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'

import i1 from './assets/106520-OMXAGH-484.jpg';
import i2 from './assets/107484-OOJQFX-285.jpg';
import i3 from './assets/2122928.jpg';
import i4 from './assets/2135684.jpg';
import i5 from './assets/37.jpg';
import { Carousel } from './components/Carousel';

export const App = () => {
  const images1 = [
    {
      original: i1,
      thumbnail: i1,
      originalHeight: 300,
      originalWidth: 300
    },
    {
      original: i2,
      thumbnail: i2,
      originalHeight: 300,
      originalWidth: 300
    },
    {
      original: i3,
      thumbnail: i3,
      originalHeight: 300,
      originalWidth: 300
    },
    {
      original: i4,
      thumbnail: i4,
      originalHeight: 300,
      originalWidth: 300
    },
    {
      original: i5,
      thumbnail: i5,
      originalHeight: 300,
      originalWidth: 300
    }
  ]

  const images2 = [
    ['', i1], [i2, i3], [i4, i5], [i5, '']
  ]


  return (
    <>
    {/* Forma 1 */}
    <div className='w-[40vw] m-auto'>
      <ImageGallery 
        items={images1} 
        infinite={false} 
      />
    </div> 

    {/* <div>
      <ImageGallery items={images}/>
    </div>}

    {/* Forma 2 */}
    <main className='flex justify-center items-center min-h-screen'>
      <div className='h-[500px] w-[500px]'>
        <Carousel autoSlide={false} >            
        {images2.map(i => {
          if (i[0] == '') {
            return <img className='h-full object-cover col-span-2 w-full' src={i[1]} />          
          }
          if (i[1] == '') {
            return <img className='h-full object-cover col-span-2 w-full' src={i[0]} />          
          }
          return <>
            <img className='h-full object-cover w-full' src={i[0]} />          
            <img className='h-full object-cover w-full' src={i[1]} />                  
          </>                   
      })}                         
            </Carousel>
            </div>
          </main>

    {/* Forma 3 */}
    {/* <main className='flex justify-center items-center min-h-screen'>
      <div className='h-[500px] w-[500px]'>
        {images.map(i => {
          if (i[0] == '' || i[1] == '') {
            return <img className='h-full object-cover col-span-2 w-full' src={i[1]} />          
          }
          return <>
            <img className='h-full object-cover w-full' src={i[0]} />          
            <img className='h-full object-cover w-full' src={i[1]} />                  
          </>
          
         
      })}
      </div>
    </main> */}

    {/* Forma 4 */}
    <section className=' flex justify-center h-screen items-center bg-linear'>
      <div className='flex'>

        <input type="checkbox" id='c1' />
        <input type="checkbox" id='c2' />
        <input type="checkbox" id='c3' />

        <figure className='h-[600px] w-[550px]'>
          {/* <img src={i1} className='h-full w-full' /> */}
        </figure>

        <div className='flip-book'>            
          <article className="text-black absolute top-0 left-0 origin-left transform-style-3d rotate-y-0 duration-[0.5s] h-full w-full" id="p1">
              <div className="absolute w-full h-full top-0 left-0 rotate-y-180 z-[99] backface-hidden rounded-l-xl bg-black">
                <img src={i2} className='h-full w-full rounded-l-xl' />
                <label className="absolute bottom-3 right-3 cursor-pointer text-white" htmlFor="c1">Back</label>
              </div>
              <div className="absolute w-full h-full top-0 left-0 z-50  box-border shadow-[inset 20px 0 50px rgba(0,0,0,0.5) 0 2px 5px rgba(0,0,0,.5)] bg-white rounded-r-xl">
                <img src={i1} className='h-full w-full rounded-r-xl'/>            
                <label className="absolute bottom-3 right-3 cursor-pointer text-black" htmlFor="c1">Next</label>
              </div>
            </article>

          <article className="text-black absolute top-0 left-0 origin-left transform-style-3d rotate-y-0 duration-[0.5s]  h-full w-full" id="p2">
              <div className="absolute w-full h-full top-0 left-0 rotate-y-180 z-[99] backface-hidden rounded-l-xl bg-black">
                <img src={i4} className='h-full w-full rounded-l-xl'/>
                <label className="absolute bottom-3 right-3 cursor-pointer text-white" htmlFor="c2">Back</label>
              </div>
              <div className="absolute w-full h-full top-0 left-0 z-50  box-border shadow-[inset 20px 0 50px rgba(0,0,0,0.5) 0 2px 5px rgba(0,0,0,.5)] bg-white rounded-r-xl">
                <img src={i3} className='h-full w-full rounded-r-xl'/>            
                <label className="absolute bottom-3 right-3 cursor-pointer text-black" htmlFor="c2">Next</label>
              </div>
            </article>
            

            <div className="text-black absolute top-0 left-0 origin-left transform-style-3d rotate-y-0 duration-[0.5s]  h-full w-full" id="p3">
              <div className="flex items-center justify-center absolute w-full h-full top-0 left-0 rotate-y-180 z-[99] backface-hidden bg-red-500 rounded-l-xl">
                <h1 className='font-bold text-6xl'>Fin</h1>
                <label className="absolute bottom-3 right-3 cursor-pointer text-white" htmlFor="c3">Back</label>
              </div>
              <div className="absolute w-full h-full top-0 left-0 z-50  box-border shadow-[inset 20px 0 50px rgba(0,0,0,0.5) 0 2px 5px rgba(0,0,0,.5)] bg-white rounded-r-xl">
                <img src={i5} className='h-full w-full rounded-r-xl'/>  
                <label className="absolute bottom-3 right-3 cursor-pointer text-black" htmlFor="c3">Next</label>
              </div>
            </div>
        </div>
      </div>
    </section>

    <section className='bg-[#e0e4ee] flex items-center justify-center min-h-screen perspective-[100000px]'>      
     <div className='flex items-center justify-center'> 
        <article className='absolute bg-[#353755] h-[300px] w-[260px] transition-all duration-[3s] rounded-[2px_20px_20px_2px] rotate-x-[10deg] z-[1] origin-[center_left] hover:rotate-x-[10deg] hover:rotate-y-[-180dg]'></article>
        <article className='page hover:duration-[6s]'></article>
        <article className='page hover:duration-[5.6s]'></article>
        <article className='page hover:duration-[5.2s]'></article>
        <article className='page hover:duration-[4.8s]'></article>
        <article className='page hover:duration-[4.4s] z-[-1]'>
          <img src={i1} alt="" className='w-[150px] block rounded-[50%] my-5 mx-auto relative'/>          
          <h2 className='fonttext-center'>CodeMartin</h2>
        </article>
        <article className='absolute bg-[#353755] h-[300px] w-[260px] rounded-[2px_20px_20px_2px] shadow-[1px_1px_10px_gray] rotate-x-[10deg] z-[-2] origin-[center_left]'></article>
     </div>      
    </section>
    </>
  )
}
