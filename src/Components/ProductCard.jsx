import React from 'react';

const ProductCard = ({ product,addToCart }) => {
    return (
        <div className="border-blue-500 border-2 p-4 rounded-lg bg-white flex flex-col content-evenly relative shadow-lg">
        <img src={product.image} alt={product.title} className="h-44 w-full object-contain mb-2" />
        <h2 className="text-xl">{product.title}</h2>
        <p className="text-green-500">${product.price}</p>
        <div className="flex justify-center mt-auto pb-1">
                <button 
                    onClick={() => addToCart(product)} 
                    className="bg-blue-500 text-white p-2 rounded">
                    Add to Cart
                </button>
            </div>
      </div>
    );
};

export default ProductCard;


