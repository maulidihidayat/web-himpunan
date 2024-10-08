import NavBar from "@/components/NavBar";
import gambar2 from "@/components/Image/widgets/gambar1.png";
import gambar3 from "@/components/Image/widgets/gambar2.png";
import gambar4 from "@/components/Image/widgets/gamabr4.png";


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function MyCarousel() {
  return (
    <div>
      <NavBar />
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
            src={gambar4}
            alt=""
            width={1708}
            height={641.3}
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
  );
}
