import React from "react";
import Image from "next/image";
import image from "@/Assets/Image/image";

export default function NotFound() {
  return (
    <div className="p-20">
      <div>
        <Image
          src={image.notFound}
          alt="Error 404"
          width={300}
          height={300}
          className="mx-auto"
        />
      </div>
      <div className="text-center">
        <h1 className="text-center">404 Not Found</h1>
        <p className="text-center">
          The page you're looking for doesn't exist.
        </p>
        <a href="/">Go to Homepage</a>{" "}
      </div>
    </div>
  );
}
