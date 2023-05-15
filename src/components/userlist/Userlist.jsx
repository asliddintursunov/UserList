import './Userlist.css';
import PropTypes from 'prop-types'
function Userlist({ users, deleteUser }) {
  return (
    <div className='userslist-container'>
      {users.length === 0 ? <div className='noUser'> 
        <h1>No user</h1>
      </div> : users.map((user) => {
        return <div key={user.id} className='userlist-card'>
          <img src={user.url} />
          <h4>Firstname: {user.Firstname}</h4>
          <h4>Secondname: {user.Secondname}</h4>
          <h4>Age: {user.age}</h4>
          <h5>Job: {user.job}</h5>
          <button onClick={() => deleteUser(user.id)}>Delete</button>
        </div>
      })}
    </div>
  );
}

Userlist.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      Firstname: PropTypes.string,
      Secondname: PropTypes.string,
      age: PropTypes.number,
      job: PropTypes.string,
      id: PropTypes.number
    })
  ),
  deleteUser: PropTypes.func.isRequired
};

export default Userlist;
