const Menu = {
  navClass: '.js-nav',
  navMobileClass: '.js-m-nav',
  activeState: 'menu-open',
  init: function(){
    this.cloneMenu();
    this.handlersInit();
  },
  cloneMenu: function(){
    let menu = document.querySelector(this.navClass);
    let navMenu = document.querySelector(this.navMobileClass);
    let menuItems = menu.getElementsByClassName('nav__link');
    let mobileMenu = {};
    let mobileMenuList;


    menuItems = Array.from(menuItems);
    menuItems.map((elem, index)=>{
      mobileMenu[index] = {
        link: elem.getAttribute('href'),
        title: elem.getElementsByClassName('nav__t')[0].innerHTML
      }
    });

    mobileMenuList = '';
    for (let menuItem in mobileMenu) {
      let  menuChild = `<li class="m-nav__item"> 
        <a class="m-nav__link" href="${ mobileMenu[menuItem]['link'] }">${mobileMenu[menuItem]['title']}</a>
      </li>`
      mobileMenuList += menuChild;
    }
    
    navMenu.innerHTML = '';
    navMenu.innerHTML += mobileMenuList;
  },
  handlersInit: function(){
    document.querySelector('.burger').addEventListener('click', (e)=>{
      document.querySelector('body').classList.toggle(this.activeState)
    });
  }
}

module.exports = Menu;