import React, { use } from "react";
import useAccountStore from "../../../store/useAccountStore";
import { FaEdit, FaExchangeAlt, FaPen } from "react-icons/fa";
import Card from "./Card";

const Profile = () => {
  const { userData } = useAccountStore();
  console.log(userData);

  return (
    <Card>
      <h1 className="text-sm text-blue-500">Profile</h1>
      <div className="flex gap-10 items-center mt-10">
        <div className="relative">
          <img
            className="rounded-full h-36 aspect-square"
            src={userData.imgUrl}
            alt={userData.name}
          />
          <button className="absolute bottom-0 right-0 shadow cursor-pointer bg-gray-100 p-1 rounded-full h-8 w-8 text-blue-400 flex justify-center items-center">
            <FaPen />
          </button>
        </div>
        <p className="text-lg">{userData.name}</p>
      </div>
    </Card>
  );
};

export default Profile;
