import React from "react";

const Card = ({ children, className }) => {
  return <div className={`bg-white/50 px-4 py-3 shadow rounded-lg ${className}`}>{children}</div>;
};

export default Card;
