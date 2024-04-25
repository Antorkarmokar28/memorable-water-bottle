import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/bottle";
import './bottles.css'
import { addToLocalStorage, deleteItemToLS, getItemStoredCart } from "../../uitilities/local-storage";
import Cart from "../cart";


const Bottles = () => {

    const [bottles, setBottles] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);

    useEffect(() => {
        console.log('Defendence effect', bottles.length)
        if (bottles.length) {
            const getStored = getItemStoredCart();
            const saveCart = [];
            for (const id of getStored) {
                const bottle = bottles.find(bottle => bottle.id === id)
                if(bottle) {
                    saveCart.push(bottle)
                }
            }
            setCart(saveCart)
        }
    }, [bottles])

    const handleBottle = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart)
        addToLocalStorage(bottle.id)
    }

    const handleDeleteItemFromLS = id => {

        const remainingCart = cart.filter( bottle => bottle.id !== id)
        setCart(remainingCart);
        deleteItemToLS(id);
    }

    return (
        <div>
            <Cart cart={cart}  handleDeleteItemFromLS={handleDeleteItemFromLS} ></Cart>
            <div className="bottles">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleBottle={() => handleBottle(bottle)}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;