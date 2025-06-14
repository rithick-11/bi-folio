import React, { useState } from "react";
import Card from "./Card";
import useAccountStore from "../../../store/useAccountStore";
import { MdCancel } from "react-icons/md";
import { BsDatabaseSlash } from "react-icons/bs";

const AddEducationInput = ({ onCancel }) => {
  const { addEducation } = useAccountStore();

  const [education, setEducation] = useState({
    institustion: "",
    batch: "",
    grade: "",
    loacation: "",
    degeere: "",
  });

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEducation(education);
    onCancel();
    setEducation({
      institustion: "",
      batch: "",
      grade: "",
      loacation: "",
      degeere: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 mt-3">
      <label className="input-tag">
        School / Collage / University
        <input
          type="text"
          placeholder="eg: Mahendra engineering collage"
          name="institustion"
          value={education.institustion}
          onChange={onHandleChange}
          required
        />
      </label>
      <label className="input-tag">
        loaction
        <input
          type="text"
          placeholder="eg: Namakkal"
          name="loacation"
          value={education.location}
          onChange={onHandleChange}
          required
        />
      </label>
      <label className="input-tag">
        Brach / Degeere / Department
        <input
          type="text"
          placeholder="eg: B.E Cyber security"
          name="degeere"
          value={education.degeere}
          onChange={onHandleChange}
          required
        />
      </label>
      <label className="input-tag">
        Batch
        <input
          type="text"
          placeholder="eg: 2022 - 2026"
          name="batch"
          value={education.batch}
          onChange={onHandleChange}
          required
        />
      </label>
      <label className="input-tag">
        Grade / CGPA / Percentage %
        <input
          type="text"
          placeholder="eg: GCPA - 8.7"
          name="batch"
          value={education.batch}
          onChange={onHandleChange}
          required
        />
      </label>
      <div className="flex justify-end gap-3">
        <button
          type="button"
          className="flex items-center btn-secondary bg-red-400"
          onClick={onCancel}
        >
          Cancel
          <MdCancel className="text-lg" />
        </button>
        <button type="submit" className="btn-secondary bg-blue-500">
          Add Education
        </button>
      </div>
    </form>
  );
};

const AddEducation = () => {
  const { userData } = useAccountStore();
  const [show, setShow] = useState(false);
  const { education } = userData;
  return (
    <Card>
      <h1 className="text-sm text-blue-500">Education</h1>
      {education.length === 0 ? (
        <div className="flex flex-col mt-5 text-sm items-center justify-center">
          <BsDatabaseSlash className="text-5xl" />
          <p className="mt-3">There is no education yet</p>
          <p className="font-extralight underline">add education</p>
        </div>
      ) : (
        <ul className="space-y-3 mt-3">
          {education.map((item, index) => (
            <li
              className="text-sm align-baseline bg-gray-50 px-2 py-1 rounded"
              key={index}
            >
              <h1>
                {item.institustion}, {item.loacation}
              </h1>
              <p>
                {item.degeere} | {item.batch}
              </p>
              <p>{item.grade}</p>
              <div className="flex gap-2 justify-end ">
                <button className="text-sm underline cursor-pointer">
                  Edit
                </button>
                <button className="text-sm underline cursor-pointer">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {show ? (
        <AddEducationInput onCancel={() => setShow(false)} />
      ) : (
        <button
          className="btn-secondary bg-blue-500 ml-auto cursor-pointer"
          type="button"
          onClick={() => setShow(true)}
        >
          Add Education
        </button>
      )}
    </Card>
  );
};

export default AddEducation;
