
//Navegação por tab
function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo')

        function activeTabe(index) {
            tabContent.forEach(function (itemContent) {
                itemContent.classList.remove('ativo');
            });

            tabContent[index].classList.add('ativo');
        };

        tabMenu.forEach(function (itemMenu, index) {
            itemMenu.addEventListener('click', function () {
                activeTabe(index);
            })
        });
    };

}
initTabNav();