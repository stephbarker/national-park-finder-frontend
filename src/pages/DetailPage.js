import Activity from '../components/Activity/Activity';

function DetailPage(props) {
    return (
    <main className='Page'>
          <h1>{props.parkData.fullName}</h1>
          <p>{props.parkData.description}</p>
          <h3>Activites:</h3>
          {props.parkData.activities.map((activity, idx) => (
          <Activity key={idx} activity={activity} />))}
          <a href={props.parkData.url} target="_blank">Visit Park Website</a>
    </main>
  )  
}

export default DetailPage;