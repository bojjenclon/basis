'use strict';

export default class BasisNavbar {
  constructor() {
    this.items = document.querySelectorAll('[data-c="navbar__item"][aria-haspopup="true"], [data-c="navbar__subitem"][aria-haspopup="true"]');
    this.setListener();
  }

  setListener() {
    this.items.forEach((item, index, array) => {
      item.addEventListener('mouseover', (event) => {
        this.show(item.querySelector('[data-c="navbar__submenu"]'))
      })

      item.addEventListener('focus', (event) => {
        this.show(item.querySelector('[data-c="navbar__submenu"]'))
      })

      item.addEventListener('mouseleave', (event) => {
        this.hidden(item.querySelector('[data-c="navbar__submenu"]'))
      })
    })
  }

  show(submenu) {
    submenu.setAttribute('aria-hidden', 'false');
  }

  hidden(submenu) {
    submenu.setAttribute('aria-hidden', 'true');
  }
}
