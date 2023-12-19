import {Navbar, Nav, NavLink} from 'react-bootstrap';

const MyNav = () => (
    <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>EpiBooks</Navbar.Brand>
        <Nav className='mr-auto'>
            <NavLink href='#Shop'>Shop</NavLink>
            <NavLink href='#About'>About</NavLink>
            <NavLink href='#browse'>Browse</NavLink>
        </Nav> 
    </Navbar>
)

export default MyNav;