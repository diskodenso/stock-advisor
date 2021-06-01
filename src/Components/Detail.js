import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import React, { useEffect, useState, useContext, createContext } from 'react'
import { CompaniesContext } from "../Context/detailContext.js";

function Detail(props) {
    const { symbol } = useParams()
    const [company, setCompany] = useState(null)
 const { companies } = useContext(CompaniesContext)
    const searchProfile = async () => {
        try {
            const response = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=D8TXVUDAZHH9GDB1`);
        const data = await response.json();
        setCompany(data);
        console.log(response);
        console.log(data);
        } catch(err) {
            console.log(err)
        }
        
    }

    useEffect(() => {
        searchProfile();
    }, []);
    // console.log(company.Description)
    return (
        <div>
            {company !== null && (<div>
                <p>{company.Name}</p>
                <p> Stock Market Symbol: {company.Symbol} </p>
                <p>{company.Description}</p>
            </div> )}
        </div>
    )
}
export default Detail;
// context only in fetch of second page
// fetch the api showing company facts
// use companyName in URL 
// render informations of results - safe company information in useState
// afterwards move it to the context page