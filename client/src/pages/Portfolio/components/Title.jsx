import React from "react";

const Title = ({ children }) => {
  return (
    <div className="flex justify-center flex-col items-center">
      <p className="text-2xl md:text-3xl font-bold text-primary/90">{children} </p>
      <div className="border w-20 mt-2 border-primary/90"></div>
    </div>
  );
};

export default Title;
