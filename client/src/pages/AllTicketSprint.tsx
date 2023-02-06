import { useEffect, useState, MouseEvent } from 'react'
import { useParams } from 'react-router-dom'
import api from '../api'
import { TicketCard, AddTicketModal } from '../components';
import { useThemeContext } from '../context/TheemContext'

const AllTicketSprint = () => {
    const { id } = useParams();
    const [data, setData] = useState<any[]>([])
    const { isOpen, toggleOpen } = useThemeContext()
    
    useEffect(() => {
        function getTicketSprint() {
            api(`/api/sprint/ticketSprint/${id}`, 'GET', null)
                .then(res => setData(res))
                .catch(err => console.log(err))
        }

        getTicketSprint()
    }, [])

    const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        toggleOpen() 
      };
  
    return (
        <div className='static'>
            <button  onClick={handleOnClick}className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Add a Ticket
            </button>
            <div className='flex  justify-center'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10" >
                    {data.map(data => (
                        <div key={data._id}>
                            <TicketCard name={data.name} description={data.description} dates={data.date} />
                        </div>
                    ))}
                </div>
            </div>

            {isOpen && (
                <div className='absolute inset-0 flex items-center justify-center'>
                    <AddTicketModal />
                </div>
            )}
        </div>
    )
}

export default AllTicketSprint