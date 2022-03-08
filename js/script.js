import MenuMobile from './module/initMenuMobile.js';
import Modal from './module/initModal.js';
import TransitionFormModal from './module/initTransitionFormModal.js';
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

const initTransitionFormModal = new TransitionFormModal(
  'form.login',
  'label.login',
  'label.signup',
  '.signup-link a',
  '.title-text .login'
);
initTransitionFormModal.init();

const initTooltip = new Tooltip('[data-tooltip]');
initTooltip.init();

const initOpenSectionForm = new openSectionForm(
  '[data-form="toggleForm"]',
  '[data-form="form"]'
);
initOpenSectionForm.init();

const initAccordionList = new AccordionList('[data-anime="accordion"] dt');
initAccordionList.init();
