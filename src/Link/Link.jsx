import React from 'react';


const Link = ({route}) => {
    return (
        <div>
            <li className='mr-12 hover:bg-purple-700'>
                <a href={route.path}>{route.name}</a>
             </li>
        </div>
    );
};

export default Link;