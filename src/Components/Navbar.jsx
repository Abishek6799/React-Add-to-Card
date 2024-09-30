import React from 'react';

const Navbar = ({cartCount,openCart}) => {
    return (
        <nav className='bg-blue-500 p-4 px-10 text-white flex w-full z-10 justify-between fixed'>
            <h1 className='text-2xl font-bold'>Shoping Store</h1>
            <button onClick={openCart} className='ml-auto bg-white text-blue-500 p-2 text-lg font-medium rounded-lg'>Cart {cartCount}</button>

        </nav>
    );
};

export default Navbar;