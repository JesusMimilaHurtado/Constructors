// Describes the field of the object 
class Course {
    constructor(id, name, price, room) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.room = room;
    }

    displayInfo() {
        console.log(`Course: ${this.name} \nPrice: $${this.price}`);
    }
}

class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
      this.employeeId = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.jobTitle = jobTitle;
      this.payRate = payRate;
    }
    // The displayIntro() method
    displayIntro() {
      console.log(
        "Hi! I'm " +
          this.firstName +
          " " +
          this.lastName +
          " and I am a " +
          this.jobTitle
      );
    }
    fullname() {
      return `${this.firstName} ${this.lastName}`;
    }
}

const math = new Course(4, "Algebra", 120, 504);

const me = new Employee(4, "Jesus", "Mimila", "Goober", 500000000000);


me.displayIntro();
