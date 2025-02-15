import { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

const CarritoProvider = ({ children }) => {
    
    const [carrito, setCarrito] = useState(() => {
        try {
            const carritoGuardado = localStorage.getItem("carrito");
            return carritoGuardado ? JSON.parse(carritoGuardado) : [];
        } catch (error) {
            console.error("Error al cargar carrito:", error);
            return [];
        }
    });

    const [total, setTotal] = useState(0);

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));

        const nuevoTotal = carrito.reduce(
            (acc, item) => acc + item.cant * parseFloat(item.precio || 0),
            0
        );
        setTotal(nuevoTotal);
    }, [carrito]);

    const agregarAlCarrito = (producto) => {
        setCarrito(prevCarrito => {
            let nuevoCarrito;
            const itemEnCarrito = prevCarrito.find(item => item.id === producto.id);

            if (itemEnCarrito) {
                nuevoCarrito = prevCarrito.map(item =>
                    item.id === producto.id ? { ...item, cant: item.cant + 1 } : item
                );
            } else {
                nuevoCarrito = [...prevCarrito, { ...producto, cant: 1 }];
            }

            return nuevoCarrito;
        });
    };

    const eliminarDelCarrito = (id) => {
        setCarrito(prevCarrito => prevCarrito.filter(item => item.id !== id));
    };

    const aumentarCantidad = (producto) => {
        setCarrito(prevCarrito => prevCarrito.map(item =>
            item.id === producto.id ? { ...item, cant: item.cant + 1 } : item
        ));
    };

    // ✅ Disminuir cantidad de un producto
    const disminuirCantidad = (producto) => {
        setCarrito(prevCarrito => {
            return producto.cant === 1
                ? prevCarrito.filter(item => item.id !== producto.id) // Elimina si llega a 0
                : prevCarrito.map(item =>
                    item.id === producto.id ? { ...item, cant: item.cant - 1 } : item
                );
        });
    };

    // ✅ Vaciar carrito
    const vaciarCarrito = () => {
        setCarrito([]);
        setTotal(0);
        localStorage.removeItem("carrito"); // ✅ Limpia almacenamiento
    };

    return (
        <CarritoContext.Provider 
            value={{ 
                carrito,
                agregarAlCarrito,
                eliminarDelCarrito,
                aumentarCantidad,
                disminuirCantidad,
                total,
                vaciarCarrito
            }}>
            {children}
        </CarritoContext.Provider>
    );
};

export default CarritoProvider;
