import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import CartModal from './Components/CartModal';



const App = () => {
  const [products,setProducts] = useState([]);
  const [cart,setCart] = useState([]);
  const [isCartOpen,setIsCartOpen] = useState(false);

  useEffect(()=>{
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  },[]);


  const addToCart = (product) => {
    if (!cart.some(item => item.id === product.id)) {
      setCart([...cart, product]);
    } else {
      alert("Item already added to the cart");
    }
  };


  const removeFromCart = (productId) =>{
    setCart(cart.filter(item => item.id !==productId));
  };


  return (
    <div className='App'>
      <Navbar cartCount={cart.length} openCart={() => setIsCartOpen(true)} />
      <ProductList products={products} addToCart={addToCart} />
      {isCartOpen && <CartModal cart={cart} products={products} removeFromCart={removeFromCart} closeModal={() => setIsCartOpen(false)} />}
    </div>
  );
};

export default App;