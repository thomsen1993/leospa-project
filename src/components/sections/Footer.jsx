"use client";

import React, { useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";

import Link from "next/link";
import Image from "next/image";

import logo from "../../../public/images/logo.png";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";

const Footer = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5029/footer/", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  return (
    <footer className="flex flex-col items-center bg-bg py-20">
      <Image src={logo} alt="leospa logo"></Image>
      <ul className="flex items-end gap-5 my-8">
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
      <h3>{data.name}</h3>
      <p>{data.cvr}</p>
      <address>{data.address}</address>
      <p>{data.phone}</p>
      <p>{data.email}</p>
      <p>{data.openinghours}</p>
      <div className="flex gap-5 text-xl mt-10">
        {icons.map((i, index) => (
          <Link
            href="#"
            key={index}
            className="border-r border-black last:border-none pr-5"
          >
            {i.name}
          </Link>
        ))}
      </div>
      <p className="uppercase pt-10">
        &copy; copyright 2019 <span className="text-accent">themies.com</span>{" "}
        all rights reserved
      </p>
    </footer>
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

const icons = [
  {
    name: <FaFacebookF />,
  },
  {
    name: <FaTwitter />,
  },
  {
    name: <TiSocialGooglePlus />,
  },
  {
    name: <FaInstagram />,
  },
];
export default Footer;
