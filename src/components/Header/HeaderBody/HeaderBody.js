import React from 'react';
import profile from '../../../images/nur.png'
import './HeaderBody.css'
import ParticlesBg from 'particles-bg'
import HeaderMessage from '../HeaderMessage/HeaderMessage';

const HeaderBody = () => {
    return (
        <div className="row g-0 w-100 m-0 p-0 pt-5 styleOfHeader">
            {/* <ParticlesBg type="circle" bg={true} /> */}
            <div className="col-md-7">
                <HeaderMessage></HeaderMessage>
            </div>
            <div className="col-md-5 text-center d-flex justify-content-center align-items-end">
                <div className="mb-auto">

                    <img className="headerProfileImage img-fluid" src={profile} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeaderBody;