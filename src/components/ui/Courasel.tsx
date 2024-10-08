import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './carousel'
import gambar2 from "./../../image/widgets/gambar1.png";
import gambar3 from "./../../image/widgets/gambar2.png";
import gambar4 from "./../../image/widgets/gamabr4.png";
import Image from 'next/image';




const Courasel = () => {
  return (
    <div>
        <Carousel className="my-carousel overflow-x-hidden ">
        <CarouselContent>

          {/* Carousel Slide 2 */}
          <CarouselItem>
            <img
              src="https://www.itb.ac.id/files/headline/Artboard_1_copy_11zon_(1).jpg"
              alt=""
            />
          </CarouselItem>
          
          <CarouselItem>
            <Image
            src={gambar2}
            alt=""
            width={1708}
            height={641.3}
            />

          </CarouselItem>


          <CarouselItem>
            <Image
            src={gambar4}
            alt=""
            width={1708}
            height={641.3}
            />

          </CarouselItem>


          <CarouselItem>
           <Image
            src={gambar3}
            alt=""
            width={1708}
            height={641.3}
            />

          </CarouselItem>

          {/* Carousel Slide 3 */}
          <CarouselItem>
            <img
              src="https://www.itb.ac.id/files/headline/IND_(1)1.jpg"
              alt=""
            />
          </CarouselItem>
        </CarouselContent>

        {/* Tombol Navigasi */}
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Courasel