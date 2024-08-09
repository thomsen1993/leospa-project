"use client";

import React, { useEffect, useState } from "react";

import useRequestData from "@/hooks/useRequestData";
import Editer from "../Editer";
import Add from "../Add";

const HeroAdmin = () => {
  const { data, isLoading, error, makeRequest } = useRequestData();

  const [editer, setEditer] = useState(null);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    makeRequest("http://localhost:5029/hero/", "GET", null);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  return (
    <section className="my-10">
      <h2>Hero settings</h2>
      <table className="border-2 border-green-700 mt-2">
        <thead>
          <tr className="uppercase bg-green-700 text-whitetxt sticky -top-1">
            <th>Select</th>
            <th>Title</th>
            <th>Subtitle</th>
            <th>Content</th>
            <th>YouTube Link</th>
          </tr>
        </thead>
        <tbody>
          {data.map((event) => (
            <tr
              key={event._id}
              className="odd:bg-emerald-300/20 even:bg-green-500/20 hover:bg-green-300/50 cursor-pointer"
              onClick={() => setEditer(event)}
            >
              <td>
                <input type="checkbox" checked={event.show} />
              </td>
              <td>{event.title1}</td>
              <td>{event.title2}</td>
              <td>{event.content}</td>
              <td>{event.link}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="border-x-2 border-b-2 border-green-700 text-xl text-center w-full hover:bg-green-300/50"
        onClick={() => setAdd(true)}
      >
        +
      </button>
      {editer && <Editer data={editer} setEditer={setEditer} />}
      {add && <Add />}
    </section>
  );
};

export default HeroAdmin;
