
interface propType {
    id: number;
    companyName: string;
    designation: string;
    timePeriod: string;
    responsibilities: {
        value: string;
    }[];
}

const Experience = ({ data }: { data: propType }) => {
    return (
        <div className='mt-6'>
            <h2 className='font-medium'>{data.companyName}</h2>
            <h3 className='font-medium'>{data.designation}</h3>
            <span className='font-normal'>{data.timePeriod}</span>
            <ul className='list-disc list-outside  mt-3 ml-4'>
                {
                    data?.responsibilities.map((item: { value: string }) => {
                        return (
                            <><li className='text-[#adadad] text-sm '>{item.value}</li> </>
                        )
                    })

                }
            </ul>

        </div>
    );
}

export default Experience;
