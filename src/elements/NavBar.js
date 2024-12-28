import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div class="navbar">
      <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
        Home
      </NavLink>
      <NavLink to="/friends" className={({ isActive }) => (isActive ? 'active' : '')}>
        Friends
      </NavLink>
      <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}>
        My Profile
      </NavLink>
    </div>
  )
}

export default NavBar;