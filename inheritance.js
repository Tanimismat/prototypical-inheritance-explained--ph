class Support {
    name;
    designation = "Support web dev";
    address = "BD";
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, "start session");
    }
}
class StudentCare {
    name;
    designation = "Support web dev";
    address = "BD";
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildARoutine() {
        console.log(this.name, "Build a routine");
    }
}

const amir = new Support("Amir Khan", "BD");
const salman = new StudentCare("Salman khan", "Dubai")
console.log(salman)