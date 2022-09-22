const menuBtn = document.querySelector('.menu-btn')
const menuNev = document.querySelector('.mobile-nav-bar')
const menuNevLinkBtn = document.querySelector('.mobile-nav-link')

const toggleMenu = (e) => {
  console.log('click')
  menuNev.style.display === 'flex'
    ? (menuNev.style.display = 'none')
    : (menuNev.style.display = 'flex')
}

menuBtn.addEventListener('click', toggleMenu)
// menuNevLinkBtn.addEventListener('click', (e) => {
// console.log('link')
// })
