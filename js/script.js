// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function() {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// Fade-in animation on scroll
function observeElements() {
  const elements = document.querySelectorAll('.service-card');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(element => {
    observer.observe(element);
  });
}

observeElements();

// Form submission
if (document.getElementById('contactForm')) {
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message! We will contact you shortly.');
    this.reset();
  });
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


//google drive link
const images = [
"https://drive.google.com/thumbnail?id=1fsKy5aHh2CH0VlRt9uBplkSWRhgqHLVD&sz=w1000",
"https://drive.google.com/thumbnail?id=1-9CikNKPrsd5VBQp4vE171I36Ik3GmyV&sz=w1000",
"https://drive.google.com/thumbnail?id=1nh43k8SP6z1Q3QqqZgENkA39QFTHJA2n&sz=w1000",
"https://drive.google.com/thumbnail?id=1bmiC7ZQlJ0E-xo4e06bF6a3lAGYFm-3_&sz=w1000",
"https://drive.google.com/thumbnail?id=1agJDGN7qErKsGv1j75HhLlRrodkF5Ud7&sz=w1000"
];


const gallery = document.getElementById("galleryGrid");

// shuffle images
images.sort(() => 0.5 - Math.random());

// show only 6
for(let i = 0; i < 6; i++){

const item = document.createElement("div");
item.className = "gallery-item";

item.innerHTML = `
<img src="${images[i]}" alt="CCTV Camera Installation, GPS Services, Bike GPS, Car GPS">
<div class="gallery-overlay">MST Installation</div>
`;

gallery.appendChild(item);


}


