import React from "react";

const Logo = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        className="h-30 aspect-square rounded-full"
        src="https://res.cloudinary.com/dwpmsw2i4/image/upload/v1741399545/bifolio-logo_mn9enz.png"
        alt="logo 2"
      />
      <h1 className="text-2xl font-black">BiFolio</h1>
    </div>
  );
};

export default Logo;
