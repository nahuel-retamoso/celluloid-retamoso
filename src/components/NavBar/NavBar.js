import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <nav>
            <img src="https://freesvg.org/img/tikigiki_filmstrip-01.png" className="logo" alt="logo" />
            <Link className='name' to='/'>Celluloid</Link>
            <div className='navbar-sections'>
                <Link className="nav-button" to='/category/b&w' >Black and White</Link>
                <Link className="nav-button" to='/category/color' >Color</Link>
            </div>
            <CartWidget/>
            
        </nav>
    );

}

export default NavBar;