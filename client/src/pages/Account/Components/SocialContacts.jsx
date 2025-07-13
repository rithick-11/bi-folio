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
import { socialMediaPlatforms } from "../../../utils/data";
import index from "..";

const SocialContacts = () => {
  const { userData } = useAccountStore();
  const [edit, setEdit] = useState(false);

  return (
    <Card className="">
      <h1 className="text-sm mb-3 text-blue-500">Social Contacts</h1>
      <ul className="space-y-3 mb-4 flex items-center gap-1">
        {socialMediaPlatforms.map((socail, index) => (
          <li className="flex">
            <img className="h-8 " src={socail.logoUrl} alt={socail.name} />
          </li>
        ))}
      </ul>
      <SaveEdit edit={edit} setEdit={setEdit} />
    </Card>
  );
};

export default SocialContacts;
