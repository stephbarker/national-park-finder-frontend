import {Link} from 'react-router-dom';
import './HomePage.css'

function HomePage(props) {
    return (
       <main className='Page' style={{backgroundImage: `url('./images/npf-background.png')`}}>
           <h1 className="home-logo">California Adventure</h1>
           <p className="home-description">Exploration through CA's National Parks!</p>
            <Link to='/list'>
           <button className='btn btn-light explore-button'>Explore!</button>
           </Link>
       </main>
    )
}

export default HomePage;