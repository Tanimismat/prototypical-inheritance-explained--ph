class TeamMember{
    name;
    designation = "Support web dev";
    address = "BD";
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    startSession() {
        console.log(this.name, "start session");
    }
}
class StudentCare extends TeamMember{
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }
    buildARoutine() {
        console.log(this.name, "Build a routine");
    }
}
class NeptuneDev {
    name;
    designation = "Support web dev";
    address = "BD";
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    releaseApp(version) {
        console.log(this.name, "Release App", version);
    }
}

const amir = new Support("Amir Khan", "BD");
const salman = new StudentCare("Salman khan", "Dubai" , 11)
const srk = new NeptuneDev("SRK", "Dubai", 3)
srk.releaseApp('1.2.4')
// console.log(amir)
// console.log(salman)
console.log(srk)