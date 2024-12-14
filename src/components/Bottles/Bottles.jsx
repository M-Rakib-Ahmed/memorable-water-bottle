import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
    const [buttols, setBottles] = useState([])
    const [cart, setCart] =useState([])
    useEffect(() =>{
        fetch('bettle.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    }, [])

   const handleAddToCart = bottle =>{
    const newCart = [...cart, bottle]
    setCart(newCart)
    
   }
    return (
        <div>
           <h3>Bottles Available.{buttols.length}</h3> 
           <h4>Cart:{cart.length}</h4>
           <div className="bottle-container">
            {
            buttols.map(bottle => <Bottle
                 key={bottle.id}
                 handleAddToCart ={handleAddToCart}
                  bottle={bottle}></Bottle>)
           }
           </div>
        </div>
    );
};

export default Bottles;