import React, { useState, useEffect} from "react";
import "./index.css";
import "../main_style/index.css";

const Planets = () => {
    const[planets, setPlanets] = useState({ results: []});

    useEffect(() => {
        const getPlanets = async() => {
            const response = await fetch("https://swapi.dev/api/planets");
            let data = await response.json();
            setPlanets({ ...planets, results: [...planets.results, ...data.results] });
        }
        getPlanets();
        console.log(planets);
    }, [])

    return (
        <div className="search_container">
            <div className="search_descr">
                Here you can find all information about planets
            </div>
            <div>
                <div className="search_div">
                    <input className="search_input" placeholder="Enter the name of the Planets you want to find"></input>
                    <button className="search_button">Search</button>
                </div>
                <div className="columns">
                        {planets?.results.map((planets, i) => {
                           return (
                               <div key={i}>
                                   <p className="name">
                                       {planets.name}
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

export default Planets;