import outsideClick from './outsideClick.js';

export default class MenuMobile {
  constructor(menuList, events) {
    this.menuList = document.querySelector(menuList);

    if (events === undefined) {
      this.events = ['click'];
    } else {
      this.events = events;
    }

    this.classActiveHideMenu = 'hidemenu';

    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    this.menuList.classList.toggle(this.classActiveHideMenu);
    outsideClick(this.menuList, this.events, () => {
      this.menuList.classList.remove(this.classActiveHideMenu);
    });
  }

  addMenuMobileEvent() {
    this.events.forEach((evento) => {
      this.menuList.addEventListener(evento, this.openMenu);
    });
  }

  init() {
    if (this.menuList) {
      this.addMenuMobileEvent();
    }
    return this;
  }
}
