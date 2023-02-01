import { AiOutlineShoppingCart } from "react-icons/ai";
import React, { useState } from 'react';


export const Cartwidget = () => {

  const [count, setCount] = useState(0);
       
    return (
      <div className="  flex">
       <button className=" text-white" onClick={() => setCount(count + 1)}><AiOutlineShoppingCart fontSize="25px"/></button>  
        <p className=" text-white">{count}</p>
      </div>
    )
  }
