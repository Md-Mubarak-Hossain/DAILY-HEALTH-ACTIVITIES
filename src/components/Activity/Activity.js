import React from 'react';
import './Activity.css'
const Activity = (props) => {
    const { time, name, age, picture } = props.product;
    console.log(props);

    return (
        <div className='p-2'>
            <div className='border border-success rounded parent-pos'>
                <div className='p-3'>
                    <img src={picture} className="w-100" alt="" />
                    <h5>{name}</h5>
                    <p>age={age} Years</p>
                    {/* <h2>This is product</h2> */}
                    <p>time={time}sec</p>
                    <h1>time={time}</h1>
                    <button onClick={() => props.handleClick(props.product)}>Add Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Activity;