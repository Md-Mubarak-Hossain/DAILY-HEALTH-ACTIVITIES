import { Toast } from 'bootstrap';
import React, { useState, useEffect } from 'react';
import Activity from '../Activity/Activity';
import Profile from '../Profile/Profile';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Activities = () => {
    const notify = () => toast("All Done!");
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setProducts(data))
    }, [])

    const handleClick = (product) => {
        // console.log('click');
        const newCart = [...cart, product]
        setCart(newCart)
    }

    let tim = 0;
    for (const product of cart) {
        tim = tim + product.time;
    }

    return (
        <div className='row row-cos-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 bg-secondary'>
            <div className='col col-md-9 col-lg-9 col-xl-9 col-xxl-9'>
                <h2>Daily activities</h2>
                <div className='row row-cols-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3'>
                    {
                        products.map(product => <Activity
                            key={product.id}
                            product={product}
                            handleClick={handleClick}
                        ></Activity>)
                    }
                </div>
            </div>
            <div className='col col-md-3 col-lg-3 col-xl-3 col-xxl-3 bg-warning rounded'>

                <div className='sticky-top '>
                    <Profile></Profile>

                    <div className='sticky-top'>
                        <div className='AddBreak mt-4'>
                            <h5>Add A Break</h5>
                            <div className='d-flex bg-secondary rounded  justify-content-center py-2'>
                                <button onClick={() => setCount(10)} className='p-3 rounded-5 bg-light'>10s</button>
                                <button onClick={() => setCount(20)} className='p-3 rounded-5 bg-light'>20s</button>
                                <button onClick={() => setCount(30)} className='p-3 rounded-5 bg-light'>30s</button>
                                <button onClick={() => setCount(40)} className='p-3 rounded-5 bg-light'>40s</button>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <h5>Exercise Detailes</h5>
                            <div className='d-flex bg-secondary py-3 px-2 justify-content-between rounded'>
                                <div className='text-dark'>Exercise time</div>
                                <div className='text-light'>{tim}second</div>
                            </div>
                            <div className='d-flex bg-secondary py-3 px-2 justify-content-between rounded mt-4'>
                                <div>Break time</div>
                                <div className='text-light'>{count}second</div>
                            </div>
                        </div>
                        <div className='py-5'>
                            <button onClick={notify} className='btn form-control bg-primary text-white fw-bold'>Activity Completed</button>
                            <ToastContainer />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Activities;