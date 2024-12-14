import './bottle.css'

const Bottle = ({bottle, handleAddToCart}) => {
   const {name, img, price} =bottle 
    
    return (
        <div className="bottle">
          <h3>Bottle {name}</h3>  
          <div>
            <img src={img} alt="" />
          </div>
          <p>Price${price}</p>
          <button onClick={ () =>handleAddToCart(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;