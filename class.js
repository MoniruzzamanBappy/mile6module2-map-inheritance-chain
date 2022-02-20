class Support {
    name;
    id = 2423;
    designation = 'web developer';
    // define a function old way
    startSession() {
        console.log('custon function in class')
    }
    // define function in class this way
    constructor(name) {
        this.name = name;
    }
}

const amir = new Support('Md. Amir');
console.log(amir);