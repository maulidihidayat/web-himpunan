import React from "react";
import Image from "next/image";
import image from "@/Assets/Image/image";

const index = () => {
  return (
    <div>
      <Image
        src={image.gambar2}
        alt="My cool image"
        width={3416}
        height={1282.6}
      />
    </div>
  );
};

export default index;
