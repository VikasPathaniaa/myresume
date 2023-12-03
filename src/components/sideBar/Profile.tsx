import React from 'react';
import Avtar from "../../assets/avtar.png";

const Profile = ({showSidebar}:any) => {
  return (
    <div className='flex flex-col items-start'>
            <img src={Avtar} alt="image not found" className='h-28 w-28'   / >
                <div>
                <h3 className={showSidebar ? "text-white ":  'text-black text-xl lg:text-white font-normal'}>Sarthak Sharma</h3>
                <span className='text-sm text-gray-300'>Product Designer</span>
                </div>
               
        </div>
  );
}

export default Profile;
