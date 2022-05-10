

//--1--
function aa(){
    let items=document.getElementById("textVal").value;
    let count = 0;
    let para=document.createElement("p");
    para.setAttribute("id", count++);
    para.setAttribute("draggable", "true");
    para.innerText=items;
    let y=document.getElementById("inProgress");
    y.appendChild(para);
    para.addEventListener("dragstart", function (event) {
        event.dataTransfer.setData("text", this.id);
      });
    

let boxs = document.getElementsByClassName("tasksSection");

for (let i = 0; i < boxs.length; i++) {
    boxs[i].addEventListener("dragover", feelDrag);
    boxs[i].addEventListener("drop", dropAndADD);
  }
}
function feelDrag(event) {
    event.preventDefault();
  }

function dropAndADD(event) {
    let dragedData = event.dataTransfer.getData("text");
    this.appendChild(document.getElementById(dragedData));
  }


