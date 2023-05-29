import { useState } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
// import spinningae86 from '../app/assets/img/spinningae86logo.gif';
import gaugerevving from '../app/assets/img/gauge-rev.gif'
// import UserLoginForm from '../features/user/UserLoginForm';
import './Header.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <NavbarBrand href='/'>
                <div className='logo'>
                <img src={gaugerevving} alt='gaugerevving'/>
                </div>

                
            </NavbarBrand>
            <NavbarBrand>
            <div className='navbar-title'>
                    <h1>TurboUp!</h1>
                </div>
            </NavbarBrand>

            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' /> Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/directory'>
                            <i className='fa fa-list fa-lg' /> Directory
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/about'>
                            <i className='fa fa-info fa-lg' /> About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className='nav-link' to='/contact'>
                            <i className='fa fa-address fa-lg' /> Contact
                        </NavLink>
                    </NavItem>
                </Nav>
                {/* <UserLoginForm/> */}
            </Collapse>
        </Navbar>
        
    );
    
}

export default Header;