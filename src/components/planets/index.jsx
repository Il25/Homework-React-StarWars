import React, { useState, useEffect} from "react";
import "./index.css";
import "../main_style/index.css";
import { Link } from "react-router-dom";

const Planets = () => {
    const[planets, setPlanets] = useState([]);
    const [count,setCount] = useState(1);
    const [addUrl,setAddUrl] = useState(false);
    const [searchPlanets, setSearchPlanets] = useState("");
        
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
                    <input type="text" className="search_input" placeholder="Enter the name of the Planets you want to find" onChange={(event) => setSearchPlanets(event.target.value)}></input>
                </div>
                {planets?.filter((planets) => {
                    if(searchPlanets === "") {
                        return planets
                    } else if(planets.name.toLowerCase().includes(searchPlanets.toLowerCase())) {
                        return planets
                    }
                }).map((planets, i) => {
                    let planetUrl = planets.url;
                    var r = /\d+/; 
                    const num = planetUrl.match(r); 
                    return (
                        <div className="columns">
                            <div key={i}>
                                <p className="name">
                                    <Link to={`/planets/${num[0]}`}>
                                        {planets.name}
                                    </Link>
                                </p>
                            </div>
                        </div>  
                    ) 
                })} 
                <button className="addMore_button" disabled={count > 5} onClick={() => setCount(count + 1)}>Add more</button> 
            </div>       
        </div>
    );
};

export default Planets;