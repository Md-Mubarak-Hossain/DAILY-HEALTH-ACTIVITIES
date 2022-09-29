import React, { useState, useEffect } from 'react';
import Activity from '../Activity/Activity';

const Activities = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setProducts(data))
    }, [])
    const handleClick = (product) => {
        console.log('click');
        const newCart = [...cart, product]
        setCart(newCart)
    }
    let tim = 0;
    for (const product of cart) {
        tim = tim + product.time;
    }
    return (
        <div className='row row-cols-2'>
            <div className='col-9'>
                <h2>Daily activities</h2>
                <div className='row row-cols-3'>
                    {
                        products.map(product => <Activity
                            key={product.id}
                            product={product}
                            handleClick={handleClick}
                        ></Activity>)
                    }
                </div>
            </div>
            <div className='col-3'>
                <h2>This cart</h2>
                <p>cart length:{cart.length}</p>
                <p>time:{tim}</p>
            </div>
        </div>
    );
};

export default Activities;