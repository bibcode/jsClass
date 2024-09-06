class User {
    name;
    age;
    gender;

    constructor(n,a,g='Male'){
        this.name=n;
        this.age=a;
        this.gender=g;

    }
}
module.exports=User;

let person = [
    new User("ibrahim", 56 ),
    new User("muhammad", 47),
    new User("Zainab", 8 ,"Female"),
    new User("Khadija", 10, "Female" )
];
// console.log(person);



