import React, { useState, useEffect} from "react";
import "./index.css";
import "../main_style/index.css";

const Films = () => {
    const[films, setFilms] = useState([]);

    const getFilms = async(url) => {
        const response = await fetch(url);
        let data = await response.json();
        setFilms([...films, ...data.results]);
    };

    useEffect(() => {
        getFilms("https://swapi.dev/api/films");
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
                        {films?.map((films, i) => {
                           return (
                               <div key={i}>
                                   <p className="name">
                                       {films.title}
                                   </p>
                               </div>
                           ) 
                        })}
                </div> 
            </div>       
        </div>
    );
};

export default Films;