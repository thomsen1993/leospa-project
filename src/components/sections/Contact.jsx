"use client";

import React, { useEffect } from "react";
import useRequestData from "@/hooks/useRequestData";
import Image from "next/image";
import mainPic from "../../../public/images/appointment-img.jpg";

const Contact = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();
  const { makeRequest: postMakeRequest } = useRequestData();

  useEffect(() => {
    makeRequest("http://localhost:5029/treatment/", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);

    try {
      await postMakeRequest("http://localhost:5029/appointment/", "POST", formData);
      alert("Appointment made successfully!");
    } catch (err) {
      console.error("Failed to make appointment:", err);
      alert("Failed to make appointment.");
    }
  };

  return (
    <section className="grid grid-cols-2 items-center bg-bg my-10">
      <Image src={mainPic} alt=""></Image>
      <form className="max-w-xl" onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5 items-center">
          {form.map((event, index) => (
            <input
              key={index}
              type={event.type}
              name={event.name}
              placeholder={event.placeholder}
              required
              className="border-b-2 border-secondary/30 bg-transparent p-1"
            />
          ))}
          <select
            name="treatment"
            required
            className="col-start-1 row-start-2 border-b-2 border-secondary/30 bg-transparent p-1"
          >
            {data.map((event) => (
              <option key={event._id} value={event._id}>
                {event.title}
              </option>
            ))}
          </select>
          <textarea
            name="notes"
            placeholder="YOUR NOTES"
            className="col-span-2 border-b-2 border-secondary/30 bg-transparent my-3 p-1"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-accent rounded-full text-whitetxt text-sm uppercase hover:text-primary transition px-7 py-2"
        >
          make an appointment
        </button>
      </form>
    </section>
  );
};

const form = [
  {
    type: "text",
    name: "name",
    placeholder: "NAME",
  },
  {
    type: "text",
    name: "email",
    placeholder: "EMAIL ADDRESS",
  },
  {
    type: "tel",
    name: "phone",
    placeholder: "PHONE NUMBER",
  },
  {
    type: "date",
    name: "date",
    placeholder: "",
  },
  {
    type: "time",
    name: "time",
    placeholder: "",
  },
];

export default Contact;
