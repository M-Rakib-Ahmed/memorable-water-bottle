import './bottle.css'

const Bottle = ({bottle}) => {
   const {name, img, price, category} =bottle 
    
    return (
        <div className="bottle">
          <h3>Bottle {name}</h3>  
          <img src={img} alt="" />
          <span>Price${price}</span>
        </div>
    );
};

export default Bottle;