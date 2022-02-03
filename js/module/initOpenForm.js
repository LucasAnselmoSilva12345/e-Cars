export function initOpenModal() {
  const btnToggleForm = document.querySelector('[data-form="toggleForm"]');
  const sectionForm = document.querySelector('[data-form="form"]');

  function openForm(event) {
    event.preventDefault();
    sectionForm.classList.toggle('activeForm');
  }

  btnToggleForm.addEventListener('click', openForm);
}
