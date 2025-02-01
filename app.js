// Immediately ensure the active section is visible on load
document.addEventListener("DOMContentLoaded", () => {
    const activeSection = document.querySelector('.container.active');
    if (activeSection) {
      activeSection.style.visibility = 'visible';
    }
  });
  
  // Tab switching and typing effect functionality
  (function () {
    const controls = document.querySelectorAll('.control');
    let currentSection = document.querySelector('.container.active');
    
    controls.forEach(button => {
      button.addEventListener('click', function () {
        // If the clicked button is already active, do nothing
        if (this.classList.contains('active-btn')) return;
        
        // Update active button styling
        document.querySelector('.active-btn').classList.remove('active-btn');
        this.classList.add('active-btn');
        
        // Begin fade-out animation on the current section
        currentSection.classList.add('fade-out');
        
        // Wait for the fade-out transition to complete (400ms)
        setTimeout(() => {
          currentSection.classList.remove('active', 'fade-out');
          currentSection.style.visibility = 'hidden';
          
          // Activate the new section and make it visible
          const newSection = document.getElementById(button.dataset.id);
          newSection.style.visibility = 'visible';
          newSection.classList.add('active');
          currentSection = newSection;
        }, 400);
      });
    });
    
    // Toggle light/dark theme
    document.querySelector(".theme-btn").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
    
    // Typing effect for header text
    const typingElement = document.getElementById("typing");
    const text = "Abirami Sivakumar.";
    let index = 0;
    const typingSpeed = 150; // milliseconds per character
    
    function type() {
      if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
      }
    }
    
    // Start the typing effect after a short delay
    setTimeout(type, 500);
  })();
  