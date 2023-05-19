  // Redirect the user to the login page
//const loginBtn = document.querySelector(".btn-login");
//loginBtn.addEventListener("click", () => {
   // window.location.href = "../login.html";
//});

//onclick on register link
let rsgisterLink=document.querySelector(".register-link");
let rsgisterState=document.querySelector(".register-link ul");
rsgisterLink.addEventListener("click",(e)=>{
    e.preventDefault();
    rsgisterState.classList.toggle("d-open");
    document.querySelector(".register-link ul li:first-child").addEventListener("click",()=>{
        window.location.href = "../register.html";
    })
    document.querySelector(".register-link ul li:last-child").addEventListener("click",()=>{
    window.location.href="../register.html?type="+encodeURI("organization");
    })
})

//calculate last time of donation
let calcButton = document.getElementById("calc-time");
let page=document.querySelector(".page");
let popup = document.createElement("div");
let overlay = document.createElement("div");


calcButton.addEventListener("click", () => {
    popup.classList.add("services-popup");
    overlay.classList.add("overlay");

    let image = document.createElement("img");
    image.src = "../image/date.png";
    popup.appendChild(image);

    let dateInputContainer= document.createElement("div");
    dateInputContainer.className="dateInput-container";
    
    
    //create text inputs
    let day=document.createElement("select");
    day.id="day";
    dateInputContainer.appendChild(day);

    let month=document.createElement("select");
    month.id="month";
    dateInputContainer.appendChild(month);
    let year=document.createElement("select");
    year.id="year";
    dateInputContainer.appendChild(year);
    console.log(day)

    //add days 
    for(let i=1;i<=30;i++){
        let option=document.createElement("option");
        option.innerText=`${i}`;
        day.appendChild(option);
    }
    //add months 
    for(let i=1;i<=12;i++){
        let option=document.createElement("option");
        option.innerText=`${i}`;
        month.appendChild(option);
    }
    //add year 
    for(let i=1975;i<=2023;i++){
        let option=document.createElement("option");
        option.innerText=`${i}`;
        year.appendChild(option);
    }
    popup.appendChild(dateInputContainer);



    let submitButton=document.createElement("button");
    submitButton.classList="submit-time-button";
    submitButton.innerText="calculate";
    popup.appendChild(submitButton);
    
    //calc time 
    submitButton.addEventListener("click", () => {
        let day = document.getElementById("day").value;
        let month = document.getElementById("month").value;
        let year = document.getElementById("year").value;

        let selectedDate = new Date(year, month - 1, day);
        let currentDate = new Date();

        let duration = currentDate - selectedDate;
        let years = Math.floor(duration / (1000 * 60 * 60 * 24 * 365));
        let months = Math.floor((duration % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
        let days = Math.floor((duration % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        
        document.querySelectorAll(".dateInput-container select").forEach(e=>{
            e.remove();
        })
        if(years>0){
            let yearRes=document.createElement("p");
            yearRes.innerText=`Duration: ${years} years,`;
            dateInputContainer.appendChild(yearRes);
        }
        if(months>0){
            let monthRes=document.createElement("p");
            monthRes.innerText=` ${months} months,`;
            dateInputContainer.appendChild(monthRes);
        }
        if(days>0){
            let dayRes=document.createElement("p");
            dayRes.innerText=` ${days} days`;
            dateInputContainer.appendChild(dayRes);
        }
    });

    let closeButton=document.createElement("button");
    closeButton.classList="close-button";
    closeButton.innerText="X";
    popup.appendChild(closeButton);
    closeButton.onclick=()=>{
        overlay.remove();
        image.remove();
        dateInputContainer.remove();
        submitButton.remove();
    }

    overlay.appendChild(popup);
    page.appendChild(overlay);
    });


//animition on reach
let servicesBoxs=document.querySelectorAll(".service-box")

let waySection=document.querySelector(".way-to-donate")
let wayBoxs=document.querySelectorAll(".way-box")

window.onscroll=()=>{
    servicesBoxs.forEach((box,index)=>{
        if(window.scrollY>=box.offsetTop-400){
            if(index===0){
                const animationDelay = index * 0.5; 
                box.style.setProperty("animation",`leftToRight 1s ease-in-out ${animationDelay}s forwards`)
            }
            if(index===1){
                const animationDelay = index * 0.5; 
                box.style.setProperty("animation",`slideInFromRight 1s ease-in-out ${animationDelay}s forwards`)
            }
            if(index===2){
                const animationDelay = index * 0.5; 
                box.style.setProperty("animation",`slideInFromRight 1s ease-in-out ${animationDelay}s forwards`)
            }
        }
    })
    
    if(window.scrollY>=waySection.offsetTop-400){
        wayBoxs.forEach((box,index)=>{
                if(index===0){
                    const animationDelay = index * 0.5; 
                    box.style.setProperty("animation",`fadeIn 1s ease-in-out ${animationDelay}s forwards`)
                }
                if(index===1){
                    const animationDelay = index * 0.5; 
                    box.style.setProperty("animation",`leftToRight 1s ease-in-out ${animationDelay}s forwards`)
                }
                if(index===2){
                    const animationDelay = index * 0.5; 
                    box.style.setProperty("animation",`slideInFromRight 1s ease-in-out ${animationDelay}s forwards`)
                }
            })
        }
}














