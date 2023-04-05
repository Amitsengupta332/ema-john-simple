const cartProductLoader = async() =>{
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();

}

export default cartProductLoader;