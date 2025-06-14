import React from "react";
import Typewriter from "typewriter-effect";
import { data } from "../../../utils/data";
import useAccountStore from "../../../store/useAccountStore";

const Home = () => {

  const {userData: data} = useAccountStore()
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
      <img
        className="w-2xs md:w-xs aspect-square rounded-2xl"
        src={data.imgUrl}
        alt={data.name}
      />
      <div className="text-center md:text-left">
        <p className="text-lg font-light">Hello everyone am </p>
        <h1 className="text-4xl font-semibold">{data.name}</h1>
        <p className="font-medium text-lg mt-5">
          <Typewriter
            options={{
              strings: data.labelSkills,
              autoStart: true,
              loop: true, 
            }}
          />
        </p>
        <ul className="flex justify-center md:justify-normal gap-4 mt-10">
          {data.contacts.map((contact, index) => (
            <a
              href={contact.url}
              key={index}
              className="block p-2 mt-3.5 rounded-full cursor-pointer bg-blue-300/20"
            >
              <contact.icon className="text-2xl text-amber-950" />
            </a>
          ))}
        </ul>
        <div className="flex gap-4 mt-10">
          <button className="btn">Contact us</button>
          <button className="btn">Resume</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
