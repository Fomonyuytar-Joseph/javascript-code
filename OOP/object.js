function User(username,email){
    this.username=username;
    this.email=email;
    // this.login=function(){
    //     console.log(`${this.username} has logged in`);
    // }
}
User.prototype.login=function(){
    console.log(`${this.username} has logged in `);
}
User.prototype.logout=function(){
    console.log(`${this.username} has logged out `)
}
function Admin(username,email,title){
    User.call(this,username,email);
    this.title=title;
}
Admin.prototype=Object.create(User.prototype);
Admin.prototype.deleteUser=function(){
console.log("deleted")
};
const userOne=new User('joseph','joe@EMAIL.COM');
const userTwo=new Admin('karen',"karen@email.com","novels")
userOne.login();
userOne.logout();
console.log(userOne);
console.log(userTwo);
// class User{
//     //User constructor
//     constructor(username,age){
//         this.username=username;
//         this.age=age;
//         this.score=0;

//     };
//     login(){
//         console.log(`${this.username} just logged in`);
//         return this;
//     }
//     logout(){
//         console.log(`${this.username} just logged out`);
//         return this;
//     }
//     incScore(){
//         this.score+=1
//        console.log(`${this.username} has a score of ${this.score}`);
//        return this;
//     }
// }
// class Admin extends User{
//     constructor(username,email,title){
//         super(username,email);
//         this.title=title;
        
//     }
//     deleteUser(user){
//         users=users.filter((u)=>{
//             return u.username!==user.username
//         })

//     }

// }


//  const userThree=new User('job',30);
//  const userTwo=new Admin('jacob','jacob@gmail.com','graphic design');
//  let users=[userOne,userTwo,userThree];

// userTwo.deleteUser(userThree);
// console.log(users);
//  console.log(userOne,userTwo);
//  userOne.login().incScore().incScore().logout();
// //  userOne.logout();
// //  userOne.incScore();



// let user={
//     name:"joseph",
//     age:30,
//     email:"legit@gmail.com",
//     location:"Cameroon",
//     blogs:["tech in kamer","best apps in buea"],
//     login:()=>{
//         console.log("welcome to the blog")
//     },
//     logBlogs:function(){
//         //console.log(this.blog);
//         this.blogs.forEach(blog=>{
//             console.log(blog);
//         })
//     }
// };
// user.logBlogs();
// console.log(user);
// console.log(user.name);