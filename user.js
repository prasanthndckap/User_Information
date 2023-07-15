let userinfo = document.querySelector(".info"); /* get the div to store the user info into this */

let id = window.location.search /* getting user of from the url*/

let load =document.querySelector(".loading")
// adding the event lister for window if the page loaded this function will work 
window.addEventListener("DOMContentLoaded",()=>{

load.style.display ="block";

 fetch("https://randomuser.me/api?results=20${id}")/* fetch the users api again get the one user by the id */

.then(res=>res.json())
.then(data=>{
    load.style.display ="none";
    let datas = data.results
    

for(let i=0;i<datas.length;i++){
    let div = document.createElement("div");
    div.setAttribute("id","imgcon");
           let img = document.createElement("img");
           img.src = datas[i].picture.large;
         
let dob = document.createElement("h3");
dob.innerText = "dob "+ `${datas[i].dob.age}`
let location = document.createElement("h3");
let email = document.createElement("h3")
email.innerText = "email"+`${datas[i].email}`
location.innerText = "country "+`${datas[i].location.country}${datas[i].location.state}`
let name = document.createElement("h3");
name.innerText = "Name   " +`${datas[i].name.first}${datas[i].name.last}`;
// link.appendChild(name)
userinfo.appendChild(img)
userinfo.appendChild(name)
userinfo.appendChild(dob);
userinfo.appendChild(location);
userinfo.appendChild(email);

     
}

})
})