import React, { useState } from 'react';

const Product = ({product}) => {
    const [quantity,setQuantity] = useState(1)
    const handleQuantityIncress=()=>{
        setQuantity(quantity+1);
    }
    const handleQuantityDiscress=()=>{
        
    }
   
    return (
        <div className='my-10 border p-2 rounded-lg shadow-lg border-gray-400'>
            <img className='w-full h-[200px]' src={product?.image} alt="" />
            <h1 className='text-2xl my-2'>{product.name.length > 25 ? product.name.slice(0,25)+ "..." :product.name }</h1>
            <p className='h-[80px]'>{product.description.length > 100 ? product.description.slice(0,100)+ "..." :product.description }</p>
            
            <p className='text-xl'>Price : <span>${product.price * quantity}</span></p>

            <div className='flex '>
                <h1 onClick={handleQuantityIncress} className='text-3xl bg-gray-300 px-4 py-2 border-l-2'>+</h1>
                <h1 className='text-3xl bg-gray-300 px-4 py-2 border-l-2'>{quantity}</h1>
                <h1 className='text-3xl bg-gray-300 px-4 py-2 border-l-2'>-</h1>
            </div>

            <button className='bg-purple-600  w-full text-center my-3 text-xl p-2 rounded text-white hover:bg-white border hover:border-purple-600 hover:text-black'>Add To Cart</button>

            
        </div>
    );
};

export default Product;