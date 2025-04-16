import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import NotSearchResults from './NotSearchResults';
import SearchResults from './SearchResults';

const Homepage = () => {

    const [value, setValue] = useState('doctors');
    const [searchResults, setSearchResults] = useState([]);
    const [data, setData] = useState([]);
    const [searching, setSearching] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:3001/${value}`).then(res => setData(res.data)).catch(err => console.log(err));
    }, []);

    const retrieveData = data => {
        axios.get(`http://localhost:3001/${data}`).then(res => setData(res.data)).catch(err => console.log(err));
    }

    const handleClick = e => {
        setValue(e.target.value);
        retrieveData(e.target.value);
    }

    useEffect(() => {
        console.log(searchResults);
    }, [searchResults])

    const onSearchTermEnter = e => {
        e.preventDefault();
        setSearchResults([]);
        if(searching) {
        const results = data.filter(item => {
            for(const property in item) {
             //console.log(typeof(property), property, item[property]);
             if(Array.isArray(item[property])) {
                 for(let i = 0; i < item[property].length; i++)
                     if(String(item[property][i]).toLowerCase().includes(e.target.value)) {
                         //console.log(item, item[property][i]);
                         return item
                     }
             }
             else if(typeof(item[property]) == 'object') {
                 //console.log(item[property], 'entered');
                 for(const subProperty in item[property]) {
                     //console.log(subProperty, item[property][subProperty]);
                     if(String(item[property][subProperty]).toLowerCase().includes(e.target.value)) {
                         //console.log(item[property][subProperty]);
                         return item;
                     }
                 }
             }
             else {
                 if(String(item[property]).toLowerCase().includes(e.target.value)) {
                     //console.log(item[property], item);
                     return item
                 }
            }
        }})
        setSearchResults(results);
        //if()
        //console.log(searchResults, typeof(searchResults));
        }
    }

    const disableSearch = () => {
        setSearching(false);
        setSearchResults([]);
    }

    const enableSearch = () => {
        setSearching(true);
    }

    return (
        <>
        <div className='jumbotron-wrapper'>
            <div className="jumbotron">
                <h2>Buy Medicines and Essentials</h2>
                <form>
                    <input onFocus={enableSearch} onBlur={disableSearch} onChange={onSearchTermEnter} name='search' className='search-bar' type='search' placeholder='Search Medicines' />
                    <label htmlFor='selectsearch'>Search...</label>
                    <select onChange={handleClick} name='selectsearch'>
                        <option value='doctors'>Doctors</option>
                        <option value='hospitals'>Hospitals</option>
                        <option value='pharmacies'>Pharmacies</option>
                        <option value='laboratories'>Laboratories</option>
                        <option value='medicines'>Medicines</option>
                    </select>
                </form>
            </div>
        </div>
         <main>
            {
                !searching ?
                <NotSearchResults />
                :
                <SearchResults data = {data} searchResults= {searchResults ? searchResults : null} />
            }
        </main>
    </>
    )
}

export default Homepage