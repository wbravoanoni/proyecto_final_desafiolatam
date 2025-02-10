import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ProductosNuevos = () => {
    const slides = [
      {
        cards: [
          { title: 'Producto 1', price: '$9', text: 'Nombre Producto', image: 'https://columbiacl.vtexassets.com/arquivos/ids/392017-300-400?v=638603638076030000&width=300&height=400&aspect=true' },
          { title: 'Producto 2', price: '$9', text: 'Nombre Producto', image: 'https://columbiacl.vtexassets.com/arquivos/ids/392212-300-400?v=638603640519630000&width=300&height=400&aspect=true' },
          { title: 'Producto 3', price: '$9', text: 'Nombre Producto', image: 'https://columbiacl.vtexassets.com/arquivos/ids/397599-300-400?v=638603704103400000&width=300&height=400&aspect=true' },
        ],
      },
      {
        cards: [
          { title: 'Producto 4', price: '$9', text: 'Nombre Producto', image: 'https://columbiacl.vtexassets.com/arquivos/ids/355750-300-400?v=638452777358900000&width=300&height=400&aspect=true' },
          { title: 'Producto 5', price: '$9', text: 'Nombre Producto', image: 'https://columbiacl.vtexassets.com/arquivos/ids/401618-300-400?v=638696284751200000&width=300&height=400&aspect=true' },
          { title: 'Producto 6', price: '$9', text: 'Nombre Producto', image: 'https://columbiacl.vtexassets.com/arquivos/ids/405174-300-400?v=638736488202370000&width=300&height=400&aspect=true' },
        ],
      },
      {
        cards: [
          { title: 'Producto 7', price: '$9', text: 'Nombre Producto', image: 'https://columbiacl.vtexassets.com/arquivos/ids/368856-300-400?v=638537208254370000&width=300&height=400&aspect=true' },
          { title: 'Producto 8', price: '$9', text: 'Nombre Producto', image: 'https://columbiacl.vtexassets.com/arquivos/ids/368528-300-400?v=638512140669130000&width=300&height=400&aspect=true' },
          { title: 'Producto 9', price: '$9', text: 'Nombre Producto', image: 'https://columbiacl.vtexassets.com/arquivos/ids/355200-300-400?v=638452762264370000&width=300&height=400&aspect=true' },
        ],
      },
    ];
  
    return (
        <div className="row">
            <h3 className="text-center py-3">Productos Nuevos</h3>
            <div id="carouselWithCards" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div
                    className={`carousel-item ${index === 0 ? 'active' : ''}`}
                    key={index}
                    >
                    <div className="container mt-3">
                        <div className="row">
                        {slide.cards.map((card, idx) => (
                            <div className="col-md-4" key={idx}>
                            <div className="card">
                                <img src={card.image} className="card-img-top" alt={card.title}/>
                                <div className="card-body text-center">
                                <h5 className="card-title">{card.price}</h5>
                                <p className="card-text">{card.text}</p>
                                </div>
                            </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    </div>
                ))}
                </div>
                <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselWithCards"
                data-bs-slide="prev"
                style={{ backgroundColor: 'rgba(128, 128, 128, 0.2)' }}
                >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselWithCards"
                data-bs-slide="next"
                style={{ backgroundColor: 'rgba(128, 128, 128, 0.2)' }}
                >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
  };
  
  export default ProductosNuevos;
