import React, { useState, useEffect} from "react";
import "./index.css";
import "../main_style/index.css";

const Species = () => {
    const[species, setSpecies] = useState([]);
    const [count,setCount] = useState(1);
    const [addUrl,setAddUrl] = useState(false);
    const [searchSpecies, setSearchSpecies] = useState("");

    const getSpecies = async(url) => {
        const response = await fetch(url);
        let data = await response.json();
        setSpecies([...species, ...data.results]);
        setAddUrl(data.next);
    };

    useEffect(() => {
        getSpecies("https://swapi.dev/api/species");
    }, []);

    useEffect(() => {
        getSpecies(addUrl);
    }, [count]);

    return (
        <div className="search_container">
            <div className="search_descr">
                Here you can find all information about species
            </div>
            <div>
                <div className="search_div">
                    <input tupe="text" className="search_input" placeholder="Enter the name of the Species you want to find" onChange={(event) => setSearchSpecies(event.target.value)}></input>
                </div>
                {species?.filter((species) => {
                    if(searchSpecies == "") {
                        return species
                    } else if(species.name.toLowerCase().includes(searchSpecies.toLowerCase())) {
                        return species
                    }
                }).map((species, i) => {
                    return (
                        <div className="columns">
                            <div key={i}>
                                <p className="name">
                                    {species.name}
                                </p>
                            </div>
                        </div> 
                    ) 
                })}
                <button className="addMore_button" disabled={count > 3} onClick={() => setCount(count + 1)}>Add more</button> 
            </div>       
        </div>
    );
};

export default Species;