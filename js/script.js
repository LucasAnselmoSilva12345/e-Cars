import MenuMobile from './module/initMenuMobile.js';
import Modal from './module/initModal.js';
import { initTransitionFormModal } from './module/initTransitionFormModal.js';
import Tooltip from './module/initTooltip.js';
import openSectionForm from './module/initOpenForm.js';
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

const initTooltip = new Tooltip('[data-tooltip]');
initTooltip.init();

const initOpenSectionForm = new openSectionForm(
  '[data-form="toggleForm"]',
  '[data-form="form"]'
);
initOpenSectionForm.init();

const initAccordionList = new AccordionList('[data-anime="accordion"] dt');
initAccordionList.init();
