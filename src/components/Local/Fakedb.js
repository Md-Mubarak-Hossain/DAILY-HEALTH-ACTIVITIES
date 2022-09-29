const addToDb = (time) => {
    const quantity = localStorage.getItem(time);
    if (quantity) {
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(time, newQuantity);
    }
    else {
        localStorage.setItem(time, 1);
    }
}
