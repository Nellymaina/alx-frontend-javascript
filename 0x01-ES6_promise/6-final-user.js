import signUpUser from "./4-user-promise.js"
import uploadPhoto from "./5-photo-reject.js"
export default function handleProfileSignup(
 firstName,
 lastName, 
 fileName,
){
 
const p=signUpUser();
const s=uploadPhoto();
 
return Promise.allSettled([p, s]).then((values)=>{
console.log(values);
});
 }
   
