let addbuttn = document.querySelector(".add-btn") ;
let removebuttn = document.querySelector(".remove-btn");
let textAreaCont = document.querySelector(".textArea-cont");
let modalcont = document.querySelector(".modal-cont");
let allprioritycolor = document.querySelectorAll(".priority-color");
let mainCont= document.querySelector(".main-cont");
let addTaskflag = false;
let removeTaskflag = false;
let colors = ["lightpink","lightblue","lightgreen","black"];
let modalPriorityColor =colors[colors.length-1];

let tktsArr =[];
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
        modalPriorityColor = colorele.classList[0];
        //console.log(colorele.classList);
    })
});
modalcont.addEventListener("keydown",function(e){
    let key = e.key;
    if(key === "Enter"){
        createTkt(modalPriorityColor,textAreaCont.value);
        //hide modal
        modalcont.style.display="none";
        //make text area empty
        textAreaCont.value="";
    }
})

//fuction to create a tkt: create div and append that div in container
// store tkt , to store we need an array of object so we can use it later
//object contains uniaue id, color,text
//${}to add variable: interpolation
function createTkt(tktcolor,tktTask){
let tktId = shortid();
let tktCont = document.createElement("div");
tktCont.setAttribute("class","tkt-cont");
tktCont.innerHTML = `
<div class="tkt-color">${tktcolor}</div>
<div class="tkt-id">${tktId}</div>
<div class="task-area">${tktTask}</div>;
<div class="tkt-lock">
  <i class="fa-solid fa-lock"></i>
</div>
`
mainCont.appendChild(tktCont);
handleColor();
handleLock();
handleRemove(tktCont,tktId);
tktsArr.push({tktcolor,tktTask,tktId});
console.log(tktsArr);
}
function handleLock(){

}
function handleColor(){

}

function handleRemove(tkt,Id){
 tkt.addEventListener("click",function(){
    if(!removeTaskflag){
        return;
    }
     tkt.remove();
     getId(Id);

 });
}
function getId(Id){
    let index = tktsArr.findIndex(function (tktObj){
        return tktObj.tktId==Id;
    })
    return index;
    }


