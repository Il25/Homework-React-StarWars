import React, { useState, useEffect} from "react";
import "./index.css";
import "../main_style/index.css";

const Planets = () => {
    const[planets, setPlanets] = useState([]);
    const [count,setCount] = useState(1);
    const [addUrl,setAddUrl] = useState(false);
        
    const getPlanets = async(url) => {
        const response = await fetch(url);
        let data = await response.json();
        setPlanets([...planets, ...data.results]);
        setAddUrl(data.next);
    };

    useEffect(() => {
        getPlanets("https://swapi.dev/api/planets");
    }, []);

    useEffect(() => {
        getPlanets(addUrl);
    }, [count]);

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
                        {planets?.map((planets, i) => {
                           return (
                               <div key={i}>
                                   <p className="name">
                                       {planets.name}
                                   </p>
                               </div>
                           ) 
                        })}
                </div>  
                <button className="addMore_button" disabled={count > 5} onClick={() => setCount(count + 1)}>Add more</button> 
            </div>       
        </div>
    );
};

export default Planets;