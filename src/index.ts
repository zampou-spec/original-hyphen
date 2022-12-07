// here you put all the js you want.

window.onload = () => {
  const nav = document.querySelector('.navbar > .navbar-content');
  const menu = document.querySelector('.navbar .navbar__menu-icon');
  const lis = document.querySelectorAll('.navbar-content__menu li');

  const getPagename = () => {
    const pathname = window.location.pathname;

    let name = pathname.split('/')

    return '/' + name[name.length - 1]
  }

  lis.forEach((li) => {
    li.classList.remove('active')
  })

  lis.forEach((li) => {
    console.log(li.children[0]?.pathname, getPagename());
    
    if (li.children[0]?.pathname == getPagename()) {
      li.classList.add('active')
    }
  })

  menu?.addEventListener('click', () => {
    nav?.classList.toggle('mobile')
  })
}
