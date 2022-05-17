import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {
    return (
        <nav>
            <img src="https://freesvg.org/img/tikigiki_filmstrip-01.png" className="logo" alt="logo" />
            <h1 className='name'>Celluloid</h1>
            <div className='navbar-sections'>
                <button className="nav-button">Explorar</button>
                <button className="nav-button">Favoritos</button>
                <button className="nav-button">Mi Cuenta</button>
            </div>
            <CartWidget/>
            
        </nav>
    );

}

export default NavBar;