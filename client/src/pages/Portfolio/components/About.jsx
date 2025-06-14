import React from "react";
import Title from "./Title";
import useAccountStore from "../../../store/useAccountStore";

const About = () => {
  const { userData: data } = useAccountStore();
  return (
    <section className="py-20">
      <Title>About</Title>
      <div className="space-y-3  text-[1rem] md:text-lg mt-3">
        {data.about.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
      <h1 className="text-xl md:text-2xl mt-5 text-primary font-light">
        Educations
      </h1>

      <ul className="space-y-2 mt-2">
        {data.education.map((item, index) => (
          <li
            key={index}
            className="bg-white/70 px-4 py-6 shadow text-[1rem] md:text-lg rounded-md cursor-pointer"
          >
            <p className="font-semibold">
              {item.institustion}, {data.location}
            </p>
            <p className="font-light text-sm ms:text-[1rem]">{item.batch}</p>
            <p className="font-normal mt-1 text-sm ms:text-[1rem]">
              {item.branch}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default About;
