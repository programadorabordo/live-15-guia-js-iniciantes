const contador = document.querySelector('#contador');
const steps = 1;

document.querySelector('#btnDec')
  .addEventListener('click', function() {
    /**
     * * 1) Pegar o valor que está no meu input text
     * * 1.2) Converter valor para um número
     * * 2) Decrementar o valor em - 1
     * * 3) Renderizar essa nova informação na interface
     */
    
    const valor = (+contador.value) - steps;
    localStorage.setItem('contador', valor);
    contador.value = valor;
  });


document.querySelector('#btnInc')
  .addEventListener('click', function() {
    const valor = (+contador.value) + steps;
    localStorage.setItem('contador', valor);
    contador.value = valor;
  });

contador.value = localStorage.getItem('contador') ?? 0;