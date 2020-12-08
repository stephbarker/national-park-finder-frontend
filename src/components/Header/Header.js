import './Header.css';

function Header(props) {
    return (
        <header className="Header"> 
            <h1>My Project</h1>
            <nav>
                <ul  className="NavLinks"> 
                    <li>Log Out</li>
                    <li>Dashboard</li>
                    <li>Sign Up</li>
                    <li>Log In</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;