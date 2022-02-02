export function initModal() {
  const openModal = document.querySelector('[data-modal="open"]');
  const closeModal = document.querySelector('[data-modal="close"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  function toogleModal(event) {
    event.preventDefault();
    containerModal.classList.toggle('activeModal');
  }

  function clickAwayModal(event) {
    if (event.target === this) {
      toogleModal(event);
    }
  }

  if (openModal && closeModal && containerModal) {
    openModal.addEventListener('click', toogleModal);
    closeModal.addEventListener('click', toogleModal);
    containerModal.addEventListener('click', clickAwayModal);
  }
}
