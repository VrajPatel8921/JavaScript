let tenderUser={};

tenderUser.id="123abc";
tenderUser.name="Vraj";
tenderUser.isLoggedIn=false;

console.log(tenderUser);

let regulerUser={
    fullName:{
        userFullName:{
            firstName:"Vraj",
            lastName:"Patel"
        }
    }
}

console.log(regulerUser.fullName.userFullName.firstName);

let obj1={1:"a",2:"b"};
let obj2={3:"c",4:"d"};

// let obj3=Object.assign({},obj1,obj2);
// console.log(obj3);

let obj3={...obj1,...obj2};
console.log(obj3);

let users=[
    {
        id:1,
        email:"123xyz"
    },
    {
        id:1,
        email:"123xyz"
    },
    {
        id:1,
        email:"123xyz"
    },
    {
        id:1,
        email:"123xyz"
    },
    {
        id:1,
        email:"123xyz"
    },
    {
        id:1,
        email:"123xyz"
    }
]

console.log(users[0].email);

console.log(tenderUser);

console.log(Object.keys(tenderUser));
console.log(Object.values(tenderUser));
console.log(Object.entries(tenderUser));
console.log(Object.hasOwnProperty('name'));


let course={
    courseName:"javaScript",
    price:"999",
    courseInstructure:"Hitesh Choudhry"
}

let {courseInstructure:instructure}=course;

// console.log(courseInstructure);
console.log(instructure);





