import React from 'react';
import { motion } from 'framer-motion';
import {useNavigate} from "react-router";

const Card = ({ item }) => {

    const navigate=useNavigate()

    const showDetail = () => {
        navigate(`/product/${item.id}`)
    };

    return (
        <div className="h-full">
            <motion.div
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer flex flex-col justify-between h-full"
                whileHover={{ scale: 1.05 }}
                onClick={showDetail}
            >
                <img src={item.img} alt={item.title} className="w-full h-66 object-cover" />
                <div className="p-4 flex-grow">
                    {item.choice && (
                        <div className="mb-2 text-red-600 font-semibold">Conscious choice</div>
                    )}
                    <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                    <p className="text-gray-600 mb-2">{item.price}</p>
                    <p className="text-gray-600">Size: {item.size}</p>
                </div>
                {item.new && (
                    <div className="ml-4 mb-4">
                        <span className="bg-red-500 text-white px-2 py-1 rounded-full text-sm">
                            New
                        </span>
                    </div>
                )}
            </motion.div>
        </div>
    );
};

export default Card;
