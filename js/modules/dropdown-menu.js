export default function initDropdownMenu() {

};

const dropdownMenus = document.querySelectorAll('[data-dropdown]');

dropdownMenus.forEach(function(menu){
  ['touchstart', 'click'].forEach(function(userEvent){
    menu.addEventListener(userEvent, handleClick);
  });
});

function handleClick(event) {
  event.preventDefault();
  this.classList.add('active');
  outsideClick(this, () => {
    this.classList.remove('active');
  });
};

function outsideClick(element, callback) {
  const html = document.documentElement;
  html.addEventListener('click', handleOutsideClick);
  function handleOutsideClick(event) {
    if(!element.contains(event.target)){
      html.removeEventListener('click', handleOutsideClick);
      callback();
    }
  };
};

