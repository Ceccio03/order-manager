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
        let total = 0;

        for (let i = 0; i < this.orders.length; i++) {
            total += this.orders[i].price;
        }
        return total;
    }

    addOrder(order) {
        this.orders.push(order);
    }
}