import React from 'react';
import './Cart.css'
const imag = '../../imgages/my-angle-bg.png'
const Cart = () => {
    return (
        <div className='sticky-top '>
            <div className="my-profile">
                <div className='d-flex mt-4'>
                    <div className='rounded-4 bg-light'>
                        <img src={imag} alt="my" />
                    </div>
                    <div>
                        <p>Md Mubarak Hossain</p>
                        <p>Location</p>
                    </div>
                </div>
                <div className='bg-light d-flex rounded justify-content-between p-2 mt-3'>
                    <div>
                        <h4>67<small>kg</small></h4>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h4>5.6</h4>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h4>26<small>yrs</small></h4>
                        <p>Age</p>
                    </div>
                </div>

            </div>
            {/* ............. */}
            <div className='sticky-top'>
                <div className='AddBreak mt-4'>
                    <h5>Add A Break</h5>
                    <div className='d-flex bg-secondary rounded  justify-content-center py-2'>
                        <p className='p-3 rounded-5 bg-light'>10s</p>
                        <p className='p-3 rounded-5 bg-light'>20s</p>
                        <p className='p-3 rounded-5 bg-light'>30s</p>
                        <p className='p-3 rounded-5 bg-light'>40s</p>
                    </div>
                </div>
                <div className='mt-4'>
                    <h5>Exercise Detailes</h5>
                    <div className='d-flex bg-secondary py-3 px-2 justify-content-between rounded'>
                        <div className='text-dark'>Exercise time</div>
                        <div className='text-light'>200second</div>
                    </div>
                    <div className='d-flex bg-secondary py-3 px-2 justify-content-between rounded mt-4'>
                        <div>Break time</div>
                        <div className='text-light'>20second</div>
                    </div>
                </div>
                <div className='mt-5'>
                    <button className='btn form-control bg-primary text-white fw-bold'>Activity Completed</button>
                </div>
            </div>

        </div>

    );
};

export default Cart;