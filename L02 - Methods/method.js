const person1 ={
    name:"joshua eviota",
    age:22,
    occupation:"hacker sa Nasa"
}

//Process and Output
console.log("Name: "+person1.name);
console.log("Age: "+person1.age);
console.log("Occupation: "+person1.occupation);
console.log("--------------------------------");


// Class definition
class Person {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    // Method to display person information in the console
    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
    }

    // Method to display person information in the HTML
    displayInfoHTML() {
        const personElement = document.getElementById('personOne');
        personElement.innerHTML = `
            <strong>Name:</strong> ${this.name}<br>
            <strong>Age:</strong> ${this.age}<br>
            <strong>Occupation:</strong> ${this.occupation}
        `;
    }
}

// Creating an object (instance) of the Person class
const personOne = new Person('joshua', 22, 'Student');

// Calling methods
personOne.displayInfo();       