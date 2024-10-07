import NavBar from "@/components/NavBar";
import gambar2 from "@/components/Image/MacBook Air - 6.png";
import gambar3 from "@/components/Image/MacBook Air - 7.png";
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
      <Carousel className="my-carousel ">
        <CarouselContent>
          <CarouselItem>
            <img
              src="https://www.itb.ac.id/files/headline/Artboard_1_copy_11zon_(1).jpg"
              alt=""
            />
          </CarouselItem>

          {/* Carousel Slide 2 */}
          <CarouselItem>
            <img
              src="https://www.itb.ac.id/files/headline/1723017453-Screenshot-2024-08-07-145241.jpg"
              alt=""
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
