import React from 'react';
import SideBar from '../../components/sideBar/SideBar';

const MobileViewSideBar = ({showSidebar,setShowSidebar }:any) => {
  return (
    <div className={`fixed h-screen w-60 z-50 transition-transform duration-300 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-full overflow-y-auto">
          <SideBar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        </div>
      </div>
  );
}

export default MobileViewSideBar;
