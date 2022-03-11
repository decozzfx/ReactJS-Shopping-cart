import React from "react";
import { FaTrash } from "react-icons/fa";
import { BsHeartFill } from "react-icons/bs";

import { useDispatch } from 'react-redux'

const Item = ({ item }) => {
    const dispatch = useDispatch()


    function incrementQty(id){
        dispatch({ type : 'INCRESING_QTY', payload : id})
    }

    function decrementQty(){

    }

  return (
    <>
      <div className="w-2/12 mb-5">
        <img src={item.image} className="shadow-xl w-40" />
      </div>
      <div className="w-10/12 mx-5">
        <div className="w-full flex justify-between">
          <h1 className="text-2xl">{item.brandItemName}</h1>
          <div className="border-2">
            <button className="border-r-2 px-3 py-2 text-xl hover:bg-slate-100" onClick={() => incrementQty(item.id)}>
              +
            </button>
            <span className="border-r-2 px-3 py-2 text-xl">{item.qty}</span>
            <button className="  text-xl px-3 py-2 hover:bg-slate-100">
              -
            </button>
          </div>
        </div>
        <h2 className="text-black/40 my-2">{item.itemName}</h2>
        <h3 className="text-black/40 my-2">Color : {item.color}</h3>
        <h3 className="text-black/40 my-2">Size : {item.size}</h3>
        <div className="flex mt-8">
            <div className="w-6/12 flex">
                <button className="flex items-center mr-10 text-black/50 hover:text-black">
                    <FaTrash />
                    <span className="ml-2 ">Remove Item</span>
                </button>
                <button className="flex items-center text-black/50 hover:text-black">
                    <BsHeartFill />
                    <span className="ml-2 ">Add to wishlist</span>
                </button>
            </div>
            <div className="w-6/12 flex justify-end">
                <i className="text-black/60 my-2 text-xl">${item.price}</i>
            </div>
        </div>
      </div>
    </>
  );
};

export default Item;
