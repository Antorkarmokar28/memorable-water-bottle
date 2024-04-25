import PropTypes from 'prop-types';
import './botle.css'

const Bottle = ({bottle, handleBottle}) => {

    const {name, img, price} = bottle;

    return (
        <div className="bottle">
            <h2>Name: {name}</h2>
            <img style={{width:'200px'}} src={img} alt="" />
            <h3>Price: ${price}</h3>
            <button onClick={handleBottle} className='purches-btn'>Purches</button>
        </div>
    );
};

Bottle.propTypes = {
    bottle: PropTypes.object.isRequired,
    handleBottle: PropTypes.func.isRequired
}

export default Bottle;