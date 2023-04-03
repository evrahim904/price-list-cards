import React from 'react';
import Features from '../feautres/Features';

const Pricecard = ({price}) => {
    return (
        <div className='bg-indigo-400  mt-4 rounded-md p-4 flex flex-col '>
            <h2 className='text-center'> <span  className='text-5xl font-extrabold text-purple-800 '>{price.price}</span> <span className='text-2xl font-bold'>/mon</span>
            </h2>
            <h5 className='text-2xl my-5 font-bold text-center'>{price.name}</h5>
            <p className='underline font-bold text-white'>features:</p>
            {
                price.features.map((feature,idx) =><Features 
                key={idx}
                feature ={feature}
                >

                </Features>)
                
            }
                   <button className='w-full mt-auto hover:bg-green-800 bg-green-600 py-2 rounded-mf text white font bold'>buy now</button>

        </div>
    );
};

export default Pricecard;