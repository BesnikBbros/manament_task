import React, { useState } from 'react'
import api from '../api';
import { toast } from "react-toastify";
const Sprint = () => {
  const [name, setName] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = {
      name,
      startDate,
      endDate
    };

    api("/api/sprint", "POST", data)
        .then(res => 
          {
            toast.success("You add a Sprint!", {
              className: "bg-green-500 text-white",
            });
           setName('')
           setStartDate('')
           setEndDate('')
          })
        .catch(err => console.log(err))
  };
  return (
    <div className='flex justify-center mt-[100px]'>
      <div className="w-[600px]">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <h1 className='text-2xl not-italic font-bold mb-8'>Add Sprint</h1>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={name}  id="name" type="text" onChange={e => setName(e.target.value)}  />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
              Start Date
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={startDate} id="startDate" type="date" onChange={e => setStartDate(e.target.value)} />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="endDate">
              End Date
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={endDate} id="endDate" type="date" onChange={e => setEndDate(e.target.value)} />
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
              Add Sprint
            </button>
          
          </div>
        </form>
      </div>
    </div>
  )
}

export default Sprint