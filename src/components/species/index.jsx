import React, { useState, useEffect} from "react";
import "./index.css";
import "../main_style/index.css";

const Species = () => {
    const[species, setSpecies] = useState({ results: []});

    useEffect(() => {
        const getSpecies = async() => {
            const response = await fetch("https://swapi.dev/api/species");
            let data = await response.json();
            setSpecies({ ...species, results: [...species.results, ...data.results] });
        }
        getSpecies();
        console.log(species);
    }, [])

    return (
        <div className="search_container">
            <div className="search_descr">
                Here you can find all information about species
            </div>
            <div>
                <div className="search_div">
                    <input className="search_input" placeholder="Enter the name of the Species you want to find"></input>
                    <button className="search_button">Search</button>
                </div>
                <div className="columns">
                        {species?.results.map((species, i) => {
                           return (
                               <div key={i}>
                                   <p className="name">
                                       {species.name}
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

export default Species;