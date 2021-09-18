import React, { useState, useEffect} from "react";
import "./index.css";
import "../main_style/index.css";

const People = () => {
    const[people, setPeople] = useState([]);
    const [count,setCount] = useState(1);
    const [addUrl,setAddUrl] = useState(false);

    const getPeople = async(url) => {
        const response = await fetch(url);
        let data = await response.json();
        setPeople([...people, ...data.results]);
        setAddUrl(data.next)
        console.log(data.next)
    }

    useEffect(() => {
        getPeople("https://swapi.dev/api/people");
    }, [])
    
    useEffect(() => {
        getPeople(addUrl);
        console.log("next", addUrl)
    }, [count])

    return (
        <div className="search_container">
            <div className="search_descr">
                Here you can find all information about your favorite characters
            </div>
            <div>
                <div className="search_div">
                    <input className="search_input" placeholder="Enter the name of the Characters you want to find"></input>
                    <button className="search_button">Search</button>
                </div>
                <div className="columns">
                        {people?.map((people, i) => {
                           return (
                               <div key={i}>
                                   <p className="name">
                                       {people.name}
                                   </p>
                               </div>
                           ) 
                        })}
                </div>  
                <button className="addMore_button" onClick={() => setCount(count + 1)}>Add more</button> 
            </div>       
        </div>
    );
};

export default People;