import MenuMobile from './module/initMenuMobile.js';
import Modal from './module/initModal.js';
import { initTransitionFormModal } from './module/initTransitionFormModal.js';
import { initTooltip } from './module/initTooltip.js';
import { initOpenModal } from './module/initOpenForm.js';
import AccordionList from './module/initAccordionList';

const initMenuMobile = new MenuMobile('[data-menu="list"]');
initMenuMobile.init();

const initModal = new Modal(
  '[data-modal="open"]',
  '[data-modal="close"]',
  '[data-modal="container"]'
);
initModal.init();

initTransitionFormModal();
initTooltip();
initOpenModal();

const initAccordionList = new AccordionList('[data-anime="accordion"] dt');
initAccordionList.init();
