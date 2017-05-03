import Products from 'data/products';

const prices = [
    30,
    25,
    2
]

function getPrice(item, numberOfItems) {
    if (item === Products.Bag) {
        return prices[1] * numberOfItems
    } else if (item === Products.Tshirt) {
        return prices[0] * numberOfItems;
    } else if (item === Products.Digital) {
        return prices[2] * numberOfItems;
    } else {
        return 0;
    }
}

const Pricing = {
    getPrice: getPrice
}

export default Pricing;