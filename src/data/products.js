/**
 * Products
 * 
 * use _STRING_, because of conversion in localStorage
 * @todo: remove after rebuilding with redux
 */

const Products = {
    Bag: "0",
    Digital: "1",
    Tshirt: "2",
    toString: toString
}

function toString(str) {
    if (str === Products.Bag)
        return "bag";
    else if (str === Products.Digital)
        return "digital";
    else if (str === Products.Tshirt)
        return "tshirt";
    
    return "undefined";
}

export default Products;