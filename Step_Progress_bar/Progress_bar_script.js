const circles = document.querySelectorAll(".circle");
const progress_bar = document.querySelector(".indicator");
const buttons = document.querySelectorAll("button");

let current_steps = 1;


buttons.forEach((button) =>{
    button.addEventListener("click", function(e){
        if(e.target.id === "next"){
            ++current_steps;
        }else{
            --current_steps;   
        };
        // console.log(current_steps)
    

    circles.forEach((circle,index) =>{
        if(index < current_steps){
            circle.classList.add("active");
        }else{
            circle.classList.remove("active");
        }
    })

    progress_bar.style.width = `${((current_steps - 1) / (circles.length - 1)) * 100}%`;

    if(current_steps === circles.length){
        buttons[1].disabled = true;
    }else if(current_steps === 1){
        buttons[0].disabled = true;
    }else{
        buttons.forEach((button) =>{
            button.disabled = false;
        })
    }
})
})
