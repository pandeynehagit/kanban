let addbuttn = document.querySelector(".add-btn") ;
let removebuttn = document.querySelector(".remove-btn");
let modalcont = document.querySelector(".modal-cont");
let allprioritycolor = document.querySelectorAll(".priority-color");
let addTaskflag = false;
let removeTaskflag = false;
addbuttn.addEventListener("click",function(){
    addTaskflag=!addTaskflag;
    if(addTaskflag===true){
        //make it flex
        modalcont.style.display ="flex";
    }
    else{
        // none
        modalcont.style.display="none";
    }
});
removebuttn.addEventListener("click",function(){
    removeTaskflag=!removeTaskflag;
    if(removeTaskflag===true){
        
        alert("remove button activated");
        removebuttn.style.color ="red";
    }
    else{
        
        removebuttn.style.color="white";
    }
});
allprioritycolor.forEach(function(colorele){
    colorele.addEventListener("click",function(){
        allprioritycolor.forEach(function(prioritycolorele){
            prioritycolorele.classList.remove("active");
        })
        colorele.classList.add("active");
    })
});



