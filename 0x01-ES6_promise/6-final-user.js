import signUpUser from "./4-user-promise.js"
import uploadPhoto from "./5-photo-reject.js"
 export default function handleProfileSignup(firstName, lastName, fileName){

Promise.all([signUpuser, uploadPhoto]).then(()=>{
 [
    {
      status: status_of_the_promise,
      value: value or error returned by the Promise
    },
    ...
  ] });
 }
   
