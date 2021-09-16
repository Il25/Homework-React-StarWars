import React from "react";
import "./index.css";
import "../main_style/index.css";

const People = () => {
    return (
        <div className="search_container">
            <div className="search_descr">
                Here you can find all information about your favorite characters
            </div>
            <div>
            <div className="search_div">
                <input className="search_input" placeholder="Please enter what do you want to find"></input>
                <button className="search_button">Search</button>
            </div>
            </div>
        </div>
    );
};

export default People;