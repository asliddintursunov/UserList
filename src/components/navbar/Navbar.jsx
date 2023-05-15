import './Navbar.css'
function Navbar({usersLength}) {
  return (
    <nav>
      <h2>CUser</h2>
      {usersLength >=1 ? <h3>Users: {usersLength}</h3> : <h3>No users :(</h3>}
    </nav>
  )
}

export default Navbar