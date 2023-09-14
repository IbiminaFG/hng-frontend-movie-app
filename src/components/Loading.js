import React from "react";
import loading from "../assets/loading.gif";

const Loading = () => {
  return (
    <div className="loading flex justify-center items-center">
      <img src={loading} alt="Loading..." />
    </div>
  );
};

export default Loading;
