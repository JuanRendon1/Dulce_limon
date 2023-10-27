function animateMenuItems() {
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, index * 200);
    });
  }
  
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  window.addEventListener('scroll', () => {
    const menuSection = document.querySelector('.menu-section');
    if (isInViewport(menuSection)) {
      animateMenuItems();
      window.removeEventListener('scroll', animateMenuItems);
    }
  });
