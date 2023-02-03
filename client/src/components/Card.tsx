import { Link } from 'react-router-dom'
import { HiOutlineTicket } from 'react-icons/hi'
interface Props {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
}
const Card = ({ id, name, startDate, endDate }: Props) => {
    const dateStart = new Date(startDate)
    const dateEnd = new Date(endDate)
    return (
        <div>
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <HiOutlineTicket className='h-24 w-24' />
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <div className='flex justify-between'>
                    <div>
                        <p>Start Date</p>
                        <p>{dateStart.toDateString()}</p>
                    </div>
                    <div>
                        <p>End Date</p>
                        <p>{dateEnd.toDateString()}</p>
                    </div>
                </div>
                <Link to={`/getTicketSprint/${id}`} className=" mt-5 inline-flex items-center text-blue-600 hover:underline">
                  See Ticket
                </Link>
            </div>
        </div>
    )
}

export default Card