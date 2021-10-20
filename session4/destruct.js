let raksha = { name:"Raksha",surname: "Sharma",age:28};
let srinivas = { name:"Srinivas",surname: "Iyenger",age:30};
let usha = { name:"Usha",surname: "Janardhana",age:54};

let users = [raksha,srinivas,usha]

users.map(user, index)=>{
    return { 
        fullname: '${user.name} ${user.surename} , id:index+1
    }
});
