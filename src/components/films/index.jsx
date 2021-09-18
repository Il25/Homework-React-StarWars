import React, { useState, useEffect} from "react";
import "./index.css";
import "../main_style/index.css";

const Films = () => {
    const[films, setFilms] = useState({ results: []});

    useEffect(() => {
        const getFilms = async() => {
            const response = await fetch("https://swapi.dev/api/films");
            let data = await response.json();
            setFilms({ ...films, results: [...films.results, ...data.results] });
        }
        getFilms();
    }, [])

    return (
        <div className="search_container">
            <div className="search_descr">
                Here you can find all information about films
            </div>
            <div>
                <div className="search_div">
                    <input className="search_input" placeholder="Enter the name of the Films you want to find"></input>
                    <button className="search_button">Search</button>
                </div>
                <div className="columns">
                        {films?.results.map((films, i) => {
                           return (
                               <div key={i}>
                                   <p className="name">
                                       {films.name}
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

export default Films;