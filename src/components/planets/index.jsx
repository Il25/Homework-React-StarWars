import React from "react";
import "./index.css";
import "../main_style/index.css";

const Planets = () => {
    return (
        <div className="search_container">
            <div className="search_descr">
                Here you can find all information about planets
            </div>
            <div>
            <input className="search_input" placeholder=""></input>
            <button className="search_button">Search</button>
            </div>
        </div>
    );
};

export default Planets;