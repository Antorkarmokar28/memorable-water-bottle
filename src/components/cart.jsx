import PropTypes from 'prop-types';
import './cart.css'

const Cart = ({ cart, handleDeleteItemFromLS }) => {
    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Add Product: {cart.length}</h2>
            <div className="cart-img">
                {
                    cart.map(Bottle => <div key={Bottle.id}>
                        <img src={Bottle.img}></img>
                        <button onClick={ () => handleDeleteItemFromLS(Bottle.id)}>Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleDeleteItemFromLS: PropTypes.func.isRequired
}

export default Cart;