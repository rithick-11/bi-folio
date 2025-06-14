import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { create } from "zustand";

const useAccountStore = create((set, get) => ({
  userData: {
    name: "Rithick roshan",
    labelSkills: [],
    imgUrl:
      "https://www.bing.com/th/id/OIP.lkVN1WDlcV2jQCq-9LT7-wHaIJ?w=169&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    contacts: [
      {
        name: "insta",
        url: "https://www.instagram.com",
        icon: FaInstagram,
      },
      {
        name: "facebook",
        url: "https:",
        icon: FaFacebook,
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com",
        icon: FaLinkedin,
      },
    ],
    about: [],
    education: [],
    skillsList: [],
  },

  addTagLine: (tag) => {
    if (tag === "") return;
    set({
      userData: {
        ...get().userData,
        labelSkills: [...get().userData.labelSkills, tag],
      },
    });
    return;
  },

  deleteTagLine: (index) => {
    set({
      userData: {
        ...get().userData,
        labelSkills: get().userData.labelSkills.filter((_, i) => i !== index),
      },
    });
  },

  addAboutPara: (para) => {
    if (para === "") return;
    set({
      userData: {
        ...get().userData,
        about: [...get().userData.about, para],
      },
    });
    return;
  },

  deleteAboutPara: (index) => {
    set({
      userData: {
        ...get().userData,
        about: get().userData.about.filter((_, i) => i !== index),
      },
    });
  },

  addEducation: (education) => {
    set({
      userData: {
        ...get().userData,
        education: [...get().userData.education, education],
      },
    });
  },
}));

export default useAccountStore;
