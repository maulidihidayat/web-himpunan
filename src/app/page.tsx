import Devision from "@/app/components/LandingPage/Devision";
import Information from "@/app/components/LandingPage/Information";
import YoutubeSection from "@/app/components/LandingPage/YoutubeSection";


export default function MyCarousel() {
  return (
    <div>
      
      <div className="flex flex-col items-center px-8 py-48  bg-customDarkenBlue text-white">
        <div className="relative flex flex-col space-x-4 bg-white  max-w-2xl  w-[888px] h-[198px] rounded-2xl py-8 shadow-lg"></div>

        <div className="flex flex-col  md:flex-row space-y-6 md:space-y-0 md:space-x-10  mt-10">
          <Information
            nama="Visi"
            deskripsi="Menjadi wadah kesatuan organisasi mahasiswa Sistem Informasi seluruh Indonesia yang bertujuan untuk melahirkan mahasiswa Sistem Informasi yang berwawasan IPTEK dan IMTAQ serta profesional dibidangnya."
          />
          <Information
            nama="Misi"
            deskripsi="Menjadi wadah kesatuan organisasi mahasiswa Sistem Informasi seluruh Indonesia yang bertujuan untuk melahirkan mahasiswa Sistem Informasi yang berwawasan IPTEK dan IMTAQ serta profesional dibidangnya."
          />
        </div>

        {/* ini untuk h1 */}

        <div className="absolute  justify-center bg-customGreen w-52 h-16 mt-[500px]">
          <h1 className="text-3xl text-center p-3">Our Devision</h1>
        </div>

        {/* end h1 */}

        <div className="flex  items-center space-x-3 px-8 py-96 text-white">
          <Devision
            title="Departemen yang bertugas untuk menjaga stabilitas dan meningkatkan kualitas akademik mahasiswa Sistem Informasi."
            description="Keagamaan"
            logo="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBvZGNhc3QiPjxwYXRoIGQ9Ik0xNi44NSAxOC41OGE5IDkgMCAxIDAtOS43IDAiLz48cGF0aCBkPSJNOCAxNGE1IDUgMCAxIDEgOCAwIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMSIgcj0iMSIvPjxwYXRoIGQ9Ik0xMyAxN2ExIDEgMCAxIDAtMiAwbC41IDQuNWEuNS41IDAgMSAwIDEgMFoiLz48L3N2Zz4="
          />
          <Devision
            title="Departemen yang bertugas untuk menjaga stabilitas dan meningkatkan kualitas akademik mahasiswa Sistem Informasi."
            description="Kewirausahaan"
            logo="/src/Image/widgets/logo.png"
          />
          <Devision
            title="Departemen yang bertugas untuk menjaga stabilitas dan meningkatkan kualitas akademik mahasiswa Sistem Informasi."
            description="Media"
            logo="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBvZGNhc3QiPjxwYXRoIGQ9Ik0xNi44NSAxOC41OGE5IDkgMCAxIDAtOS43IDAiLz48cGF0aCBkPSJNOCAxNGE1IDUgMCAxIDEgOCAwIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMSIgcj0iMSIvPjxwYXRoIGQ9Ik0xMyAxN2ExIDEgMCAxIDAtMiAwbC41IDQuNWEuNS41IDAgMSAwIDEgMFoiLz48L3N2Zz4="
          />
          <Devision
            title="Departemen yang bertugas untuk menjaga stabilitas dan meningkatkan kualitas akademik mahasiswa Sistem Informasi."
            description="Humas"
            logo="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBvZGNhc3QiPjxwYXRoIGQ9Ik0xNi44NSAxOC41OGE5IDkgMCAxIDAtOS43IDAiLz48cGF0aCBkPSJNOCAxNGE1IDUgMCAxIDEgOCAwIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMSIgcj0iMSIvPjxwYXRoIGQ9Ik0xMyAxN2ExIDEgMCAxIDAtMiAwbC41IDQuNWEuNS41IDAgMSAwIDEgMFoiLz48L3N2Zz4="
          />
        </div>
        <div className="text-center mb-40">
          <h1 className="text-5xl">Jargon Kami</h1>
          <p className="text-2xl">Berinovasi , Berkontribusi dan Berprestasi</p>
        </div>

        <div className="max-w-5xl gap-1  w-full grid grid-cols-3 p-8 ">
          <YoutubeSection description="Informatic Competition 2024 Diesnatalis Pendidikan Informatika" />
          <YoutubeSection description="Informatic Competition 2024 Diesnatalis Pendidikan Informatika" />
          <YoutubeSection description="Informatic Competition 2024 Diesnatalis Pendidikan Informatika" />
          <YoutubeSection description="Informatic Competition 2024 Diesnatalis Pendidikan Informatika" />
          <YoutubeSection description="Informatic Competition 2024 Diesnatalis Pendidikan Informatika" />
          <YoutubeSection description="Informatic Competition 2024 Diesnatalis Pendidikan Informatika" />
        </div>
      </div>
    </div>
  );
}
