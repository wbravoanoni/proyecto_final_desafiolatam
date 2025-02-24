import React from "react";
import errorImage from "../assets/images/ErrorPage404-03.jpg"; 

const Bloque404 = () => {
  return (
    <div
      style={{
        width: "97vw",
        height: "100vh",
        backgroundImage: `url(${errorImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default Bloque404;
