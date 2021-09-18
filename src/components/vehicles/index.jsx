import React, { useState, useEffect} from "react";
import "./index.css";
import "../main_style/index.css";

const Vehicles = () => {
    const[vehicles, setVehicles] = useState({ results: []});

    useEffect(() => {
        const getVehicles = async() => {
            const response = await fetch("https://swapi.dev/api/vehicles");
            let data = await response.json();
            setVehicles({ ...vehicles, results: [...vehicles.results, ...data.results] });
        }
        getVehicles();
        console.log(vehicles);
    }, [])

    return (
        <div className="search_container">
            <div className="search_descr">
                Here you can find all information about vehicles
            </div>
            <div>
                <div className="search_div">
                    <input className="search_input" placeholder="Enter the name of the Vehicles you want to find"></input>
                    <button className="search_button">Search</button>
                </div>
                <div className="columns">
                        {vehicles?.results.map((vehicles, i) => {
                           return (
                               <div key={i}>
                                   <p className="name">
                                       {vehicles.name}
                                   </p>
                               </div>
                           ) 
                        })}
                </div>  
                <button className="addMore_button">Add more</button> 
            </div>       
        </div>
    );
};

export default Vehicles;