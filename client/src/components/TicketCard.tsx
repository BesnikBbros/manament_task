import React from 'react'
interface Props {
  name: string;
  description: string;
  dates: string;
}
const TicketCard = ({ name, description, dates }: Props) => {
  const newDate = new Date(dates)
  return (
    <div>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <div>
          <h5>Date inserted: {newDate.toDateString()}</h5>
          
        </div>
      </div>
    </div>
  )
}

export default TicketCard