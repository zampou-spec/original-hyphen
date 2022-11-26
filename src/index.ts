// here you put all the js you want.

document.addEventListener('load', () => {
  const pathname = window.location.pathname;
  const nav = document.querySelector('.navbar > .navbar-content');
  const menu = document.querySelector('.navbar .navbar__menu-icon');
  const lis = document.querySelectorAll('.navbar-content__menu li');

  lis.forEach((li) => {
    li.classList.remove('active')
  })

  lis.forEach((li) => {
    if (li.children[0]?.pathname == pathname) {
      li.classList.add('active')
    }
  })

  menu?.addEventListener('click', () => {
    nav?.classList.toggle('mobile')
  })
})
