// here you put all the js you want.

window.onload = () => {
  let menu = document.querySelector('.navbar .navbar__menu-icon');
  let nav = document.querySelector('.navbar > .navbar-content');
  
  menu?.addEventListener('click', () => {
    nav?.classList.toggle('mobile')
  })
}

