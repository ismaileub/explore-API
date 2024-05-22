const user = { id: 1, name: 'jaber', job: 'actor' };
//JavaScript Object Notation(JSON)
const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop = {
    owner: 'alia',
    address: {
        street: 'Buter goli',
        city: 'Dhaka',
        country: 'BD'
    },
    product: ['laptop', 'mic', 'keyboard', 'mouse', 'monitor'],
    revenue: 45000,
    isOpen: true,
    isNew: false

};

const shopJeson = JSON.stringify(shop);
console.log(shop);
console.log(shopJeson);
const shopObj = JSON.parse(shopJeson);
console.log(shopObj);