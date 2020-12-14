import './Footer.css';

function Footer(props) {
    return (
        <footer className='Footer'>
           <p>Copyright &copy; California Adventure {new Date().getFullYear()} All Rights Reserved</p>
        </footer>
    )
}

export default Footer;