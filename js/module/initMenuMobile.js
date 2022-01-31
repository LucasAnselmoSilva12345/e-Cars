import { outsideClick } from './outsideClick.js';

export function initMenuMobile() {
  const menuList = document.querySelector('[data-menu="list"]');
  const eventos = ['click', 'touchstart'];

  if (menuList) {
    function openMenu(event) {
      menuList.classList.toggle('hidemenu');
      outsideClick(menuList, eventos, () => {
        menuList.classList.remove('hidemenu');
      });
    }

    eventos.forEach((evento) => {
      menuList.addEventListener(evento, openMenu);
    });
  }
}
