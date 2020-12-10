import './Park.css'

function Park(props) {
    return (
        <div>
        <article className='parkcard flex-ctr'>
            <h3>{props.park.fullName}</h3>
        </article>
        </div>
    )
}

export default Park;