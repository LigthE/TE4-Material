class StudentCounter {
  constructor() {
    this.students = [
      "erkan",
      "alice",
      "borat",
    ]; /*om jag har alla saker inne i en array och använder
    och använder .length då kommer den kolla på hur många "" används om 3 då skrivs det ut*/

    console.log(
      `we curently have  ${this.students.length}  students enrolled in nti:`
    );
  }

  sayHello() {
    console.log(this.students);
  }
}

const student = new StudentCounter();
student.sayHello();
