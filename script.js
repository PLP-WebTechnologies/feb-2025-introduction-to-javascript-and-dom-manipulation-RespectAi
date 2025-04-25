
// Change the heading text dynamically
const changeTextBtn = document.getElementById('changeTextBtn');
const headingInput = document.getElementById('headingInput');
changeTextBtn.addEventListener('click', () => {
  const heading = document.getElementById('mainHeading');
  heading.textContent = headingInput.value || 'Welcome to Interactive DOM Manipulation';
});

// Toggle the blue box visibility
const toggleBoxBtn = document.getElementById('toggleBoxBtn');
const box = document.getElementById('box');
toggleBoxBtn.addEventListener('click', () => {
  box.classList.toggle('hidden');
});

// Change box background color via color picker
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('input', (e) => {
  box.style.backgroundColor = e.target.value;
});

// Dynamically add a paragraph on load
window.addEventListener('DOMContentLoaded', () => {
  const dynamicDiv = document.getElementById('dynamicContent');
  const p = document.createElement('p');
  p.textContent = 'This is a paragraph added using Java Script dynamiclly';
  dynamicDiv.appendChild(p);
});

// Add and remove list items
const addItemBtn = document.getElementById('addItemBtn');
const newItemInput = document.getElementById('newItemInput');
const itemList = document.getElementById('itemList');
addItemBtn.addEventListener('click', () => {
  const value = newItemInput.value.trim();
  if (!value) return;
  const li = document.createElement('li');
  li.textContent = value;
  const removeBtn = document.createElement('button');
  removeBtn.textContent = '✖';
  removeBtn.addEventListener('click', () => li.remove());
  li.appendChild(removeBtn);
  itemList.appendChild(li);
  newItemInput.value = '';
});

// Theme toggle (light/dark mode)
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('change', (e) => {
  document.body.classList.toggle('dark-mode', e.target.checked);
});