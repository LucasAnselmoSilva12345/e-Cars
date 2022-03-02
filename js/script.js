import { initMenuMobile } from './module/initMenuMobile.js';
import { initModal } from './module/initModal.js';
import { initTransitionFormModal } from './module/initTransitionFormModal.js';
import { initTooltip } from './module/initTooltip.js';
// import { initOpenModal } from './module/initOpenForm.js';
import AccordionList from './module/initAccordionList';

initMenuMobile();
initModal();
initTransitionFormModal();
initTooltip();
// initOpenModal();

const initAccordionList = new AccordionList('[data-anime="accordion"] dt');
initAccordionList.init();
