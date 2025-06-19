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
    <section className="min-h-screen">
      <div className="fixed top-0 -z-10 h-full w-full bg-white">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]"></div>
      </div>
      <Container className="min-h-full space-y-5">
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
