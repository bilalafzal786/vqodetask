const expandbtn = document.getElementById("downBtn");
console.log(expandbtn);
const expandedContainer = document.getElementById("expandableContainer");
expandbtn.addEventListener("click", ()=>{
    console.log("Im being calling");
    // expandedContainer.style.display="none";
    if (expandedContainer.classList.contains("Close")) {
        expandbtn.style.transform="rotate(180deg)";
      expandedContainer.classList.remove("Close");
      expandedContainer.classList.add("Open");
    } else {
      expandedContainer.classList.remove("Open");
        expandbtn.style.transform = "rotate(0deg)";
      expandedContainer.classList.add("Close");
    }
})