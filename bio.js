const isMenuOpen = localStorage.getItem('isMenuOpen');
  const sidebar = document.querySelector('.menu');

  if (isMenuOpen === 'true') {
    sidebar.style.left = '0';
  } else {
    sidebar.style.left = '-650px';
  }

  function toggleMenu() {
    const isMenuOpen = sidebar.style.left === '-650px' ? true : false;

    if (isMenuOpen) {
      sidebar.style.left = '0';
    } else {
      sidebar.style.left = '-650px';
    }

    localStorage.setItem('isMenuOpen', isMenuOpen);
  }

  function closeMenu() {
    sidebar.style.left = '-650px';

    localStorage.setItem('isMenuOpen', false);
  }

  window.onbeforeunload = function() {
    localStorage.removeItem('isMenuOpen');
  }