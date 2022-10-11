import React, { useEffect, useState } from 'react'
import { Listbox } from '@headlessui/react'
import { FaChevronDown } from 'react-icons/fa'

const Cart = ({items}) => {
    const voucher = [
        { id : 1, text : 'Add a discount code [optional]',  unavailable: true },
        { id : 2, text : 'Discount 50%',  unavailable: false  },
        { id : 3, text : 'Cashback upto 80%',  unavailable: true },
        {id : 4, text : 'Gratis Ongkir',  unavailable: true}
    ]

    const [selectedVoucher, setSelectedVoucher] = useState(voucher[0])
    const [totalPrice, setTotalPrice] = useState(0)
    const shippingPrice =0


    useEffect(() => {
        let sumTotal = 0
        items?.forEach(item => sumTotal += item.price * item.qty)
        setTotalPrice(sumTotal.toPrecision(4))

    },[items])

  return (
    <>
    <div className="flex flex-col shadow-2xl mt-5 p-5 ml-5">
        <h1 className='text-2xl'>The total amount of</h1>        
            <div className="flex justify-between mt-10 text-black/50">
                <h2>Temporary amount</h2>
                <i>${totalPrice}</i>
            </div>
            <div className="flex justify-between mt-4 text-black/50 border-b-2 pb-5">
                <h2>Shipping</h2>
                <i>{shippingPrice === 0 ? 'Free' : shippingPrice}</i>
            </div>
            <div className="flex justify-between mt-5">
                <h2 className='w-1/2'>The total amount of (including VAT)</h2>
                <i>${totalPrice}</i>
            </div>
            <button className='w-full rounded-md bg-blue-500 text-white py-4 mt-10'>GO TO CHECKOUT</button>
    </div>
    <div className="shadow-2xl mt-5 p-5 ml-5 bg-white rounded hover:bg-slate-100">
        <Listbox value={selectedVoucher} onChange={setSelectedVoucher}>
            <div className="flex ">
            <Listbox.Button className='relative w-full block '>{selectedVoucher.text}<FaChevronDown className='absolute top-[20%] left-[90%]'/></Listbox.Button>
            </div>
                <Listbox.Options className='mt-5'>
                    {voucher.map((v) => (
                    <Listbox.Option className='py-4 hover:bg-slate-500 hover:text-white cursor-pointer' key={v.id} value={v}>
                        {v.text}
                    </Listbox.Option>
                    ))}
                </Listbox.Options>
        </Listbox>
    </div>
    </>
  )
}

export default Cart