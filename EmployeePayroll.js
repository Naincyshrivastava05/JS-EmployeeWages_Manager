class EmployeePayrollData {
  id;
  salary;
  gender;
  startDate;
  
  constructor(id, name, salary) {
      this.id = id;
      this.name = name;
      this.salary = salary;
  }
      constructor(...params) {
        try {
          this.id = this.validateId(params[0]);
          this.name = this.validateName(params[1]);
          this.salary = this.validateSalary(params[2]);
          this.gender = this.validateGender(params[3]);
          this.startDate = this.validateStartDate(params[4]);
      } catch (error) {
          console.error(error);
      }
  }


  get name() { return this._name; }
  set name(name) { this._name = name; }
  set name(name) {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{3,}$');
    if (nameRegex.test(name))
        this._name = name;
    else throw 'Name is Incorrect!';
}
   validateId(id) {
            if (id > 0) return id;
            throw 'ID must be a positive number!';
        }
    
        validateName(name) {
            let nameRegex = RegExp('^[A-Z][a-z]+$');
            if (nameRegex.test(name)) return name;
            throw 'Name is Incorrect!';
        }
    
        validateSalary(salary) {
            if (salary > 0) return salary;
            throw 'Salary must be a positive number!';
        }
    
        validateGender(gender) {
            if (gender === 'M' || gender === 'F') return gender;
            throw "Gender must be 'M' or 'F'!";
        }
    
        validateStartDate(startDate) {
            if (startDate instanceof Date && startDate <= new Date()) return startDate;
            throw 'Start Date cannot be in the future!';
        }

  toString() {
      return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary;
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
   
      const empDate = this.startDate ? this.startDate.toLocaleDateString("en-US", options) : "undefined";
      return "id=" + this.id + ", name=" + this.name + ", salary=" + this.salary + ", gender=" + this.gender + ", startDate=" + empDate;
  }
}

let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000);
console.log(employeePayrollData.toString());

try {
  let employeePayrollData = new EmployeePayrollData(1, "Mark", 30000, "M", new Date());
  console.log(employeePayrollData.toString());
} catch (e) {
  console.error(e);
}

employeePayrollData.name = "John";
let employeePayrollData = new EmployeePayrollData(2, "john", 30000, "M", new Date());
console.log(employeePayrollData.toString());
try {
  employeePayrollData.name = "Naincy";
  console.log(employeePayrollData.toString());
} catch (e) {
  console.error(e);
}

let newEmployeePayrollData = new EmployeePayrollData(2, "Terrisa", 30000, "F", new Date());
console.log(newEmployeePayrollData.toString());

try {
  let newEmployeePayrollData = new EmployeePayrollData(-1, "Terrisa", -30000, "X", new Date("2025-01-01"));
  console.log(newEmployeePayrollData.toString());
} catch (e) {
  console.error(e);
}
