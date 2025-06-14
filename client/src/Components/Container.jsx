import React from "react";

const Container = ({ children, className }) => {
  return (
    <div className={`w-[90%] mx-auto sm:w-xl md:w-3xl ${className}`}>
      {children}
    </div>
  );
};

export default Container;
