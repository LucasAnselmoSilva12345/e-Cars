import { outsideClick } from './outsideClick.js';

export function initMenuMobile() {
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click'];

  function openMenu() {
    menuList.classList.toggle('hidemenu');
    outsideClick(menuList, eventos, () => {
      menuList.classList.remove('hidemenu');
    });
  }

  if (menuList) {
    eventos.forEach((evento) => {
      menuList.addEventListener(evento, openMenu);
    });
  }
}
