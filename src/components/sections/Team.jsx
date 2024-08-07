"use client";

import React, { useEffect } from "react";

import useRequestData from "@/hooks/useRequestData";
import Titles from "../titles/Titles";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";

const Team = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5029/team/", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;
  return (
    <section className="wrapper my-20">
      <Titles
        title="Experienced Team"
        text="To doesn't his appear replenish together called he of mad place won't wherein blesses second every wherein were meat kind wherein and martcin"
      />
      <div className="grid grid-cols-3 gap-10">
        {data.map((event) => (
          <div key={event._id} className="grid items-end group mb-20">
            <img
              src={`http://localhost:5029/images/team/${event.image}`}
              alt={event.firstname}
              className="col-start-1 row-start-1 h-full object-cover"
            />
            <div className="col-start-1 row-start-1 text-center shadow-lg bg-white p-5 mx-10 -mb-14">
              <p className="text-xl">
                {event.firstname} {event.lastname}
              </p>
              <p className="text-secondary">{event.role}</p>
              <div className="group-hover:flex justify-center gap-5 text-xl hidden my-2">
                {icons.map((i, index) => (
                    <a href="#" key={index} className="border border-primary rounded-full p-2">
                        {i.name}
                    </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const icons = [
  {
    name: <FaFacebookF/>,
  },
  {
    name: <FaTwitter/>,
  },
  {
    name: <TiSocialGooglePlus/>,
  },
  {
    name: <FaInstagram/>,
  },
];

export default Team;
