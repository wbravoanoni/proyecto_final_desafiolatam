import React from "react";
import { useParams } from "react-router-dom";

const Productos = () => {

    const { categoriaId } = useParams();

  const cardsData = [
    {
      id: 1,
      image: "https://cdn.pixabay.com/photo/2023/04/17/10/31/tennis-7932067_640.jpg",
      text: "Una familia disfrutando de la naturaleza en verano.",
      precio : 13000,
      descuento: 10,
      categoria: 'hombre',
    },
    {
      id: 2,
      image: "https://cdn.pixabay.com/photo/2023/04/17/10/31/tennis-7932067_640.jpg",
      text: "Senderismo en las montañas al atardecer.",
      precio : 13000,
      descuento: 0,
      categoria: 'hombre',
    },
    {
      id: 3,
      image: "https://cdn.pixabay.com/photo/2023/04/17/10/31/tennis-7932067_640.jpg",
      text: "Grupo de excursionistas disfrutando del aire libre.",
      precio : 13000,
      descuento: 0,
      categoria: 'hombre',
    },
    {
      id: 4,
      image: "https://cdn.pixabay.com/photo/2023/04/17/10/31/tennis-7932067_640.jpg",
      text: "Explorando la naturaleza con mochilas listas.",
      precio : 13000,
      descuento: 0,
      categoria: 'hombre',
    },
    {
      id: 5,
      image: "https://cdn.pixabay.com/photo/2023/04/17/10/31/tennis-7932067_640.jpg",
      text: "Explorando la naturaleza con mochilas listas.",
      precio : 13000,
      descuento: 0,
      categoria: 'hombre',
    },
    {
      id: 6,
      image: "https://cdn.pixabay.com/photo/2023/04/17/10/31/tennis-7932067_640.jpg",
      text: "Explorando la naturaleza con mochilas listas.",
      precio : 13000,
      descuento: 0,
      categoria: 'hombre',
    },
    {
      id: 7,
      image: "https://cdn.pixabay.com/photo/2023/04/17/10/31/tennis-7932067_640.jpg",
      text: "Explorando la naturaleza con mochilas listas.",
      precio : 13000,
      descuento: 0,
      categoria: 'hombre',
    },
    {
      id: 8,
      image: "https://cdn.pixabay.com/photo/2023/04/17/10/31/tennis-7932067_640.jpg",
      text: "Explorando la naturaleza con mochilas listas.",
      precio : 13000,
      descuento: 0,
      categoria: 'hombre',
    },
    {
      id: 9,
      image: "https://cdn.pixabay.com/photo/2023/04/17/10/31/tennis-7932067_640.jpg",
      text: "Explorando la naturaleza con mochilas listas.",
      precio : 13000,
      descuento: 0,
      categoria: 'hombre',
    },
    {
      id: 10,
      image: "https://cdn.pixabay.com/photo/2014/11/07/00/00/volleyball-520093_640.jpg",
      text: "Explorando la naturaleza con mochilas listas.",
      precio : 8000,
      descuento: 0,
      categoria: 'mujer',
    },
    {
      id: 11,
      image: "https://cdn.pixabay.com/photo/2014/11/07/00/00/volleyball-520093_640.jpg",
      text: "Explorando la naturaleza con mochilas listas.",
      precio : 15000,
      descuento: 20,
      categoria: 'mujer',
    },
    {
      id: 12,
      image: "https://cdn.pixabay.com/photo/2014/11/07/00/00/volleyball-520093_640.jpg",
      text: "Explorando la naturaleza con mochilas listas.",
      precio : 18000,
      descuento: 0,
      categoria: 'mujer',
    },
    {
      id: 13,
      image: "https://cdn.pixabay.com/photo/2014/11/07/00/00/volleyball-520093_640.jpg",
      text: "Explorando la naturaleza con mochilas listas.",
      precio : 11000,
      descuento: 15,
      categoria: 'mujer',
    },
    {
      id: 14,
      image: "https://cdn.pixabay.com/photo/2014/11/07/00/00/volleyball-520093_640.jpg",
      text: "Explorando la naturaleza con mochilas listas.",
      precio : 6500,
      descuento: 10,
      categoria: 'mujer',
    },
    {
      id: 15,
      image: "https://cdn.pixabay.com/photo/2014/11/07/00/00/volleyball-520093_640.jpg",
      text: "Explorando la naturaleza con mochilas listas.",
      precio : 7800,
      descuento: 20,
      categoria: 'mujer',
    },
    {
      id: 16,
      image: "https://cdn.pixabay.com/photo/2016/11/18/19/39/backpack-1836594_640.jpg",
      text: "Explorando la naturaleza con mochilas listas.",
      precio : 7800,
      descuento: 20,
      categoria: 'equipamiento',
    },
    {
      id: 17,
      image: "https://cdn.pixabay.com/photo/2016/11/18/19/39/backpack-1836594_640.jpg",
      text: "Explorando la naturaleza con mochilas listas.",
      precio : 7800,
      descuento: 20,
      categoria: 'equipamiento',
    },
    {
      id: 18,
      image: "https://cdn.pixabay.com/photo/2016/11/18/19/39/backpack-1836594_640.jpg",
      text: "Explorando la naturaleza con mochilas listas.",
      precio : 7800,
      descuento: 20,
      categoria: 'equipamiento',
    },
    {
      id: 19,
      image: "https://cdn.pixabay.com/photo/2019/08/20/02/13/boots-4417595_640.jpg",
      text: "Explorando la naturaleza con mochilas listas.",
      precio : 7800,
      descuento: 20,
      categoria: 'calzado',
    },,
    {
      id: 20,
      image: "https://cdn.pixabay.com/photo/2019/08/20/02/13/boots-4417595_640.jpg",
      text: "Explorando la naturaleza con mochilas listas.",
      precio : 7800,
      descuento: 20,
      categoria: 'calzado',
    },
    {
      id: 21,
      image: "https://cdn.pixabay.com/photo/2019/08/20/02/13/boots-4417595_640.jpg",
      text: "Explorando la naturaleza con mochilas listas.",
      precio : 7800,
      descuento: 20,
      categoria: 'calzado',
    },
    ,
    {
      id: 21,
      image: "https://cdn.pixabay.com/photo/2020/12/10/11/34/ducks-5820051_640.jpg",
      text: "Explorando la naturaleza con mochilas listas.",
      precio : 7800,
      descuento: 20,
      categoria: 'ofertas',
    },
    ,
    {
      id: 21,
      image: "https://cdn.pixabay.com/photo/2020/12/10/11/34/ducks-5820051_640.jpg",
      text: "Explorando la naturaleza con mochilas listas.",
      precio : 7800,
      descuento: 20,
      categoria: 'ofertas',
    },
    ,
    {
      id: 21,
      image: "https://cdn.pixabay.com/photo/2020/12/10/11/34/ducks-5820051_640.jpg",
      text: "Explorando la naturaleza con mochilas listas.",
      precio : 7800,
      descuento: 20,
      categoria: 'ofertas',
    },
  ];

  const productosFiltrados = cardsData.filter(
    (producto) => producto.categoria === categoriaId
  );

  return (
    <div className="row py-5">
      {/* Columna de Filtros */}
      <div className="col-3">
        <h4>Filtros</h4>
        <div className="form-group text-start ">
          <label htmlFor="genero" className="pb-2 fw-bolder">
            Género
          </label>
          <select id="genero" className="form-control form-control-sm">
            <option></option>
          </select>
        </div>
        <div className="form-group text-start ">
          <label htmlFor="tipo" className="py-2 fw-bolder">
            Tipo
          </label>
          <select id="tipo" className="form-control form-control-sm">
            <option></option>
          </select>
        </div>
        <div className="form-group text-start ">
          <label htmlFor="talla" className="py-2 fw-bolder">
            Talla
          </label>
          <select id="talla" className="form-control form-control-sm">
            <option></option>
          </select>
        </div>
        <div className="form-group text-start ">
          <label htmlFor="descuento" className="py-2 fw-bolder">
            Descuento
          </label>
          <select id="descuento" className="form-control form-control-sm">
            <option></option>
          </select>
        </div>
        <div className="form-group text-start ">
          <label htmlFor="color" className="py-2 fw-bolder">
            Color
          </label>
          <select id="color" className="form-control form-control-sm">
            <option></option>
          </select>
        </div>
        <button className="mt-3 btn btn-dark btn-block px-5">Filtrar</button>
      </div>

      {/* Columna de Productos */}
      <div className="col-9">
        <div className="row pb-3">
            <div className="col-8">
            </div>
            <div className="col-4">
                <div className="form-group text-start ">
                    <label htmlFor="genero" className="pb-2 fw-bolder">
                    Ordenar por:
                    </label>
                    <select id="genero" className="form-control form-control-sm">
                        <option>Precio mas bajo</option>
                        <option>Precio mas alto</option>
                        <option>Más reciente</option>
                        <option>Mayor descuento</option>
                    </select>
                </div>
            </div>
        </div>

        <div className="row">
          {productosFiltrados.map((card) => (
            <div className="col-md-4 mb-4" key={card.id}>
              <div className="card">
                <a href="">
                    <img
                    src={card.image}
                    className="card-img-top"
                    alt="Imagen de excursión"
                    />
                </a>
                <div className="card-body">
                  <p className="card-text">{card.text}</p>
                  
                  <p>
            {card.descuento > 0 ? (
                <>
                    <span className="text-decoration-line-through text-danger">
                        ${card.precio.toLocaleString("es-CL")}
                    </span>{" "}
                    <span>
                        ${Math.round(card.precio * (1 - card.descuento / 100)).toLocaleString("es-CL")}
                    </span>
                </>
                ) : (
                    <span>$
                    {Math.round(
                      card.precio * (1 - card.descuento / 100)
                    ).toLocaleString("es-CL")}</span>
                )}
                    </p>
                </div>
                <p><button className="btn btn-dark">Comprar</button></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Productos;
