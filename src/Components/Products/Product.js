import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Product = ({ product }) => {
  const {user} = useContext(AuthContext)
  const [quantity, setQuantity] = useState(1);
  const [showQuantity, setShowQuantity] = useState(false);
  const handleQuantityIncress = () => {
    setQuantity(quantity + 1);
  };
  const handleQuantityDiscress = () => {
    if (quantity === 1) {
      return toast.error("You can't add less than one quantity");
    }
    setQuantity(quantity - 1);
  };

  const handleAddCart = (products) => {
    const cartData = {
      productId: products._id,
      name: products?.name,
      image: products?.image,
      price: products?.price,
      quantity: quantity,
      email: user?.email
    };

    if(!user?.email){
      toast.error("You must login to add to cart");
      return;
    }
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData),
    })
      .then((response) => response.json())
      .then((data) =>{ 
        console.log(data)
        setShowQuantity(false)
        setQuantity(1)
        toast.success("Product Added on your Cart");
    })
      .catch((error) => console.log(error));
  };

  return (
    <div className="my-10 border p-2 rounded-lg shadow-lg border-gray-400">
      <div onClick={() => setShowQuantity(false)}>
        <img className="w-full h-[200px]" src={product?.image} alt="" />
        <h1 className="text-2xl my-2">
          {product.name.length > 25
            ? product.name.slice(0, 25) + "..."
            : product.name}
        </h1>

        <p className="text-xl">
          Price : <span>${product.price }</span>
        </p>
      </div>

      <div className={`${!showQuantity && "hidden"} flex gap-2`}>
        <div className={`flex my-2 `}>
          <h1
            onClick={handleQuantityIncress}
            className="text-3xl bg-gray-300 px-4 py-2 border-l-2 cursor-pointer"
          >
            +
          </h1>
          <h1 className="text-3xl bg-gray-300 px-4 py-2 border-l-2">
            {quantity}
          </h1>
          <h1
            onClick={handleQuantityDiscress}
            className="text-3xl bg-gray-300 px-4 py-2 border-l-2 cursor-pointer"
          >
            -
          </h1>
        </div>
        <button
          onClick={() => handleAddCart(product)}
          className="bg-purple-600   w-full text-center my-3 text-xl p-2 rounded text-white hover:bg-white border hover:border-purple-600 hover:text-black"
        >
          Buy
        </button>
      </div>

      <button
        onClick={() => setShowQuantity(true)}
        className={`bg-purple-600  w-full text-center my-3 text-xl p-2 rounded text-white hover:bg-white border hover:border-purple-600 hover:text-black ${
          showQuantity && "hidden"
        }`}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Product;
