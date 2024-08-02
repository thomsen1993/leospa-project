"use client";

import React, { useEffect, useState } from "react";

import useRequestData from "@/hooks/useRequestData";

import Image from "next/image";
import quote from "../../../public/images/quote.png";

const Slider = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    makeRequest("http://localhost:5029/recommendation/", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-accent/20 py-20 relative">
      <Image src={quote} alt="quote" className="mx-auto" />
      <div className="wrapper flex overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {data.map((event, index) => (
            <div className="min-w-full text-center my-10" key={index}>
              <p>{event.content}</p>
              <img
                src={`http://localhost:5029/images/recommendation/${event.image}`}
                alt={event.title}
                className="mx-auto rounded-full my-10"
              />
              <p>
                {event.name},{" "}
                <span className="text-secondary text-sm">{event.title}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-1 mt-5">
        {data.map((_, index) => (
          <button
            key={index}
            className="w-2 h-2 rounded-full bg-accent"
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
