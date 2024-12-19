	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode


   // JavaScript to handle dynamic text and letter-by-letter animation
const textArray = [" GIS  Analyst","Cartographer","Hydrologist" ];
let currentIndex = 0;
const dynamicTextElement = document.querySelector(".dynamic-text");

function updateText() {
    // Split the text into individual letters
    const text = textArray[currentIndex];
    dynamicTextElement.innerHTML = ''; // Clear the previous text

    // Create a span for each letter
    for (let i = 0; i < text.length; i++) {
        const letter = document.createElement('span');
        letter.textContent = text[i];
        dynamicTextElement.appendChild(letter);
    }

    // Apply animation to each letter with a delay based on its index
    const letters = dynamicTextElement.querySelectorAll('span');
    letters.forEach((letter, index) => {
        letter.style.animationDelay = `${index * 0.1}s`; // Delay each letter
    });

    // Move to the next job title
    currentIndex = (currentIndex + 1) % textArray.length;
}

// Update the text every 2 seconds
setInterval(updateText, 3000);

// Initialize the first text
updateText();
document.getElementById("toggle-more").addEventListener("click", function () {
    const hiddenProjects = document.querySelectorAll(".portfolio-box.hidden");
    const isShowingMore = Array.from(hiddenProjects).every(project => project.style.display === "block");

    if (isShowingMore) {
        // Hide additional projects (Show only first 6)
        hiddenProjects.forEach(project => {
            project.style.display = "none";
        });
        this.textContent = "More"; // Change button text to "More"
    } else {
        // Show all projects
        hiddenProjects.forEach(project => {
            project.style.display = "block";
        });
        this.textContent = "Less"; // Change button text to "Less"
    }
});





    