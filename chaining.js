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

console.log(company?.tec?.work?.first);

console.log(company?.web?.language?.first);
const { first, second } = company.web.language;

console.log(first, second);