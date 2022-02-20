const fish = { id: 123, name: 'hilsa', price: 1200, phone: 010000000, address: 'padma', dress: 'silver' };

const { id, price, name, dress, address } = fish;
console.log(id, price, address);

const company = {
    name: 'raimbo',
    start: 2012,
    ceo: 'raimbos',
    web: {
        sector: 'IT',
        work: 'web dev.',
        language: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    }
}

const { first, second } = company.web.language;

console.log(first, second);
function min(nums) { return Math.min(nums) }
console.log(min([1, 3, 2]))