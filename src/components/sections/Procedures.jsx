import React from "react";

import Titles from "../titles/Titles";

import Image from "next/image";
import producer1 from "../../../public/images/extra_procedures_etc/1.jpg";
import producer2 from "../../../public/images/extra_procedures_etc/2.jpg";
import producer3 from "../../../public/images/extra_procedures_etc/3.jpg";
import CardTitles from "../titles/CardTitles";
import GrayBtn from "../buttons/GrayBtn";

const Procedures = () => {
  return (
    <section className="wrapper mb-20">
      <Titles
        title="Popular Procedures"
        text="To doesn't his appear replenish together called he of mad place won't wherein blessed second every wherein were meat kind wherein and martcin"
      />
      <div className="grid grid-cols-3 gap-5">
        {card.map((event) => (
          <div key={event.id} className="text-center border p-5">
            <Image src={event.src} alt="popular procedures"></Image>
            <CardTitles title={event.title} text={event.text} />
            <GrayBtn href="#" name={event.btn} />
          </div>
        ))}
      </div>
    </section>
  );
};
const card = [
  {
    id: 1,
    src: producer1,
    title: "Massage Theraphy",
    text: "Living winged said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place wich...",
    btn: "Read more",
  },
  {
    id: 2,
    src: producer2,
    title: "Beauty care",
    text: "Living winged said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place wich...",
    btn: "Read more",
  },
  {
    id: 3,
    src: producer3,
    title: "Executive Reflexology",
    text: "Living winged said you darkness you're divide gathered and bring one seasons face great dr Waters firmament place wich...",
    btn: "Read more",
  },
];

export default Procedures;
