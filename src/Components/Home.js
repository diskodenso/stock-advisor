import React, { useEffect, useState } from 'react'
import Search from "./Search.js";

function Home() {
    const [companies, setCompanies] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const handleChange = (event) => {
        setSearchValue(event.target.value)
    }
    const searchCompanies = async () => {
                console.log(searchValue);
        const response = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchValue}&apikey=D8TXVUDAZHH9GDB1`);
        const data = await response.json();
        setCompanies(data.bestMatches)
        console.log(response);
        console.log(data);
    }
    return (
        <div >
        <div>
            <input type="text" onChange={handleChange} value={searchValue} />
            <button onClick={() => searchCompanies()}>Search...</button>
        </div>
        <div>
                {companies.map(comp)}
        </div>
            </div>
    )
}
export default Home;

// store list in another useState and display 