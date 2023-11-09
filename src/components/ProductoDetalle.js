import React from 'react';

const ProductoDetalle = () => {
  const articulo = {
    nombre: 'Mesa Premium',
    descripcion: 'Mesa de algarrobo 1.80*70 mts',
    precio: 75000,
    sku: 'SKU123456',
    cantidadDisponible: 10,
  };

  return (
    <div className="container">
      <h2 className="text-primary">Detalles del Producto</h2>
      <table className="table">
        <tbody>
          <tr>
            <td>Nombre:</td>
            <td>{articulo.nombre}</td>
          </tr>
          <tr>
            <td>Descripción:</td>
            <td>{articulo.descripcion}</td>
          </tr>
          <tr>
            <td>Precio:</td>
            <td className="text-success">${articulo.precio}</td>
          </tr>
          <tr>
            <td>SKU:</td>
            <td>{articulo.sku}</td>
          </tr>
          <tr>
            <td>Cantidad Disponible:</td>
            <td>{articulo.cantidadDisponible}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProductoDetalle;
