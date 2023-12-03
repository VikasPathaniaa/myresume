import React from 'react';
import Profile from './Profile';
import Skills from './Skills';
import SocialLinks from './SocialLinks';
import PersonalInfo from './PersonalInfo';
import CrossButton from './CrossButton';


const SideBar = ({showSidebar , setShowSidebar}:any) => {
  return (
    <div className='lg:w-72 bg-[#596977]  lg:rounded-l-lg min-h-screen flex  flex-col gap-7 py-8 px-8'>
      <CrossButton setShowSidebar={setShowSidebar}/>
       <Profile showSidebar={showSidebar}/>
       <PersonalInfo/>
      <SocialLinks/>
       <Skills/>
      
    </div >
  );
}

export default SideBar;
