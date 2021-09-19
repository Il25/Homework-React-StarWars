import React, { useState, useEffect} from "react";
import "./index.css";
import "../main_style/index.css";

const Films = () => {
    const[films, setFilms] = useState([]);
    const [searchFilms, setSearchFilms] = useState("");

    const getFilms = async(url) => {
        const response = await fetch(url);
        let data = await response.json();
        setFilms([...films, ...data.results]);
    };

    useEffect(() => {
        getFilms("https://swapi.dev/api/films");
    }, []);

    return (
        <div className="search_container">
            <div className="search_descr">
                Here you can find all information about films
            </div>
            <div>
                <div className="search_div">
                    <input type="text" className="search_input" placeholder="Enter the name of the Films you want to find" onChange={(event) => setSearchFilms(event.target.value)}></input>
                </div>
                {films?.filter((films) => {
                    if(searchFilms == "") {
                        return films
                    } else if(films.title.toLowerCase().includes(searchFilms.toLowerCase())) {
                        return films
                    }
                }).map((films, i) => {
                    return (
                        <div className="columns films">
                            <div key={i}>
                                <p className="name">
                                    {films.title}
                                </p>
                            </div>
                        </div> 
                    ) 
                })} 
            </div>       
        </div>
    );
};

export default Films;