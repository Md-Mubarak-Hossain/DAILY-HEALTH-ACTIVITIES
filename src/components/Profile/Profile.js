import React from 'react';

const Profile = () => {
    return (
        <div className='bg-info'>
            <div className="my-profile">
                <div className='d-flex mt-4'>
                    <div className='rounded-4 bg-light'>
                        {/* <img src={imag} alt="my" /> */}
                    </div>
                    <div>
                        <p>Md Mubarak Hossain</p>
                        <p>Raipura,Narsingdi</p>
                    </div>
                </div>
                <div className='bg-light d-flex rounded justify-content-between p-2 mt-3'>
                    <div>
                        <h4>67<small>kg</small></h4>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h4>5.6</h4>
                        <p>Height</p>
                    </div>
                    <div>
                        <h4>26<small>yrs</small></h4>
                        <p>Age</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;