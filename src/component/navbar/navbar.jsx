import './navbar.css'

function Navbar() {
    return (<>
        <nav>
            <a href="#">Home</a>
            <a href="#">Food</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <a href="#">Donate</a>
            <div class="animation start-home"></div>
        </nav>
    </>);
}

export default Navbar;