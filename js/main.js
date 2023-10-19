
const checkbox = document.querySelector('.accordion-btn');
const content = document.querySelector('.accordion__body');

checkbox.addEventListener('click', function({ currentTarget }) {
  const nextEl = currentTarget.nextElementSibling;
  if (!nextEl.classList.contains("active")) {
    nextEl.classList.add("active");
  }
})
