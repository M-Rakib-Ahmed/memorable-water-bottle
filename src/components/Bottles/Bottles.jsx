import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
    const [buttols, setBottles] = useState([])
    useEffect(() =>{
        fetch('bettle.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])
    return (
        <div>
           <h3>Bottles Here {buttols.length}</h3> 
           <div className="bottle-container">
            {
            buttols.map(bottle => <Bottle key={bottle.id} bottle={bottle}></Bottle>)
           }
           </div>
        </div>
    );
};

export default Bottles;