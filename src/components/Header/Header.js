import {Link} from 'react-router-dom';
import './Header.css';

function Header(props) {
    let nav = props.user ?
    <header className="Header">
            <Link to='/'>
            <h1>My Project</h1>
            </Link>
            <nav>
                <ul className="NavLinks"> 
                    <li><Link to='' onClick={props.handleLogout}>Log Out</Link></li>
                    <li><Link to='/dashboard'>Dashboard</Link></li>
                </ul>
            </nav>
        </header>
        :
        <header className="Header">
            <Link to='/'>
            <h1>My Project</h1>
            </Link>
            <nav>
                <ul className="NavLinks"> 
                    <li><Link to='/signup'>Sign Up</Link></li>
                    <li><Link to='/login'>Log In</Link></li>
                </ul>
            </nav>
        </header>

    return (
        <header>
            {nav}
        </header>
    );
}

export default Header;