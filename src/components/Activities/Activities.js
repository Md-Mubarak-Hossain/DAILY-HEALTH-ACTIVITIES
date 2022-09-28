import React, { useState, useEffect } from 'react';
import Activity from '../Activity/Activity';

const Activities = () => {
    const [act, setAct] = useState([])
    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(act => {
                setAct(act)

            })


    }, [])
    return (
        <div>
            <h2>Daily activities</h2>
            <div className='row row-cols-3'>
                {
                    act.map(act => <Activity
                        key={act.id}
                        act={act}
                    ></Activity>)
                }
            </div>

        </div>
    );
};

export default Activities;