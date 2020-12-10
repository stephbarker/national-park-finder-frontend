import './Park.css'
import {Link} from 'react-router-dom';

const Park = ({park}) => {
    return (
        <div>
        <Link to='/detail'>
        <article className='parkcard flex-ctr'>
            <h3>{park.fullName}</h3>
        </article>
        </Link>
        </div>
    )
}

export default Park;