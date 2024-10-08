import Information from "@/components/LandingPage/Information";
import NavBar from "@/components/NavBar";
import image from '@/Image/image';

export default function MyCarousel() {
  return (
    <div>
      <NavBar />

      <div className=" flex px-32 py-96 ">
        <Information
          nama="Visi"
          deskripsi="Menjadi wadah kesatuan organisasi mahasiswa Sistem Informasi seluruh Indonesia yang bertujuan untuk melahirkan mahasiswa Sistem Informasi yang berwawasan IPTEK dan IMTAQ serta profesional dibidangnya."
        />
        <Information
          nama="Misi"
          deskripsi="Menjadi wadah kesatuan organisasi mahasiswa Sistem Informasi seluruh Indonesia yang bertujuan untuk melahirkan mahasiswa Sistem Informasi yang berwawasan IPTEK dan IMTAQ serta profesional dibidangnya."
        />
      </div>
    </div>
  );
}
