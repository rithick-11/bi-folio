import React from "react";
import Title from "./Title";
import useAccountStore from "../../../store/useAccountStore";

const Skills = () => {
  const { userData: data } = useAccountStore();
  return (
    <section className="py-10">
      <Title>Skill's</Title>
      <ul className="grid grid-cols-6 gap-3 mt-10">
        {data.skillsList.map((skill, i) => (
          <li
            key={i}
            className="bg-white/90 shadow shadow-primary/30  flex flex-col gap-3 p-5 rounded-lg  text-center justify-center items-center content-center"
          >
            <img
              src={skill.iconUrl}
              alt={skill.name}
              className="h-14 aspect-square"
            />
            <p className="text-sm">{skill.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
