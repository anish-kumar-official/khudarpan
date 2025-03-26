"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import carauselImage from "../data/carauselImage.json";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [autoPlay, setAutoplay] = useState(true);

  const imageListLength = carauselImage.pictures.length;

  useEffect(() => {
    let intervalId;
    if (autoPlay) {
      intervalId = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageListLength);
      }, 5000);
    }
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [autoPlay, imageListLength]);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? imageListLength - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageListLength);
  };

  // Toggle autoplay function
  //   const toggleAutoPlay = () => {
  //     setAutoplay(!autoPlay);
  //   };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="buttonSection absolute inset-0 flex justify-between items-center z-10 p-4">
        <Button
          onClick={handlePrevImage}
          className="cursor-pointer hover:bg-gray-500"
        >
          <ChevronLeft />
        </Button>
        <Button
          onClick={handleNextImage}
          className="cursor-pointer hover:bg-gray-500"
        >
          <ChevronRight />
        </Button>
        {/* Add a button to toggle autoplay
        <Button
          onClick={toggleAutoPlay}
          className="cursor-pointer hover:bg-gray-500"
        >
          {autoPlay ? "Pause" : "Play"}
        </Button> */}
      </div>
      <div className="w-full h-full relative">
        {carauselImage.pictures.map((item, index) => (
          <div
            key={item.id}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={item.src}
              alt={`Carousel image ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
