var txtarea = document.getElementById('input');
class Member {
    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
}
class Employee extends Member {
    constructor(name, age, salary, department) {
        super(name, age, salary);
        this.department = department;
    }
    printEmpDetails()    
    { txtarea.value=`Employee Details \n\nName: ${this.name} \nAge: ${this.age} \nSalary: ${this.salary} \nDepartment: ${this.department}`
     }
} 
const a = new Employee('M Muaz Shahzad', 21, 500000, 'BSE 5B');
a.printEmpDetails();