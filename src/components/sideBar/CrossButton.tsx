import React from 'react';

const CrossButton = ({setShowSidebar}:any) => {
    return (
        <div onClick={() => setShowSidebar(false)} className='flex  justify-end lg:hidden '>
            <span className='shadow-xl  bg-white rounded-full font-semibold text-lg px-3 py-1' >x</span>
        </div>
    );
}

export default CrossButton;
