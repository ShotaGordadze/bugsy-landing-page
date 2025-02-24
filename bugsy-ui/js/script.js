document.querySelector('.info-one').onmousemove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X inside element
    const y = e.clientY - rect.top;  // Mouse Y inside element

    e.target.style.setProperty('--x', `${x}px`);
    e.target.style.setProperty('--y', `${y}px`);
};

document.querySelector('.info-two').onmousemove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X inside element
    const y = e.clientY - rect.top;  // Mouse Y inside element

    e.target.style.setProperty('--x', `${x}px`);
    e.target.style.setProperty('--y', `${y}px`);
};


document.querySelector('.info-three').onmousemove = (e) => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; // Mouse X inside element
    const y = e.clientY - rect.top;  // Mouse Y inside element

    e.target.style.setProperty('--x', `${x}px`);
    e.target.style.setProperty('--y', `${y}px`);
};

document.addEventListener("DOMContentLoaded", () => {
    const infoSections = document.querySelectorAll(".info");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          } else {
            entry.target.style.opacity = "0";
            entry.target.style.transform = "translateY(50px)";
          }
        });
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );
  
    infoSections.forEach(section => observer.observe(section));
  });
  

document.querySelector('.shiny-cta').addEventListener('click', function() {
    window.location.href = 'https://docs.google.com/forms/d/1yUad3S1KrFy0hZ6TJxbNnPmmOLz7B80mnxQZR961kHs/viewform?pli=1&pli=1&edit_requested=true';  // Replace with your desired URL
  });