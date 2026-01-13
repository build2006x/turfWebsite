const nav_bar = document.querySelector('.toggle')
const nav_menu = document.querySelector('.nav_menu')
const menubar = document.querySelector('.menubar') // Make sure this exists in your HTML

function toggleMenu() {
  nav_bar.classList.toggle('active')
  nav_menu.classList.toggle('active')
}

function closeMenu() {
  nav_bar.classList.remove('active')
  nav_menu.classList.remove('active')
}

nav_bar.addEventListener('click', toggleMenu)
menubar?.addEventListener('click', toggleMenu) // Optional chaining to avoid error if null

// Close on scroll
window.addEventListener('scroll', closeMenu)
// Disable scroll restoration so the browser doesn't jump to previous scroll position
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

//creating a loop desrcipition for the slides
const contentList = [
  {
    title: "Chennai Institute of Technology",
    description: "Where my foundation in engineering was built, and my curiosity found direction. This campus didn’t just teach me code—it shaped my mindset for real-world problem solving."
  },
  {
    title: "Hackathon Nights",
    description: "Sleepless hours, breakthrough ideas, and the thrill of building something that matters. These events taught me that collaboration and chaos often lead to innovation."
  },
  {
    title: "Modular Thinking in Motion",
    description: "From FastAPI to MongoDB, every project was a puzzle waiting to be solved. I learned to break down complexity and build systems that scale with clarity."
  },
  {
    title: "Peer Power & Growth",
    description: "Surrounded by driven minds, I found not just teammates—but lifelong collaborators. Every conversation, every shared bug fix, pushed me closer to the developer I aim to be."
  }
];

let index = 0;

function cycleContent() {
  const container = document.querySelector(".des_video");
  const titleElement = container.querySelector("h1");
  const descElement = container.querySelector("p");

  setInterval(() => {
    const current = contentList[index];
    titleElement.textContent = current.title;
    descElement.innerHTML = current.description.replace(/\n/g, "<br>");
    index = (index + 1) % contentList.length;
  }, 2000);
}

// Call this after DOM is loaded
document.addEventListener("DOMContentLoaded", cycleContent);




