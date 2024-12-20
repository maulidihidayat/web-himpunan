"use client";
import Image from "next/image";
import image from "@/Assets/Image/image";
import Link from "next/link";

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
        <h1 className="text-center text-xl font-bold text-customYellow">
          404 Not Found
        </h1>
        <p className="text-center mb-4 text-customYellow">
          The page you're looking for doesn't exist.
        </p>
        <Link
          href="/"
          className="p-2 mt-6  border-customYellow text-customYellow  border rounded-xl border-b-4 hover:border-b-[6px] "
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
}
