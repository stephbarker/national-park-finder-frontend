import Park from '../components/Park/Park';
import './ListPage.css';

function ListPage(props) {
    return (
    <main className='Page'>
        <h1 className='list-title'>National Parks in CA</h1>
        <section className='collection'>
        {props.parkData.data.map((park, idx) => (
          <Park key={idx} park={park} />
        ))} 
        </section>
    </main>
  );  
}

export default ListPage;