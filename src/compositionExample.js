class Corporation {
  constructor(name, employees, ceo) {
    this.name = name;
    this.employees = employees;
    this.ceo = ceo;
  }
}

class Employee {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

const corp1 = new Corporation('Google', [
  new Employee('Name 1', 'email1@corp.com'),
  new Employee('Name 1', 'email1@corp.com'),
  new Employee('Name 1', 'email1@corp.com'),
]);

// спадкування - відношення "is a"
// композиція - відношення "has a"