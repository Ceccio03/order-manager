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
        if (this.client.length === 0) {
            return null;
        }

        const bestClient = this.clients[0];

        for (let i = 1; i < this.clients.length; i++) {
            const client = this.clients[i];

            if (client.totalExpenses() > bestClient.totalExpenses()) {
                bestClient = client;
            }
        }
        return bestClient;
    }

    totalEarnings() {
        let accumulator = 0;
        
        for (const client of this.clients) {
            accumulator += client.totalExpenses();
        }
    }

    addClient(client) {
        this.clients.push(client);
    }
}