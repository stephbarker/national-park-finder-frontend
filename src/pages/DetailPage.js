import Activity from '../components/Activity/Activity';
import './DetailPage.css';

function DetailPage(props) {
    return (
    <main className='Page'>
          <h1 className='detail-title'>{props.parkData.fullName}</h1>
          <p className='detail-description'>{props.parkData.description}</p>
          <a className='park-website' href={props.parkData.url} target="_blank">Visit Park Website</a>
          <section className='activity-weather-ctr'>
            <section className='all-weather'>
          <h3 className='weather-title'>Weather Info</h3>
          <p className='weather-info'>{props.parkData.weatherInfo}</p>
          </section>
          <section className='all-activities'>
          <h3 className='activities-title'>Activites</h3>
          <section className='activities-block'>
          {props.parkData.activities.map((activity, idx) => (
          <Activity key={idx} activity={activity} />))}
          </section>
          </section>
          </section>
    </main>
  )  
}

export default DetailPage;