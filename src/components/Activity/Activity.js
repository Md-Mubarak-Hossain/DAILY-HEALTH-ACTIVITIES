import React from 'react';
import './Activity.css'
const Activity = (props) => {
    const { time, name, age, picture } = props.product;
    return (
        <div className='p-2'>
            <div className='border border-success rounded parent-pos'>
                <div className='p-3 bg-light rounded'>
                    <img src={picture} className="w-100" alt="" />
                    <h5>{name}</h5>
                    <h6>age={age} Years</h6>
                    <h5>time={time}minutes</h5>
                    <button className='form-control btn-primary text-white fw-bold btn btn-outline-danger' onClick={() => props.handleClick(props.product)}>Add To List</button>
                </div>
            </div>
        </div>
    );
};

export default Activity;