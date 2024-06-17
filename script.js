"use script"

class Person {

    constructor (firstName, LastName){
        this.firstName = firstName;
        this.LastName = LastName;
    }

    getFullName(){
        return `${this.firstName} ${this.LastName}`
    }
    displayFullName(){
        console.log(`${this.firstName} ${this.LastName}`) 
    }
}

class Employee extends Person{

    constructor (firstName, LastName, id, jobTitle, payRate, hoursWorked){
        super (firstName, LastName);
        this.id = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
        this.hoursWorked = hoursWorked;
    }

    grossPay(){
        let grossPay = this.payRate * this.hoursWorked;
        console.log(`${super.getFullName()} makes $${grossPay} a week`)
    }

}

const Employee1 = new Employee("Jesus", "Mimila", 45, "Software Engineer", 45, 40);
const Employee2 = new Employee("Ayshah", "Mimila", 1, "Goofy Budi Baby", 190, 72);

Employee1.grossPay()
Employee2.grossPay()