class Person {
    #name;
    #age;
    #status;
  
    constructor(name, age, status) {
      this.#name = name;
      this.#age = age;
      this.#status = status;
    }
  
    // GETTERS
    get name() {
      return this.#name;
    }
  
    get age() {
      return this.#age;
    }
  
    get status() {
      return this.#status;
    }
  
    // METHODS TO DISPLAY INFO
    displayInfo() {
      console.log("Name: " + this.name);
      console.log("Age: " + this.age);
      console.log("Status: " + this.status);
    }
  
    // METHODS TO DISPLAY INFO via HTML
    DisplayInfo_Html() {
      const personInfo = document.getElementById('PersonInfo');
      personInfo.innerHTML = `
        <strong>Name:</strong> ${this.name}<br>
        <strong>Age:</strong> ${this.age}<br>
        <strong>Status:</strong> ${this.status}
      `;
    }
  }
  
  /*
  The extends keyword is used to create a subclass (child class) that inherits from another class (parent class).
  */
  
  /*
  The super keyword is used to call the constructor of the parent class, allowing the child class to inherit and initialize the parent’s properties.
  */
  
  class Student extends Person {
    constructor(name, age, status, grade) {
      super(name, age, status);
      this.grade = grade; // Changed healthStatus to grade
    }
  
    displayInfo() {
      super.displayInfo();
      console.log("Grade: " + this.grade); // Changed health status to grade
    }
  
    DisplayInfo_Html() {
      const personInfo = document.getElementById('PersonInfo');
      personInfo.innerHTML += `
        <br><strong>Grade:</strong> ${this.grade} // Changed health status to grade
      `;
    }
  }
  
  // Create an instance of Student instead of Patient
  const student1 = new Student('joshua', '21', 'Student', 'A'); // Changed from Patient to Student
  
  // Display info in console
  student1.displayInfo();
  