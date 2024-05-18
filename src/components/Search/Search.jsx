import {useState} from 'react'
const Search = () => {
    const [search, searchValue] = useState('');
    const handleChange = (e) => {
        searchValue(e.target.value);
    }
    const url = '/results/';

    return <div>
            <center>
                <h1>
                    Search Movie
                </h1>
                <form action={url + search}>
                    <input type="search"  value={search} onChange={handleChange} placeholder='Search'/>
                </form>
            </center>
        </div>
}
export default Search;