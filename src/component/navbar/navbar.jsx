import Home from '../home/home';
import './navbar.css'

function Navbar() {
    return (<>
        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Portefolio</a>
            <a href="#">Contact</a>
            <div class="animation start-home"></div>
        </nav>
    </>);
}

export default Navbar;