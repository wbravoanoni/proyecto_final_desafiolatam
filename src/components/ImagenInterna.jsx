import React from "react";
import { useParams } from "react-router-dom";
import hombreImage from "../assets/images/ai-generated-8266779_1280.png";
import mujerImage from "../assets/images/boxer-1984344_1280.jpg";
import equipamiento from "../assets/images/backpack-2842083_1280.jpg";
import calzado from "../assets/images/fashion-5515135_1280.jpg";
import ofertas from "../assets/images/ducks-5830895_1280.jpg";
import defaultImage from "../assets/images/ai-generated-8266779_1280.png";



const ImagenInterna = () => {
  const { categoriaId } = useParams();

  return (
    <div>
      <img
        src={
          categoriaId === "hombre"
            ? hombreImage
            : categoriaId === "mujer"
            ? mujerImage
            : categoriaId === "equipamiento"
            ? equipamiento
            : categoriaId === "calzado"
            ? calzado
            : categoriaId === "ofertas"
            ? ofertas
            : defaultImage
        }
        alt={`Imagen de ${categoriaId}`}
        className="img-fluid"
        style={{ width: "1200px", height: "600px", objectFit: "cover" }} // Personalización del alto 
      />
    </div>
  );
};

export default ImagenInterna;
