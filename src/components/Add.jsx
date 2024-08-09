import React from "react";

import useRequestData from "@/hooks/useRequestData";

const Add = () => {
  const { makeRequest } = useRequestData();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      makeRequest("http://localhost:5029/hero/admin/", "POST", formData);
      alert("Successfull!");
      window.location.reload();
    } catch (err) {
      console.error("Failed to add the content:", err);
      alert("Failed.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="my-4 p-4 border-2 border-green-700 bg-emerald-50"
    >
      <h3>Add new hero</h3>
      {form.map((event, index) => (
        <input
          type={event.type}
          name={event.name}
          placeholder={event.placeholder}
          required
          className="w-full bg-emerald-300 my-2 p-2"
        />
      ))}
      <textarea
        name="content"
        required
        placeholder="Text"
        className="bg-emerald-300 w-full p-2"
      ></textarea>
      <button
        type="submit"
        className="px-4 py-2 bg-green-700 text-white rounded"
      >
        Save
      </button>
    </form>
  );
};
const form = [
  {
    type: "text",
    name: "title1",
    placeholder: "Small title",
  },
  {
    type: "text",
    name: "title2",
    placeholder: "Title",
  },
  {
    type: "text",
    name: "link",
    placeholder: "YouTube link",
  },
];

export default Add;
