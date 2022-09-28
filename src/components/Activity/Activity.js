import React from 'react';
import './Activity.css'
const Activity = (props) => {
    const { picture, name, age, time } = props.act;
    return (
        <div className='p-2'>
            <div className='border border-success rounded parent-pos'>
                <div className='p-3'>
                    <img src={picture} className="w-100" alt="" />
                    <h5>{name}</h5>
                    <p>age={age} Years</p>
                    <p>time={time}sec</p>
                </div>
                <button className='bg-primary btn-outline-danger form-control btn-pos fw-bold fs-5 text-white '>Add To list</button>
            </div>
        </div>
    );
};

export default Activity;