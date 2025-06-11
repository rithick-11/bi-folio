import React from "react";
import { TypeAnimation } from "react-type-animation";
import { data } from "../../../utils/data";

const Home = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
      <img
        className="w-2xs md:w-xs aspect-square rounded-2xl"
        src={data.imgUrl}
        alt={data.name}
      />
      <div className="text-center md:text-left">
        <p className="text-lg">Hello everyone am </p>
        <h1 className="text-4xl font-semibold">{data.name}</h1>
        <p className="font-extralight text-2xl mt-2">
          <TypeAnimation
            sequence={data.labelSkills}
            wrapper="p"
            speed={10}
            deletionSpeed={100}
            repeat={Infinity}
          />
        </p>
        <ul className="flex gap-4 mt-10">
          {data.contacts.map((contact, index) => (
            <a href={contact.url} key={index} className="block p-2 mt-3.5 rounded-full cursor-pointer bg-blue-300/20">
              <contact.icon className="text-2xl text-amber-950" />
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Home;
