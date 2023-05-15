import { useState } from 'react'
import './Newuser.css'

function Newuser({ addNewUser, toggleModal, usersLength }) {
  const [newUser, setNewUser] = useState({
    Firstname: '',
    Secondname: '',
    age: null,
    job: '',
    id: usersLength + 1,
    url: ''
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewUser(newUser)
    toggleModal()
  }
  return (
    <div>
      <div className='modal'>
        <h2>Add New User!</h2>
        <form onSubmit={handleSubmit}>
        <label>
            <input type="text" placeholder='URL' onChange={(e) => setNewUser((prev) => {
              return { ...prev, url: e.target.value }
            })} value={newUser.url} required />
          </label>
          <label>
            <input type="text" placeholder='First name' onChange={(e) => setNewUser((prev) => {
              return { ...prev, Firstname: e.target.value }
            })} value={newUser.Firstname} required />
          </label>
          <label>
            <input type="text" placeholder='Second name' onChange={(e) => setNewUser((prev) => {
              return { ...prev, Secondname: e.target.value }
            })} value={newUser.Secondname} required />
          </label>
          <label>
            <input type="number" placeholder='Age' onChange={(e) => setNewUser((prev) => {
              return { ...prev, age: e.target.value }
            })} required />
          </label>
          <label>
            <input type="text" placeholder='Job' onChange={(e) => setNewUser((prev) => {
              return { ...prev, job: e.target.value }
            })} value={newUser.job} required />
          </label>
          <button>Add!</button>
        </form>
      </div>
    </div>
  )
}

export default Newuser