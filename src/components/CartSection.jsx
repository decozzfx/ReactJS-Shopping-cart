import React from 'react'
import Cart from './Cart'
import Items from './Items'

import { useSelector } from "react-redux";


const CartSection = () => {
const items = useSelector((state) => state.data.posts)

  return (
    <section>
        <div className="md:flex">
          <div className="md:w-8/12">
          <Items items={items}/>
          </div>
          <div className="md:w-4/12">
          <Cart items={items} />
          </div>
        </div>
    </section>
  )
}

export default CartSection