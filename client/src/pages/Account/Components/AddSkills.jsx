import React, { use, useState } from "react";
import Card from "./Card";
import useAccountStore from "../../../store/useAccountStore";
import { BsDatabaseSlash } from "react-icons/bs";
import { data } from "../../../utils/data";
import { MdCancel, MdSearch } from "react-icons/md";

const AddSkillsInput = ({ onCancel }) => {
  const { onAddSkills } = useAccountStore();
  const [skills, setSkills] = useState(data.skillsList);
  const [search, setSearch] = useState("");

  const onSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
    setSkills(
      data.skillsList.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      )
    );
  };
  return (
    <div className="shadow rounded">
      <div className="flex gap-2 px-2 py-4 border-b items-center">
        <MdSearch className="text-2xl" />
        <input
          type="text"
          placeholder="Search"
          value={search}
          className="w-full focus:outline-none"
          onChange={onSearch}
        />
      </div>
      <ul className="max-h-[40vh] overflow-y-scroll">
        {skills.map((item, index) => (
          <li
            key={index}
            className="flex items-center text-sm"
            onClick={() => onAddSkills(item)}
          >
            <img
              src={item.iconUrl}
              alt={item.name}
              className="h-12 aspect-square px-2"
            />
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
      <button
        className="btn-secondary flex items-center bg-gray-600 mt-2"
        onClick={onCancel}
      >
        cancel <MdCancel className="text-lg" />
      </button>
    </div>
  );
};

const AddSkills = () => {
  const { userData , onDeleteSkill} = useAccountStore();
  const [show, setShow] = useState(false);
  const { skillsList } = userData;
  return (
    <Card>
      <h1 className="text-sm text-blue-500">Skills</h1>
      {skillsList.length === 0 ? (
        <div className="flex flex-col mt-5 text-sm items-center justify-center">
          <BsDatabaseSlash className="text-5xl" />
          <p className="mt-3">There is no skills yet</p>
          <p className="font-extralight underline">add skills</p>
        </div>
      ) : (
        <ul className="space-y-3 mt-3">
          {skillsList.map((item, index) => (
            <li
              className="text-sm align-baseline flex items-center gap-1 bg-gray-50 px-2 py-1 rounded"
              key={index}
            >
              <img src={item.iconUrl} alt={item.name} className="h-8" />
              <p>{item.name}</p>
              <button
                className="ml-auto cursor-pointer"
                onClick={() => onDeleteSkill(item.id)}
              >
                <MdCancel className="text-lg" />
              </button>
            </li>
          ))}
        </ul>
      )}
      {show ? (
        <AddSkillsInput onCancel={() => setShow(false)} />
      ) : (
        <button
          className="btn-secondary bg-blue-500  cursor-pointer"
          type="button"
          onClick={() => setShow(true)}
        >
          Add Skills
        </button>
      )}
    </Card>
  );
};

export default AddSkills;
