import PropTypes from "prop-types";

function Random({min, max}){
    
    const references = Math.floor( Math.random( )*(max-min) ) + min;
   
    return (
       <div className="separation">
        <p>Random value between { min } and { max } = { references }</p>
        </div>
    )
}

Random.propTypes = {
                    min: PropTypes.number,
                    max: PropTypes.number, 
}

export default Random;
