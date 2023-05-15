import './App.css'
import { useState } from 'react'
import Navbar from '../navbar/Navbar'
import Userlist from '../userlist/Userlist'
import Newuser from '../newuser/Newuser'
import Modal from '../modal/Modal'
import Footer from '../footer/Footer'
function App() {
  
  //* ==============================================
  const [users, setUsers] = useState([ ])
  const [showModal, setShowModal] = useState(true)
  //* ==============================================
  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id
      })
    })
  }
  window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      setShowModal(true)
    }
  })
  const addNewUser = (NewUser) => {
    setUsers((prev) => {
      return [...prev, NewUser]
    })
  }

  const toggleModal = () => {
    showModal ? setShowModal(false) : setShowModal(true)
  }

  //* ==============================================
  return (
    <div className='App'>
      <Navbar usersLength={users.length}/>
      <Userlist users={users}  deleteUser={deleteUser}/>
      {!showModal && <Modal>
        <Newuser addNewUser={addNewUser} toggleModal={toggleModal}
          usersLength={users.length}
        />
      </Modal>}
      {showModal && <button className='showModalButton' onClick={() => toggleModal()}>Show Modal</button>}
      <Footer />
    </div>
  )
}

export default App
