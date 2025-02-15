import React from "react";

const Categorias = () => {
    return (
      <div className="row py-5">
        <div className="col-4">
            <div className="card">
                <a href="/categoria/hombre">
                    <img src="https://media.istockphoto.com/id/1319189368/photo/mid-adult-man-is-listening-to-music-in-park.webp?s=2048x2048&w=is&k=20&c=Udy-mOB21uSyTTAgQT5dKnQwsFYxAhePdNe3SCLeZug=" className="card-img-top" alt="..."/>
                </a>
            <div className="card-body">
                    <p className="fw-bold card-text">Ropa de Hombre</p>
                </div>
            </div>
        </div>
        <div className="col-4">
            <div className="card">
            <a href="/categoria/mujer">
                <img src="https://media.istockphoto.com/id/1441759606/es/foto/deportista-feliz-con-auriculares-corriendo-en-el-parque.jpg?s=1024x1024&w=is&k=20&c=OQa8iQp_pbR5LCqkYSN_ZhgbS4_Ww5BraEiQ0h4u80Y=" className="card-img-top" alt="..."/>    
            </a>
                <div className="card-body">
                    <p className="fw-bold card-text">Ropa de mujer</p>
                </div>
            </div>
        </div>
        <div className="col-4">
            <div className="card">
                <a href="/categoria/calzado">
                    <img src="https://media.istockphoto.com/id/1348707285/es/foto/mujer-elegante-atando-cordones-de-botines-negros.webp?s=2048x2048&w=is&k=20&c=l05Jt0R7npEhyx7RSkAahDFaP22-9qYMumW7uMhFK5w=" className="card-img-top" alt="..."/>
                </a>
                <div className="card-body">
                    <p className="fw-bold card-text">Calzado</p>
                </div>
            </div>
        </div>
      </div>
    );
  };

export default Categorias;