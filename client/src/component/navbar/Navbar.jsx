import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext'
import './navbar.css';

const Navbar = () => {
  const {user, dispatch} = useContext(AuthContext)
  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <div className='navContainer'>
        <Link to={'/'} className='logo'>KT Booking</Link>
       {user ? (<div className='navItems'>
        <span>{user.username}</span>
        <button onClick={() => dispatch({ type: 'LOGOUT' })} className='navButton'>Logout</button>

       </div>): <div className='navItems'>
          <button className='navButton'>Register</button>
          <button onClick={() => navigate('/login') } className='navButton'>Login</button>
        </div>}
      </div>
    </div>
  );
};

export default Navbar;
