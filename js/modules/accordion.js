export default function initAccordion() {
  const activeClass = 'ativo';
  const listaAccordion = document.querySelectorAll(".faq-lista dt");

  listaAccordion.forEach(function(itemDT){
    itemDT.addEventListener('click', function(){
      listaAccordion.forEach(function(itemR){
      
        itemR.classList.remove(activeClass);
        itemR.nextElementSibling.classList.remove(activeClass);
      });
      this.classList.add(activeClass);
      this.nextElementSibling.classList.add(activeClass);

    });
  });

  
  

};

