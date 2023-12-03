import React from 'react';
import Menu from '../../../assets/svg/Menu';

const Header = ({generatePDF , toggleSidebar}:any) => {
  return (
    <div className='pt-4 max-w-4xl mr-3 flex lg:justify-end flex-row justify-between items-center lg:mx-auto mb-3 mx-6'>
    <div className='lg:hidden' onClick={toggleSidebar}>
      <Menu />
    </div>
    <button className='bg-zinc-800 py-2 px-2 hover:shadow-2xl rounded-lg text-white' onClick={generatePDF}>Download Cv</button>
  </div>
  );
}

export default Header;
