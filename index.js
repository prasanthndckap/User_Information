// storeing all information list in the information div
let information = document.querySelector("#information")

// geting the male button using male id
let male = document.querySelector("#male");
// geting the female button using id store in the let varible
let female = document.querySelector("#female");
// getting the loading div
let load = document.querySelector(".loading");
// get the search stored
let search = document.querySelector("#find");
// get the viewmore button 
let viewmore = document.querySelector("#addbtn");

// adding the event lister for window if the page loaded this function will work 

window.addEventListener("DOMContentLoaded", () => {
// it will show loading illustrate untill the page is fetching the api.
    load.style.display = "block"
    
    let num = 21 /* to show 21 users only on the first fetch */
    viewmore.addEventListener("click", () => { /* view more button is clicked it will call main() function it show more users */
        // num += num
        main();
    
    })
    // calling the main function;
    main();


    function main() { /* function for get the 21 users*/

        fetch(`https://randomuser.me/api?results=${num}`) /* fetch the users api */
            .then(res => res.json()) /* get the json datas */
            .then(data => { /* get the  json object as data */
                load.style.display = "none";
                console.log(data.results);
            
                let datas = data.results  /* store the result of data in the datas variable */


            // looping the datas  
                for (let i = 0; i < datas.length; i++) {

                    // let gender = datas.gender
                    show(datas[i])
                }
                search.addEventListener("keyup", () => {  /* adding the event lister 
                for search if the key pressed it will get user match names based on the key value */

                    let list_name = document.querySelectorAll(".visi");  /* select the list of names  by class*/
                    for (let i = 0; i < list_name.length; i++) { 
                        
                        if (list_name[i].innerText.toUpperCase().indexOf(search.value.toUpperCase()) != -1) {
                            list_name[i].parentElement.parentElement.style.display = "block";
                        } else {
                            list_name[i].parentElement.parentElement.style.display = "none"
                        }
                    }
                })


// male button is clicked it list the male users only 
                male.addEventListener("click", () => {
                    while (information.hasChildNodes()) {
                        information.firstChild.remove()

                    }

                    male.classList.toggle("active"); /*  if the male is click once it will add the active class list another time is clicked it will remove the active class list*/
                    // Remove the active class for female  
                    female.classList.remove("active");
                    
                    if (male.classList.contains("active")) {  /* male has active class this condition will work*/

                        let datas = data.results;/* store the result of data in the datas variable */
                        for (let i = 0; i < datas.length; i++) {


                            let gender = datas[i].gender;/* get the gender of datas */
                            if (gender == "male") { /* */ /* the gender is male is show male list*/ 
                                show(datas[i])
                            }
                        }

                    } else { /* will show all all user lisst */ 
                        let datas = data.results;
                        for (let i = 0; i < datas.length; i++) {
                            show(datas[i])
                        }
                    }



                })

                female.addEventListener("click", () => {/*  if the female is click once it will add the active class list another time is clicked it will remove the active class list*/
                    while (information.hasChildNodes()) {
                        information.firstChild.remove()

                    }
                    female.classList.toggle("active");
                         // Remove the active class for male  
                    male.classList.remove("active") 
                    if (female.classList.contains("active")) { /* female has active class this condition will work*/

                        let datas = data.results;
                        for (let i = 0; i < datas.length; i++) {


                            let gender = datas[i].gender;/* get the gender of datas */
                            if (gender == "female") {/* the gender is male is show female list*/ 
                                show(datas[i])
                            }
                        }

                    } else {
                        let datas = data.results;
                        for (let i = 0; i < datas.length; i++) {
                            show(datas[i])
                        }
                    }



                })
            }).catch(error => {
                console.log(error);
            })
    }
})



function show(user) {



    let div = document.createElement("div");
    div.setAttribute("id", "imgcon");


    // console.log(datas[i].id.value);
    let link = document.createElement("a");
    link.href = `user.html?id= ${user.id.value}`;
    let img = document.createElement("img");
    img.src = user.picture.large;
    // console.log(link);
    let name = document.createElement("p");
    name.setAttribute("class", "visi")
    name.innerText = `${user.name.first}${user.name.last}`;
    img.appendChild(name)
    link.appendChild(img);
    link.appendChild(name);


    div.appendChild(link);
    // div.appendChild(name)
    information.appendChild(div);

// if the images is hover it will blue the images and show the name of the user
    img.addEventListener("mouseover",()=>{
        img.style.filter = "blur(1.5px)";
       name.style.visibility = "visible"
    })
// if the mouse is leave from the images it show the clear images and remove the name of the user
    img.addEventListener("mouseleave",()=>{
        img.style.filter = "blur(0px)";
        name.style.visibility = "hidden"
    })

    name.addEventListener("mouseover",()=>{
        img.style.filter = "blur(1.5px)";
       name.style.visibility = "visible"
    })
    name.addEventListener("mouseleave",()=>{
        img.style.filter = "blur(0px)";
        name.style.visibility = "hidden"
    })

}
