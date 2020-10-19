export default function initAnimaNumeros() {
  function animaNumeros() {
    const numeros = document.querySelectorAll('[data-numero]');

    numeros.forEach(function (numero) {
      const total = +numero.innerText;
      const inscremento = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(function () {
        start = start + inscremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
    });
  }





  //function callback para passar de parametro para o mutation
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observer.disconnect();
      animaNumeros();
    }
  }

  const observerTarget = document.querySelector('.numeros');
  //Objeto para escutar mudança
  const observer = new MutationObserver(handleMutation);

  observer.observe(observerTarget, { attributes: true });
};

