import './Activity.css';

function Activity(props) {
    return(
        <div className='activities'>
            <ul>
                <li>
                {props.activity.name}
                </li>
            </ul>
   
        </div>
    )
}

export default Activity;