class Person {
    constructor(name, surname, dob, genere, age) {
        this.name = name;
        this.surname = surname;
        this.genere = genere;
        this.age = age;
        this.dob = dob;
    }

    set dob(value) {
        if (value === null) {
            this._dob = new Date();
        } else if (value.includes('/')) {
            const dopArray = value.split('/');
            const year = parseInt(dopArray[2]);
            const month = parseInt(dopArray[1]) - 1;
            const day = parseInt(dopArray[0]);

            this._dob = new Date(year, month, day);
        } else {
            this._dob = new Date(value);
        }
    }

    get age() {
        const today = new Date();
        const dob = new Date(this.dob);
        let age = today.getFullYear() - dob.getFullYear();
        const monthDiff = today.getMonth() - dob.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        return age;
    }

    toString() {
        const person = 'Nome: ' + this.name + '\n' + 'Cognome: ' + this.surname + '\n' + 'Genere: ' + this.genere + '\n' + 'Età: ' + this.age + '\n' + 'Data di nascita: ' + this.dob + '\n';

        return person;
    }
}