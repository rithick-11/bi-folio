import React, { use } from "react";
import Card from "./Card";
import useAccountStore from "../../../store/useAccountStore";
import { BsDatabaseSlash } from "react-icons/bs";

const ProfileTagLine = () => {
  const { userData } = useAccountStore();
  const { labelSkills } = userData;

  return (
    <Card>
      <h1 className="text-sm text-blue-500">Profile Tag Line</h1>
      {labelSkills.length === 0 ? (
        <div className="flex flex-col mt-5 text-sm items-center justify-center">
          <BsDatabaseSlash className="text-5xl" />
          <p>There is no profile tag line</p>
          <p className="font-extralight">add tag line</p>
        </div>
      ) : (
        <>assdasd</>
      )}
      <button className="bg-blue-500 btn-secondary" >Add tag</button>
    </Card>
  );
};

export default ProfileTagLine;
