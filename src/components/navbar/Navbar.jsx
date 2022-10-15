import "./navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{color: 'inherit', textDecoration: 'none'}}>
                    <span className="logo">Little Angels School</span>
                </Link>
                
                <div className="navItems">
                    <Link to="/contact">
                        <button className="navButton">Contact</button>
                    </Link>
                    <Link to="/register">
                        <button className="navButton">Register</button>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar