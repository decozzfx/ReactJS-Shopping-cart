import React, { useEffect, useState } from 'react'
import Item from './Item'


const Items = ({items}) => {

  return (
    <div>
      <div className="flex flex-col shadow-2xl mt-5 p-5">
         <h2 className='text-2xl'>Cart ({ items?.length > 2 ? `${items?.length} item` : `${items?.length} items` })</h2>
         {items?.map((item) => (
            <div className="flex my-5 border-b-2" key={item.id}>
               
               <Item item={item}/>
            </div>
         ))}
      </div>
    </div>
  )
}

export default Items