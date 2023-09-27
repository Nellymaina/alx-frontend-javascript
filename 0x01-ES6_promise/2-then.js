export default function handleResponseFromAPI() {
  return new Promise((resolve, reject)=>{
   this.then(()=>{
     resolve({
      status:200,
      body:'success'
    })}),
    this.catch(()=>{
      reject(new Error())})
this.finally(()=>{
  console.log('Got a response from the API')
})
  })
}
