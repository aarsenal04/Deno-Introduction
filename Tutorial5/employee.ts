class employee {
    constructor(public name: string, public age: number) {}
  
    greet(): void {
      console.log(`Hi, I'm ${this.name}.`);
    }
  }
  
  class Employee extends employee { //inheritance
    position: string;
  
    constructor(name: string, age: number, position: string) {
      super(name, age);
      this.position = position;
    }
  
    work(): void {
      console.log(`${this.name} works as a ${this.position}.`);
    }
  }
  
  // employee instance
  const employee1 = new Employee("Andrea", 21, "Software Engineer");
  employee1.greet();
  employee1.work();
  
  // deno run employee.ts