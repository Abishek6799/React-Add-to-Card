import React from 'react';

const CartModal = ({ cart, removeFromCart, closeModal }) => {
    return (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-cyan-400 text-center p-5 rounded-xl w-1/2 max-h-[705px] md:w-1/2 overflow-y-scroll lg:w-2/4 shadow-md">
          <h2 className="text-3xl font-bold text-blue-500 mb-4">Your Cart</h2>
          {cart.length === 0 ? (
            <p className='text-xl'>Your cart is empty</p>
          ) : (
            <ul>
              {cart.map(item => (
                <li key={item.id} className="lg:flex-row bg-white lg:flex lg:justify-between border-2 border-black shadow-lg rounded-2xl my-7 gap-5">
                    <div className='flex flex-col py-2 px-4 justify-center items-center lg:flex-row lg:flex lg:justify-center lg:items-center gap-4'>
                    <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                    <span className='text-start'>{item.title} </span>
                    </div>
                  
                  <div className='flex flex-col gap-2 justify-center items-center py-2 px-4 lg:flex-row lg:flex lg:justify-start lg:items-center lg:gap-9'>
                  <span className="text-green-500 text-end">${item.price}</span>
                  <button onClick={() => removeFromCart(item.id)} className="text-white p-1 hover:text-lg  px-2 rounded bg-red-500">Remove</button>
                  </div>
                  
                </li>
              ))}
            </ul>
          )}
          <button onClick={closeModal} className="mt-4 bg-blue-500  text-white p-2 rounded">Close</button>
        </div>
      </div>
    );
  };

export default CartModal;
