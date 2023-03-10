import {useState, useEffect } from 'react'
import { TicketCard } from '../components'
import api from '../api'
const AllTicket = () => {
    const [data, setData] = useState<any[]>([])
    useEffect(() => {
        function getTicketSprint() {
            api(`/api/ticket`, 'GET', null)
                .then(res => setData(res))
                .catch(err => console.log(err))
        }

        getTicketSprint()
    }, [data])
  return (
    <div>
        <div className='flex  justify-center'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-10" >
                    {data.map(data => (
                        <div key={data._id}>
                            <TicketCard name={data.name} description={data.description} dates={data.date} />
                        </div>
                    ))}
                </div>
            </div>
    </div>
  )
}

export default AllTicket