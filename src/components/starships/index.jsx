import React, { useState, useEffect} from "react";
import "./index.css";
import "../main_style/index.css";

const Starships = () => {
    const[starships, setStarships] = useState([]);
    const [count,setCount] = useState(1);
    const [addUrl,setAddUrl] = useState(false);

    const getStarships = async(url) => {
        const response = await fetch(url);
        let data = await response.json();
        setStarships([...starships, ...data.results]);
        setAddUrl(data.next);
    };    

    useEffect(() => {
        getStarships("https://swapi.dev/api/starships");
    }, []);

    useEffect(() => {
        getStarships(addUrl);
    }, [count]);

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
                        {starships?.map((starships, i) => {
                           return (
                               <div key={i}>
                                   <p className="name">
                                       {starships.name}
                                   </p>
                               </div>
                           ) 
                        })}
                </div>  
                <button className="addMore_button" disabled={count > 3} onClick={() => setCount(count + 1)}>Add more</button> 
            </div>       
        </div>
    );
};

export default Starships;