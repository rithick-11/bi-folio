import React from "react";
import { Container } from "../../Components";
import useAccountStore from "../../store/useAccountStore";
import Profile from "./Components/Profile";
import SocialContacts from "./Components/SocialContacts";
import ProfileTagLine from "./Components/ProfileTagLine";

const index = () => {
  const { userData } = useAccountStore();
  return (
    <section className="bg-gray-100 min-h-screen">
      <Container className="px-4 min-h-full space-y-5">
        <nav className="border-b py-2.5">
          <h1 className="text-2xl font-bold">Bifolio</h1>
        </nav>
        <Profile />
        <SocialContacts />
        <ProfileTagLine />
      </Container>
    </section>
  );
};

export default index;
