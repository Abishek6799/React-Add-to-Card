import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({products,addToCart}) => {
    return (
        <div className=" bg-slate-500 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 -mt-5 absolute pt-32 px-8 pb-10 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
    );
};

export default ProductList;