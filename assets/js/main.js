const productCardStyles = document.createElement('link');
productCardStyles.rel = 'stylesheet';
productCardStyles.href = 'assets/css/brand-product-card-fix.css';
document.head.appendChild(productCardStyles);

const menuButton = document.querySelector('[data-menu-toggle]');
const menu = document.querySelector('[data-menu]');

if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
