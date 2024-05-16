import React from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <button
      className="text-[#7469B6] font-semibold border-white border-2 bg-white hover:bg-transparent hover:border-white hover:text-white px-4 py-2 rounded-md mr-4 mb-4"
      onClick={handleClick}
    >
      {" "}
      Return{" "}
    </button>
  );
};  

export default BackButton;
