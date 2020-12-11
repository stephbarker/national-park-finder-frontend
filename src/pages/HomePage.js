import Park from '../components/Park/Park';


function HomePage(props) {
    return (
    <main className='Page'>
        <h1>National Park Finder</h1>
        <section className='collection'>
        {props.parkData.data.map((park, idx) => (
          <Park key={idx} park={park} />
        ))} 
        </section>
    </main>
  );  
}

export default HomePage;