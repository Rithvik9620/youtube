import React from "react";

const Button = ({ text }) => {
  return (
    <div className="p-2 mx-2 bg-gray-800 text-sm hover:bg-gray-700 rounded-md shrink-0">
      {text}
    </div>
  );
};

export default Button;
