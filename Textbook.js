//Function that toggles the visibility of the sampleAnswer <div> within a crQuestion <li>
function reveal(...elements) {  
    for(var i = 0; i < elements.length; i++) {
        if (elements[i].style.visibility === "visible") {
            elements[i].style.visibility = "hidden";
        } else {
            elements[i].style.visibility = "visible";
        }    
    }
}

/*Function which alerts the user that any 
  data they have changed may be lost once they leave the page*/
window.onbeforeunload = function() {
    return "";
}



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

