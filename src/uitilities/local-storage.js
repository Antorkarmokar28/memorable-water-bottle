const getItemStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString)
    }
    return [];
}

const saveToItemFromLS = cart =>{
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addToLocalStorage = id =>{
    const cart = getItemStoredCart();
    cart.push(id)
    saveToItemFromLS(cart)
}
const deleteItemToLS = id =>{
    const cart = getItemStoredCart();
    const remaining = cart.filter( idx => idx !== id);
    saveToItemFromLS(remaining)
}
export { addToLocalStorage, getItemStoredCart, deleteItemToLS }