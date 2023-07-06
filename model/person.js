class Person {
    constructor(name, surname, dob, genere) {
        this.name = name;
        this.surname = surname;
        this.dob = dob;
        this.genere = genere;
    }

    get age() {
        const nowTimeStamp = new Date().getTime();
        const dobTimeStamp = this.dob.getTime();
        const deltaTimeStamp = nowTimeStamp - dobTimeStamp;
        const age = Math.floor(deltaTimeStamp / (1000 * 60 * 60 * 24 * 365));

        return age;
    }

    toString() {
        const person = 'Nome: ' + this.name + '\n' + 'Cognome: ' + this.surname + '\n' + 'Genere: ' + this.genere + '\n' + '\n' + 'Data di nascita: ' + this.dob + '\n';

        return person;
    }
}