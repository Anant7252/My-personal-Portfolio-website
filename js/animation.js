document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".buttons button");
    const sections = document.querySelectorAll(".sections .section");
    let currentIndex = 0;
    let intervalId;
    let isStopped = false;
  
    function showSection(index) {
      sections.forEach((section, i) => {
        if (i === index) {
          section.classList.add("active");
          section.style.display = "block";
        } else {
          section.classList.remove("active");
          section.style.display = "none";
        }
      });
    }
  
    // Function to start automatic section opening
    function openSectionsAutomatically() {
      intervalId = setInterval(() => {
        if (!isStopped && currentIndex < sections.length) {
          showSection(currentIndex);
          currentIndex++;
        } else {
          clearInterval(intervalId);
        }
      }, 1000); // Adjust time as needed
    }
  
   
    openSectionsAutomatically();
  
    
    function handleButtonClick(event) {
      isStopped = true; // Stop automatic animation
      clearInterval(intervalId); // Stop the interval
  
      
      const buttonIndex = Array.from(buttons).indexOf(event.target);
      showSection(buttonIndex);
    }
  
    
    buttons.forEach((button) => {
      button.addEventListener("click", handleButtonClick);
    });
});
  
let typo=document.getElementById("text");
let typotext=typo.textContent;
typo.textContent="";
let i=0;
function typing(){
  if (i<typotext.length){
    typo.textContent +=typotext.charAt(i);
    i++;
    setTimeout(typing,100);
  }
}
typing();