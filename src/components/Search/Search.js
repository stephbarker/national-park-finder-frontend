import {useState} from 'react';

function Search(props) {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        searchValue('')
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return(
        <form className="search">
            <input 
                value={searchValue} 
                onChange={handleSearchInputChanges}
                type="text" 
                placeholder="State e.g CA" />
            <input 
                className='btn-default' 
                type="submit"
                onClick={callSearchFunction} 
                value="Search!" />
        </form>
    );
}
export default Search;