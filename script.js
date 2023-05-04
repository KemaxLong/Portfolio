// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Add a hover effect to the navigation links
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
link.addEventListener('mouseover', () => {
  link.classList.add('underline');
});
link.addEventListener('mouseout', () => {
  link.classList.remove('underline');
});
});

// Display a modal with more details about the work experience
const jobDetails = {
'Medical Laboratory Scientist': 'Worked in a busy medical laboratory performing a variety of diagnostic tests on blood and other body fluids.',
'Waitress': 'Provided excellent customer service and efficiently managed the ordering, delivery, and payment processes in a busy restaurant environment.'
};

const jobTitles = document.querySelectorAll('#work-history td:first-child');
jobTitles.forEach(title => {
title.addEventListener('click', () => {
  const jobTitle = title.innerText;
  const modal = document.createElement('div');
  modal.classList.add('fixed', 'top-0', 'left-0', 'h-screen', 'w-full', 'bg-gray-700', 'bg-opacity-50', 'flex', 'justify-center', 'items-center');
  modal.innerHTML = `
    <div class="bg-white rounded-lg p-4">
      <h3 class="text-lg font-bold mb-2">${jobTitle}</h3>
      <p class="mb-2">${jobDetails[jobTitle]}</p>
      <button class="bg-gray-900 text-white px-4 py-2 rounded-lg" onclick="document.body.removeChild(this.parentNode.parentNode)">Close</button>
    </div>
  `;
  document.body.appendChild(modal);
});
});
