// Ensure the active section is visible on load
document.addEventListener("DOMContentLoaded", () => {
    const activeSection = document.querySelector('.container.active');
    if (activeSection) {
      activeSection.style.visibility = 'visible';
    }
  });
  
  // Tab Switching & Typing Effect
  (function () {
    const controls = document.querySelectorAll('.control');
    let currentSection = document.querySelector('.container.active');
    const transitionDuration = 400; // 0.4s
  
    controls.forEach(button => {
      button.addEventListener('click', function () {
        // If this button is already active, do nothing
        if (this.classList.contains('active-btn')) return;
  
        // Update active button styling
        document.querySelector('.active-btn').classList.remove('active-btn');
        this.classList.add('active-btn');
  
        // Force reflow for currentSection to ensure transition starts
        currentSection.offsetWidth;
  
        // Add fade-out class to currentSection
        currentSection.classList.add('fade-out');
  
        let called = false;
        function onTransitionEnd(e) {
          if (e.propertyName === 'opacity' && !called) {
            called = true;
            cleanup();
          }
        }
        function cleanup() {
          currentSection.removeEventListener('transitionend', onTransitionEnd);
          currentSection.classList.remove('active', 'fade-out');
          currentSection.style.visibility = 'hidden';
  
          // Activate new section
          const newSection = document.getElementById(button.dataset.id);
          newSection.style.visibility = 'visible';
          newSection.offsetWidth; // Force reflow
          newSection.classList.add('active');
          currentSection = newSection;
        }
        currentSection.addEventListener('transitionend', onTransitionEnd, { once: true });
  
        // Fallback if transitionend doesn't fire
        setTimeout(() => {
          if (!called) {
            cleanup();
          }
        }, transitionDuration + 50);
      });
    });
  
    // Toggle Light/Dark Theme
    document.querySelector(".theme-btn").addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
    });
  
    // Typing Effect
    const typingElement = document.getElementById("typing");
    const text = "Abirami Sivakumar.";
    let index = 0;
    const typingSpeed = 150;
  
    function type() {
      if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
      }
    }
    setTimeout(type, 500);
  })();
  