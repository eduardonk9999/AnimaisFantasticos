export default function initTooltip() {

}
const tooltipis = document.querySelectorAll('[data-tooltip]');

tooltipis.forEach(function (item) {
    item.addEventListener('mouseover', onMouseOver);
});

function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);


    onMouseMove.tooltipBox = tooltipBox;
    onMouseLeave.tooltipBox = tooltipBox;
    onMouseLeave.element = this;
    this.addEventListener('mouseleave', onMouseLeave);
    this.addEventListener('mousemove', onMouseMove);


}
const onMouseLeave = {
    tooltipBox: '',
    element: '',
    handleEvent() {
        this.tooltipBox.remove();
        this.element.removeEventListener('mouseleav', onMouseLeave);
        this.element.removeEventListener('mousemove', onMouseMove);
    }
}

const onMouseMove = {

    handleEvent() {
        this.tooltipBox.style.top = event.pageY + 20 + 'px';
        this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
}


function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerHTML = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;

}