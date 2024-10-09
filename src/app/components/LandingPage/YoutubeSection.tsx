import React from "react";

interface components {
  description: string;
}

const YoutubeSection = ({ description }: components) => {
  return (
    <div className="aspect-video">
      <iframe
        className="w-[288px] h-[288px]"
        src="https://youtu.be/Jig1hFU1s6c?si=SO4URwCiOSsvuaSs"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p className="text-xl">{description}</p>
    </div>
  );
};

export default YoutubeSection;
