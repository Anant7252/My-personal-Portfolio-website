const highbutton = document.getElementById("highbutton");
const higherbutton = document.getElementById("higherbutton");
const gbutton = document.getElementById("grbutton");

const high = document.getElementById("high");
const higher = document.getElementById("higher");
const gra = document.getElementById("graduation");

highbutton.addEventListener('click', function(event){
    high.style.display='block';
    higher.style.display='none';
    gra.style.display='none';
    high.classList.add('fade-in');
});
higherbutton.addEventListener('click', function(event){
    high.style.display='none';
    higher.style.display='block';
    gra.style.display='none';
    higher.classList.add('fade-in');
});
gbutton.addEventListener('click', function(event){
    high.style.display='none';
    higher.style.display='none';
    gra.style.display='block';
    gra.classList.add('fade-in');
});

// Theme toggle functionality
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');
    const icon = document.getElementById('theme-icon');
    if (document.body.classList.contains('light-mode')) {
        icon.classList.remove('fas', 'fa-sun');
        icon.classList.add('fas', 'fa-moon');
    } else {
        icon.classList.remove('fas', 'fa-moon');
        icon.classList.add('fas', 'fa-sun');
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".buttons button");
    const sections = document.querySelectorAll(".sections .section");
    let currentIndex = 0;
    let intervalId;
    let isStopped = false;
  
    // Function to show a section
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
  
    // Function to start automatic section opening with infinite loop
    function openSectionsAutomatically() {
      intervalId = setInterval(() => {
        if (!isStopped) {
          showSection(currentIndex);
          currentIndex = (currentIndex + 1) % sections.length; // Loop through sections
        }
      }, 1000); // Adjust time as needed
    }
  
    // Start the automatic opening of sections
    openSectionsAutomatically();
  
    // Function to handle button clicks
    function handleButtonClick(event) {
      isStopped = true; // Stop automatic animation
      clearInterval(intervalId); // Stop the interval
  
      // Determine the section to show based on the clicked button
      const buttonIndex = Array.from(buttons).indexOf(event.target);
      showSection(buttonIndex);
    }
  
    // Add click event listeners to buttons
    buttons.forEach((button) => {
      button.addEventListener("click", handleButtonClick);
    });
});
  