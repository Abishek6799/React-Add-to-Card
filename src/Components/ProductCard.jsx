import React from 'react';

const ProductCard = ({ product,addToCart }) => {
    return (
        <div className="border p-4 rounded-lg bg-white flex-row content-evenly relative shadow-md">
        <img src={product.image} alt={product.title} className="h-44 w-full object-contain mb-2" />
        <h2 className="text-xl">{product.title}</h2>
        <p className="text-green-500">${product.price}</p>
        <button onClick={() => addToCart(product)} className="bg-blue-500 text-white p-2 rounded mt-2">
          Add to Cart
        </button>
      </div>
    );
};

export default ProductCard;