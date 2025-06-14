import React from "react";
import { FaPen, FaSave } from "react-icons/fa";

const SaveEdit = ({ edit, setEdit }) => {
  return (
    <>
      {edit ? (
        <button className="bg-green-500 ml-auto btn-secondary">
          <FaSave /> save
        </button>
      ) : (
        <button
          className="bg-blue-500 ml-auto btn-secondary"
          onClick={() => setEdit(true)}
        >
          <FaPen /> Edit
        </button>
      )}
    </>
  );
};

export default SaveEdit;
