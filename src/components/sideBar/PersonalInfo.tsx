
const PersonalInfo = () => {
    return (
        <div>
            <h2 className='text-xl text-white font-semibold'>Details</h2>
            <div className='mt-3 flex flex-col gap-4'>
                <div>
                    <p className='text-base text-white '>Address</p>
                    <span className='text-sm text-gray-300'>San Fransico, California</span>
                </div>
                <div>
                    <p className='text-base text-white '>Phone</p>
                    <span className='text-sm text-gray-300'>(315) 802-8179</span>
                </div>
                <div>
                    <p className='text-base text-white '>Email</p>
                    <span className='text-sm text-gray-300'>user@gmail.com</span>
                </div>

            </div>
        </div>
    );
}

export default PersonalInfo;
