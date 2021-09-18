import React, { useState, useEffect} from "react";
import "./index.css";
import "../main_style/index.css";

const Starships = () => {
    const[starships, setStarships] = useState({ results: []});

    useEffect(() => {
        const getStarships = async() => {
            const response = await fetch("https://swapi.dev/api/starships");
            let data = await response.json();
            setStarships({ ...starships, results: [...starships.results, ...data.results] });
        }
        getStarships();
        console.log(starships);
    }, [])

    return (
        <div className="search_container">
            <div className="search_descr">
                Here you can find all information about starships
            </div>
            <div>
                <div className="search_div">
                    <input className="search_input" placeholder="Enter the name of the Starships you want to find"></input>
                    <button className="search_button">Search</button>
                </div>
                <div className="columns">
                        {starships?.results.map((starships, i) => {
                           return (
                               <div key={i}>
                                   <p className="name">
                                       {starships.name}
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

export default Starships;