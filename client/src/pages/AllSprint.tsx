import { useEffect, useState } from 'react'
import { Card } from '../components';
import api from '../api'
const AllSprint = () => {
    const [data, setData] = useState<any[]>([]);
    useEffect(() => {
       console.log('jam ketu')
        api('/api/sprint', "GET", null)
            .then(res => setData(res))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='flex  justify-center'>
            <div className="grid grid-cols-3 gap-20 mt-10" >
                {data.map(data => (
                    <div key={data._id}>
                        <Card id={data._id} name={data.name} endDate={data.endDate} startDate={data.startDate} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AllSprint