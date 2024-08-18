import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Logo.png'

const Nav = () => {
    return (
        <div className='navbar absolute'>
            <div className=" bg-transparent container mx-auto">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl"><img src={logo} alt="" /></a>
            </div>
            <div className="flex-none">
                <ul id='sidebar' className="menu menu-horizontal px-1 text-lg font-bold">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink className='mx-6' to='/donation'>Donation</NavLink>
                    <NavLink to='/statistics'>Statistics</NavLink>
                    
                </ul>
            </div>
        </div>
        </div>
    );
};

Nav.propTypes = {

};

export default Nav;