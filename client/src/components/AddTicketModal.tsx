import { useState,MouseEvent } from 'react'
import { useThemeContext } from '../context/TheemContext';
import { useParams } from 'react-router-dom';
import api from '../api';
const AddTicketModal = () => {
    const { id } = useParams();
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const { toggleOpen } = useThemeContext()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = { name, description , sprintId: id};
        api("/api/ticket", "POST", data)
            .then(response => console.log(response))
            .catch(err => console.log(err))
    };

    const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        toggleOpen();
      };
      
    return (
        <div className=''>
            <div className=" flex justify-center ">
                <div className="w-[600px] md:h-auto">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Add A Ticket
                            </h3>
                            <button type="button" onClick={handleOnClick} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                            <div className="p-6 space-y-6">

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                        Name
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" onChange={e => setName(e.target.value)} />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                        Description
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" onChange={e => setDescription(e.target.value)} />
                                </div>
                            </div>
                            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button data-modal-hide="defaultModal" type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Ticket</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTicketModal