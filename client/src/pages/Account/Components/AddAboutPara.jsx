import React, { useState } from "react";
import Card from "./Card";
import { BsDatabaseSlash } from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import useAccountStore from "../../../store/useAccountStore";
import { FaSave } from "react-icons/fa";


const AddAboutPara = () => {
  const { userData, addAboutPara, deleteAboutPara } = useAccountStore();
  const [input, setInput] = useState("dasdas");
  const [save, setSave] = useState(false);

  const { about } = userData;
  return (
    <Card>
      <h1 className="text-blue-500 text-sm">About Me</h1>
      {about.length === 0 ? (
        <div className="flex flex-col mt-5 text-sm items-center justify-center">
          <BsDatabaseSlash className="text-5xl" />
          <p className="mt-3">There is no about line</p>
          <p className="font-extralight">add about line</p>
        </div>
      ) : (
        <ul className="flex mt-3 gap-3">
          {about.map((item, index) => (
            <li
              className="flex gap-2 items-center bg-gray-300/50 text-sm p-1 rounded"
              key={index}
            >
              <p>{item}</p>
              <button
                className="cursor-pointer"
                onClick={() => {
                  deleteAboutPara(index);
                  setSave(true);
                }}
              >
                <MdCancel />
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="flex mt-2 justify-between">
        <div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="border-b focus:outline-none test-sm font-extralight"
          />
          <button
            className="text-sm bg-gray-900/30 px-2 py-1 cursor-pointer rounded ml-2 focus:ring-0"
            onClick={() => {
              addAboutPara(input);
              setInput("");
              setSave(true);
            }}
          >
            add tag
          </button>
        </div>
        {save && (
          <button className="btn-secondary bg-green-500">
            <FaSave />
            save
          </button>
        )}
      </div>
    </Card>
  );
};

export default AddAboutPara;
