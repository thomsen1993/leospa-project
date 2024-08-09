"use client";

import React, { useEffect, useState } from "react";

import useRequestData from "@/hooks/useRequestData";

const Editer = ({ data, setEditer }) => {
  const { isLoading, error, makeRequest } = useRequestData();
  const { makeRequest:delMakeRequest } = useRequestData();

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [content, setContent] = useState("");
  const [link, setLink] = useState("");

  useEffect(() => {
    if (data) {
      setTitle(data.title1);
      setSubtitle(data.title2);
      setContent(data.content);
      setLink(data.link);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      title1: title,
      title2: subtitle,
      content: content,
      link: link,
    };
    makeRequest(
      `http://localhost:5029/hero/admin/${data._id}`,
      "PUT",
      formData
    );
    setEditer(null);
    window.location.reload();
  };

  const handleDelete = () => {
    const confirmed = window.confirm("Are you sure you want to delete this item? This action cannot be undone.");

    if (confirmed) {
      delMakeRequest(`http://localhost:5029/hero/admin/${data._id}`, "DELETE");
      window.location.reload();
    }
    
  }

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error... 😒</p>;
  if (!data) return null;

  return (
    <form
      onSubmit={handleSubmit}
      className="my-4 p-4 border-2 border-green-700 bg-emerald-50"
    >
      <h3>Edit</h3>
      <input
        type="text"
        name="title1"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full bg-emerald-300 p-2"
      />
      <input
        type="text"
        name="title2"
        value={subtitle}
        onChange={(e) => setSubtitle(e.target.value)}
        required
        className="w-full bg-emerald-300 my-2 p-2"
      />
      <textarea
        name="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="bg-emerald-300 w-full p-2"
      ></textarea>
      <input
        type="text"
        name="link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        required
        className="w-full bg-emerald-300 my-2 p-2"
      />
      <div className="flex justify-end gap-2">
        <button
          type="submit"
          className="px-4 py-2 bg-green-700 text-white rounded"
        >
          Save
        </button>
        <button
          className="px-4 py-2 bg-red-700 text-white rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </form>
  );
};

export default Editer;
