import React,{Fragment,useState} from "react";
import "../App.css";

const Dragggable=(props)=>{
    // props.comp().setPosition({pos1:1,pos2:1,pos3:1,pos4:1})
    var pos1=props.comp().pos1;
    var pos2=props.comp().pos2;
    var pos3=props.comp().pos3;
    var pos4=props.comp().pos4;

    // const [position,setPosition]=useState
    // ([{pos1:props.comp().pos1,pos2:props.comp().pos2,pos3:props.comp().pos3,pos4:props.comp().pos4}]);
    console.log(document.getElementById("root"));
    dragElement(document.getElementById("root"))
   function dragElement(element)
   {
    element.onmousedown = dragMouseDown;
    function dragMouseDown(e) {
      // console.log(e.target.id);
        e=e||window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
          document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
       
        e = e || window.event;
          e.preventDefault();
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          element.style.top = (element.offsetTop - pos2) + "px";
          element.style.left = (element.offsetLeft - pos1) + "px";
        }
      
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
        
    }
}
return(
    <Fragment>
    <p>Draggable Button</p>
    </Fragment>
)
}

export default Dragggable;