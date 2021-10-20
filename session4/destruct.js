const user = {person:{employee:{firstname:"Rahul"},likes:["Cycling","Hiking","Driving"]}}
const { person:{ employee:{firstname},likes:[,second]}}= user;

console.log(firstname,second);
