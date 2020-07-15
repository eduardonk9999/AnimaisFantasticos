
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

//Acordion List
function innitAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');

    accordionList[0].nextElementSibling.classList.add('ativo');

    if (accordionList.length) {
        function activeAccordion() {
            accordionList.forEach(function (itemAccordion) {
                itemAccordion.nextElementSibling.classList.remove('ativo');
                itemAccordion.classList.remove('ativo');
            });

            this.nextElementSibling.classList.toggle('ativo');
            this.classList.toggle('ativo');
        }

        accordionList.forEach(function (item) {
            item.addEventListener('click', activeAccordion);
        });
    }
};
innitAccordion();
