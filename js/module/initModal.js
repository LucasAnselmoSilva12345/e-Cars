export default class Modal {
  constructor(openModal, closeModal, containerModal, events) {
    this.openModal = document.querySelector(openModal);
    this.closeModal = document.querySelector(closeModal);
    this.containerModal = document.querySelector(containerModal);

    this.classActiveModal = 'activeModal';

    if (events === undefined) {
      this.events = ['click'];
    } else {
      this.events = events;
    }

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickAwayModal = this.clickAwayModal.bind(this);
  }

  toogleModal() {
    this.containerModal.classList.toggle(this.classActiveModal);
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toogleModal();
  }

  clickAwayModal(event) {
    if (event.target === this.containerModal) {
      this.toogleModal();
    }
  }

  addModalEvent() {
    this.openModal.addEventListener(this.events, this.eventToggleModal);
    this.closeModal.addEventListener(this.events, this.eventToggleModal);
    this.containerModal.addEventListener(this.events, this.clickAwayModal);
  }

  init() {
    if (this.openModal && this.closeModal && this.containerModal) {
      this.addModalEvent();
    }
    return this;
  }
}
