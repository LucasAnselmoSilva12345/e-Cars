export default class openSectionForm {
  constructor(btnToggleForm, sectionForm) {
    this.btnToggleForm = document.querySelector(btnToggleForm);
    this.sectionForm = document.querySelector(sectionForm);

    this.classActiveForm = 'activeForm';

    this.openForm = this.openForm.bind(this);
  }

  openForm(event) {
    event.preventDefault();
    this.sectionForm.classList.toggle(this.classActiveForm);
  }

  addEventOpenForm() {
    this.btnToggleForm.addEventListener('click', this.openForm);
  }

  init() {
    if (this.btnToggleForm && this.sectionForm) {
      this.addEventOpenForm();
    }
  }
}
