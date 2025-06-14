import React from "react";
import { Container } from "../../Components";
import Profile from "./Components/Profile";
import SocialContacts from "./Components/SocialContacts";
import ProfileTagLine from "./Components/ProfileTagLine";
import AddAboutPara from "./Components/AddAboutPara";
import AddEducation from "./Components/AddEducation";
import AddSkills from "./Components/AddSkills";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <section className="bg-gray-100 min-h-screen">
      <Container className="px-4 min-h-full space-y-5">
        <nav className="border-b py-2.5">
          <h1 className="text-2xl font-bold">Bifolio</h1>
          <Link to="/">My portfolio</Link>
        </nav>
        <Profile />
        <SocialContacts />
        <ProfileTagLine />
        <AddAboutPara />
        <AddEducation />
        <AddSkills />
      </Container>
    </section>
  );
};

export default index;
