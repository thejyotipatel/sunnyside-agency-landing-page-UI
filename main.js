const menuBtn = document.querySelector('.menu-btn')
const menuNev = document.querySelector('.mobile-nev')
const menuNevLinkBtn = document.querySelector('.mobile-nav-link')

const toggleMenu = (e) => {
  console.log('click')
  menuNev.style.display === 'block'
    ? (menuNev.style.display = 'none')
    : (menuNev.style.display = 'block')
}

menuBtn.addEventListener('click', toggleMenu)
menuNevLinkBtn.addEventListener('click', (e) => {
  console.log('link')
})
