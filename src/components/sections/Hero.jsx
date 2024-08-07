"use client";

import React, { useEffect, useState } from "react";

import Video from "../Video";

import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/logo.png";
import heroImg from "../../../public/images/spa.png";
import leaf from "../../../public/images/leaf.png";

import useRequestData from "@/hooks/useRequestData";


import { MdOutlinePlayArrow } from "react-icons/md";

const Hero = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  const [video, setVideo] = useState(false);

  useEffect(() => {
    makeRequest("http://localhost:5029/hero/", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  const filteredData = data.filter((item) => item.show);

  return (
    <header className="wrapper h-screen">
      <nav className="flex justify-between max-w-2xl">
        <Image src={logo} alt="leospa logo" className="w-24"></Image>
        <ul className="flex items-end gap-5">
          {links.map((event, index) => (
            <li key={index}>
              <Link
                href={event.href}
                className="uppercase hover:text-accent transition"
              >
                {event.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <Image src={leaf} alt="leaf" className="absolute left-0 top-32 -z-10"></Image>
      <Image
        src={heroImg}
        alt="leospa hero picture"
        className="absolute top-0 right-0 -z-10"
      ></Image>
      <div className="max-w-lg mt-40">
        {filteredData.map((item) => (
          <div key={item._id} className="">
            <p className="text-accent uppercase">{item.title1}</p>
            <h1 className="text-5xl my-6">{item.title2}.</h1>
            <p className="text-secondary">{item.content}</p>
            <div className="flex gap-5 mt-10">
              <Link
                href="#contact"
                className="uppercase bg-accent text-whitetxt hover:text-primary transition px-5 py-2"
              >
                reserve now
              </Link>
              <Link
                href=""
                className="flex items-center gap-2 text-secondary hover:text-accent transition"
                onClick={() => setVideo(true)}
              >
                <span className="flex justify-center items-center bg-accent/30 rounded-full w-9 h-9">
                  <MdOutlinePlayArrow className="text-xl text-accent" />
                </span>{" "}
                Watch our story
              </Link>
            </div>
            {video && <Video close={() => setVideo(false)} />}
          </div>
        ))}
      </div>
    </header>
  );
};

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "feature",
    href: "#feature",
  },
  {
    name: "service",
    href: "#service",
  },
  {
    name: "contact",
    href: "#contact",
  },
];

export default Hero;
