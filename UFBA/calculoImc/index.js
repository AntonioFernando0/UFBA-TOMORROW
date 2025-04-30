const buttonCalIMC = document.getElementById('calcularIMCtButton');
const resultIMC = document.getElementById('result');
const faixasIMC = document.querySelectorAll('.faixa');

function calcularIMC(){ 
    let nPeso   = document.getElementById('peso');
    let nAltura = document.getElementById('altura');

    if (nPeso.value !== '' && nAltura !== '') {
        let valPeso   = parseFloat(nPeso.value, 0);
        let valAltura = parseFloat(nAltura.value, 0);
        
        valAltura = valAltura / 100;
        let imc = valPeso / (valAltura * valAltura);
     
        resultIMC.value = imc.toFixed(1); 
        
        //let faixas = document.querySelectorAll('.faixa');

        for (let i = 0; i < faixasIMC.length; i++) 
        {
          faixasIMC[i].style.background = 'none';
        }
       


        // Update background color for the appropriate row
        if (imc < 18.50) {
          document.querySelector('.level1').style.background = '#FF5733';
        } 
        else if ( imc< 25.0) {
          document.querySelector('.level2').style.background = '#4CAF50';
        } 
        else if ( imc< 30.0) {
          document.querySelector('.level3').style.background = '#fce304';
        } 
        else if ( imc< 35.0) {
          document.querySelector('.level4').style.background = '#FF5733';
        } 
        else if ( imc< 40.0) {
          document.querySelector('.level5').style.background = '#FF5733';
        } 
        else {
          document.querySelector('.level6').style.background = '#FF5733';
        }
        
      
    }
  }
  
  calcularIMCButton.addEventListener('click',calcularIMC);
  