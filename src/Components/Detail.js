import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'

function Detail(props) {
    const { companyName } = useParams()
    const [ company, setCompany ] = useState({})

    const searchProfile = async () => {
        const response = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${companyName}&apikey=D8TXVUDAZHH9GDB1`);
        const data = await response.json();
        setCompany(data);
        console.log(response);
        console.log(data);
    }

    useEffect(() => {
        searchProfile();
    }, []);
    console.log(companyName)
    return (
        <div>

            <p>{companyName}</p>
            {/* <p>{company.description}</p> */}
            <p>Details Page</p>
        </div>
    )
}
export default Detail;
// context only in fetch of second page
// fetch the api showing company facts
// use companyName in URL 
// render informations of results - safe company information in useState
// afterwards move it to the context page