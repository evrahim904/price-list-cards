import React, { useEffect, useState } from 'react';
import Pricecard from '../pricecared/Pricecard';

const Pricelist = () => {
    const[prices, setPrices] =useState([]);
    useEffect(()=> {
        fetch('price.json')
        .then(res => res.json())
        .then(data => setPrices(data))
    }
    ,[])
    return (
        <div>
            <h2 className='text-6xl text-center bg-purple-300 font-bold p-4'>Awesome price list</h2>
            <div className='grid md:grid-cols-3 gap-3'>
            {
                prices.map(price => <Pricecard
                key = {price.id}
                price={price}
                ></Pricecard>)
            }
         
            </div>
        </div>
    );
};

export default Pricelist;