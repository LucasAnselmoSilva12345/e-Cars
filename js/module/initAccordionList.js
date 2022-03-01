export default class AccordionList {
  constructor(list) {
    this.accordionList = document.querySelectorAll(list);
    this.classActiveAccordion = 'activeAccordionList';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.classActiveAccordion);
    item.nextElementSibling.classList.toggle(this.classActiveAccordion);
  }

  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener('click', () => {
        this.toggleAccordion(item);
      });
    });
  }

  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
  }
}
