import './NavBar.css';


function NavBar() {
    return (
        <nav>
            <img src="https://freesvg.org/img/tikigiki_filmstrip-01.png" id="logo" alt="logo" />
            <h1>Celluloid</h1>
            <div id='navbar-sections'>
                <button class="nav-button">Explorar</button>
                <button class="nav-button">Favoritos</button>
                <button class="nav-button">Mi Cuenta</button>
            </div>
            
        </nav>
    );

}

export default NavBar;