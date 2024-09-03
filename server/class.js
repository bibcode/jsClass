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