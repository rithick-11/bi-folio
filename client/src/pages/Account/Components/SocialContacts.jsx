import React, { useState } from "react";
import useAccountStore from "../../../store/useAccountStore";
import {
  FaPen,
  FaPenAlt,
  FaPencilAlt,
  FaPenNib,
  FaPenSquare,
  FaSave,
} from "react-icons/fa";
import Card from "./Card";
import SaveEdit from "./SaveEdit";

const SocialContacts = () => {
  const { userData } = useAccountStore();
  const [edit, setEdit] = useState(false);
  return (
    <Card className="">
      <h1 className="text-sm mb-3 text-blue-500">Social Contacts</h1>
      <ul className="space-y-3 mb-4">
        {userData.contacts.map((social, index) => (
          <li key={index} className="flex items-end gap-1.5">
            <social.icon className="text-3xl text-gray-950" />
            <input
              type="url"
              className={`${
                edit && "border-b"
              } w-full font-extralight py-1 focus:outline-none`}
              disabled={!edit}
              value={social.url}
            />
          </li>
        ))}
      </ul>
      <SaveEdit edit={edit} setEdit={setEdit} />
    </Card>
  );
};

export default SocialContacts;
