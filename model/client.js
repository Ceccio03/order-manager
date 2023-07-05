class Client extends Person {
    constructor(name, surname, dob, genere, age, address) {
        super(name, surname, dob, genere, age);
        this.address = address;
        this.orders = [];
    }

    toString() {
        const person = 'Nome: ' + this.name + '\n' + 'Cognome: ' + this.surname + '\n' + 'Genere: ' + this.genere + '\n' + 'Età: ' + this.age + '\n' + 'Data di nascita: ' + this.dob + '\n' + 'Indirizzo: ' + this.address + '\n' + 'Ordini: ' + this.orders + '\n';

        return person;
    }

    totalExpenses() {

    }

    addOrder(order) {
        this.orders.push(order);
    }
}