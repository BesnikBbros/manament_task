import { Header } from './components'
import {  Sprint, AllSprint, AllTicketSprint, AllTicket} from './pages'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <div>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Sprint />} />
        <Route path='/getAllSprint' element={<AllSprint />} />
        <Route path='/getTicketSprint/:id' element={<AllTicketSprint />} />
        <Route path='/allTicket' element={<AllTicket />} />
      </Routes>
    </div>
  )
}

export default App
