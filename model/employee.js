class Employee extends Person {
    constructor(name, surname, dob, genere, age, department) {
        super(name, surname, dob, genere, age);
        this.department = department;
        this.clients = [];
    }

    toString() {
        const person = 'Nome: ' + this.name + '\n' + 'Cognome: ' + this.surname + '\n' + 'Genere: ' + this.genere + '\n' + 'Età: ' + this.age + '\n' + 'Data di nascita: ' + this.dob + '\n' + 'Dipartimento: ' + this.department + '\n' + 'Clienti: ' + this.clients + '\n';

        return person;
    }

    bestClient() {

    }

    totalEarnings() {

    }

    addClient(client) {
        this.clients.push(client);
    }
}