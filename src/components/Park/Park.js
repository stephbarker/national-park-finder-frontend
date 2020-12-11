import './Park.css'
import {Link} from 'react-router-dom';

const Park = (props) => {
    return (
        <div>
        <Link to={`/parks/${props.park.id}`}>
        <article className='parkcard flex-ctr'>
            <h3>{props.park.fullName}</h3>
        </article>
        </Link>
        </div>
    )
}

export default Park;