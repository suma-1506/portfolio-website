// Typing Animation for Hero Heading
const heroHeading = document.querySelector('.hero-text h1');
const text = "Hi, I'm Suma Priya Vaddi";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    heroHeading.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}

heroHeading.textContent = "";
typeEffect();


// Fade-in Reveal on Scroll for sections
const sections = document.querySelectorAll('section');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 150;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// Confetti effect on clicking "Visit Project" links
function createConfetti(x, y) {
  const colors = ['#ff0', '#f0f', '#0ff', '#0f0', '#f00', '#00f'];
  const confettiCount = 30;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '6px';
    confetti.style.height = '6px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.top = `${y}px`;
    confetti.style.left = `${x}px`;
    confetti.style.borderRadius = '50%';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = 9999;
    confetti.style.opacity = '1';
    confetti.style.transition = 'transform 1s ease-out, opacity 1s ease-out';

    document.body.appendChild(confetti);

    const angle = Math.random() * 2 * Math.PI;
    const distance = 100 + Math.random() * 50;
    const translateX = Math.cos(angle) * distance;
    const translateY = Math.sin(angle) * distance;

    setTimeout(() => {
      confetti.style.transform = `translate(${translateX}px, ${translateY}px)`;
      confetti.style.opacity = '0';
    }, 10);

    setTimeout(() => {
      confetti.remove();
    }, 1100);
  }
}

document.querySelectorAll('.project-card a').forEach(link => {
  link.addEventListener('click', e => {
    const rect = e.target.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    createConfetti(x, y);
  });
});


// Dark Mode Toggle Button
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = 'Toggle Dark Mode';
darkModeToggle.style.position = 'fixed';
darkModeToggle.style.top = '20px';
darkModeToggle.style.right = '20px';
darkModeToggle.style.padding = '8px 12px';
darkModeToggle.style.background = '#2575fc';
darkModeToggle.style.color = 'white';
darkModeToggle.style.border = 'none';
darkModeToggle.style.borderRadius = '5px';
darkModeToggle.style.cursor = 'pointer';
darkModeToggle.style.zIndex = 10000;

document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});


// Dynamic Greeting based on time of day
function updateGreeting() {
  let greetingElement = document.querySelector('.hero-text p.greeting');
  if (!greetingElement) {
    greetingElement = document.createElement('p');
    greetingElement.classList.add('greeting');
    greetingElement.style.fontSize = '1.5em';
    greetingElement.style.marginTop = '10px';
    greetingElement.style.fontWeight = '600';
    greetingElement.style.color = 'white';
    document.querySelector('.hero-text').appendChild(greetingElement);
  }

  const hour = new Date().getHours();
  let greetingText = '';

  if (hour < 12) {
    greetingText = 'Good Morning!';
  } else if (hour < 18) {
    greetingText = 'Good Afternoon!';
  } else {
    greetingText = 'Good Evening!';
  }

  greetingElement.textContent = greetingText;
}

updateGreeting();
setInterval(updateGreeting, 3600000); // Update every hour
