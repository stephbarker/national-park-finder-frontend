import Park from '../components/Park/Park';
import Search from '../components/Search/Search';

function HomePage(props) {
    return (
    <main className='Page'>
        <h1>National Park Finder</h1>
        <Search />
        <section className='collection'>
        {props.parkData.data.map((park, idx) => (
          <Park key={idx} park={park} />
        ))} 
        </section>
    </main>
  );  
}

export default HomePage;