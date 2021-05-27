import React, { useEffect, useState, useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { companiesContext } from "../Context/detailContext.js";

function Home() {
 const [companies, setCompanies] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const handleChange = (event) => {
        setSearchValue(event.target.value)
    }
    const searchCompanies = async (event) => {
        console.log(searchValue);
        setSearchValue(event.target.value)
        const response = await fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${event.target.value}&apikey=D8TXVUDAZHH9GDB1`);
        const data = await response.json();
        setCompanies(data.bestMatches)
        console.log(response);
        console.log(data);
    }
    console.log(companies);
    return (
        <div >
        <div>
            <input type="text" onChange={searchCompanies} value={searchValue} placeholder="Search Companies..."/>
            {/* <button onClick={() => searchCompanies()}>Search...</button> */}
        </div>
            <div>
                {companies.length !== 0 && companies.map(company => (
                <Link to = {`/detail/${company["1. symbol"]}`}> {company["2. name"]} </Link>
                ))}
        </div>
            </div>
    )
}
export default Home;

// store list in another useState and display 