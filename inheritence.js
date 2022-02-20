class TeamMember {
    name;
    designation = 'web developer'
    address = 'bd'
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

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
class StudentCare extends TeamMember {
    getSupportTime;

    constructor(name, address, time) {
        super(name, address);
        this.getSupportTime = time;
    }

    builtAROutine() {
        console.log(this.name, 'built a routine for', this.address);
    }
}
class NeptuneDev extends TeamMember {
    codeEditor;
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    versionApp(version) {
        console.log(this.name, 'realese version no:', version);
    }
}


const alia = new StudentCare('Alia Bhut', 'Mumbai', 6545);
// console.log(alia);

const amir = new Support('Md. Amir', 'bd', 12);
// console.log(amir);

const ash = new NeptuneDev('Asuria', 'Dheli', 'Android Studio');
ash.versionApp('1.1.1.333');