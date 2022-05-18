function showMenu() {
  document.querySelector('#mobile-menu').style.display = 'inline-block';
  document.querySelector('.mobile-sectionLinks').style.display = 'flex';
  document.querySelector('header').style.display = 'none';
  document.querySelector('.headline').style.display = 'none';
  document.querySelector('.worksection').style.display = 'none';
  document.querySelector('.FlashCards').style.display = 'none';
  document.querySelector('.MainAboutme').style.display = 'none';
  document.querySelector('.footer').style.display = 'none';
}

function hideMenu() {
  document.querySelector('#mobile-menu').style.display = 'none';
  document.querySelector('header').style.display = 'block';
  document.querySelector('.headline').style.display = 'block';
  document.querySelector('.worksection').style.display = 'block';
  document.querySelector('.FlashCards').style.display = 'block';
  document.querySelector('.MainAboutme').style.display = 'block';
  document.querySelector('.footer').style.display = 'block';
}

document.getElementById('dropdown-id').addEventListener('click', showMenu);
document.getElementById('closebtn-id').addEventListener('click', hideMenu);

let menuLinks = Array.from(document.querySelectorAll(".menu-links"));
for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', hideMenu);
  }
