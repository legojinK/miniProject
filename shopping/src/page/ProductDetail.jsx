import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router";
import { IoMdResize } from 'react-icons/io';
import {FaShoppingCart} from "react-icons/fa";

const ProductDetail = () => {

    const {id}=useParams()
    const [product,setProduct]=useState('')
    const [showZoom, setShowZoom] = useState(false);
    const [selectedSize, setSelectedSize] = useState('');
    const [quantity, setQuantity] = useState(1);
    const getProductDetails=async () => {
        const url = `https://my-json-server.typicode.com/legojinK/miniProject/products/${id}`;
        const { data } = await axios.get(url);
        console.log(1212,data);
        setProduct(data)
    }
    const toggleZoom = () => {
        setShowZoom(!showZoom);
    };

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };
    const handleQuantityChange = (change) => {
        setQuantity(Math.max(1, quantity + change));
    };

    const handleAddToCart=()=>{
        console.log("addToCart")
    }


    useEffect(()=>{
        getProductDetails()
        },[]
    )
    return (
        <div className="min-h-screen bg-[#F9F7F5] text-[#3D3D3D] " >
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/3 relative">
                        <img
                            src={product.img}
                            alt={product.title}
                            className="w-full h-auto object-cover cursor-zoom-in"
                            onClick={toggleZoom}
                        />
                        <button
                            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
                            onClick={toggleZoom}
                            aria-label="Toggle image zoom"
                        >
                            <IoMdResize className="text-[#3D3D3D] text-xl" />
                        </button>
                        {showZoom && (
                            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={toggleZoom}>
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="max-w-full max-h-full object-contain"
                                />
                            </div>
                        )}
                    </div>
                    <div className="lg:w-1/3 lg:pl-8 mt-8 lg:mt-0">
                        <h1 className="text-3xl font-light">{product.title}</h1>
                        {/*{product?.new && (*/}
                        {/*    <div className="ml-4 mb-4">*/}
                        {/*<span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm">*/}
                        {/*    New*/}
                        {/*</span>*/}
                        {/*    </div>*/}
                        {/*)}*/}
                        <p className="text-2xl font-light mt-4">${product.price}</p>
                        {/*<p className="mt-4 text-sm">{product.description}</p>*/}
                        <div className="mt-6">
                            <h2 className="text-sm font-semibold">Select Size</h2>
                            <div className="flex gap-2 mt-2">
                                {product.size?.map((size) => (
                                    <button
                                        key={size}
                                        className={`px-4 py-2 border text-sm ${selectedSize === size ? 'bg-[#3D3D3D] text-white' : 'border-[#3D3D3D] text-[#3D3D3D] hover:bg-[#3D3D3D] hover:text-white'}`}
                                        onClick={() => handleSizeChange(size)}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="mt-6 flex items-center">
                            <button
                                className="px-4 py-2 border text-sm border-[#3D3D3D] hover:bg-[#3D3D3D] hover:text-white"
                                onClick={() => handleQuantityChange(-1)}
                            >
                                -
                            </button>
                            <span className="px-6 py-2 border-t border-b text-sm border-[#3D3D3D]">{quantity}</span>
                            <button
                                className="px-4 py-2 border text-sm border-[#3D3D3D] hover:bg-[#3D3D3D] hover:text-white"
                                onClick={() => handleQuantityChange(1)}
                            >
                                +
                            </button>
                        </div>
                        <button
                            className="mt-6 w-full bg-[#3D3D3D] text-white py-3 px-4 hover:bg-[#2A2A2A] transition duration-300 flex items-center justify-center text-sm uppercase tracking-wider"
                            onClick={handleAddToCart}
                        >
                            <FaShoppingCart className="mr-2" />
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;