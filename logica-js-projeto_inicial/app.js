alert('Boas vindas ao numero secreto');
  
  
  let numeroSecreto = 6;
  
  
  console.log(numeroSecreto);
  
  
  let
  chute;
  
  
  let
  tentativas = 1;
  
  
  
  while
  (chute != numeroSecreto) {
  
  
   
    chute = prompt('Escolha um número entre 1 e 10');
  
  
   
    // se chute for igual ao número secreto
  
  
   
    if (chute == numeroSecreto) {
  
  
   
        break;
  
  
   
       
  
  
   
    } else {
  
  
   
        if (chute > numeroSecreto) {
  
  
   
        alert (`O numeroSecreto é menor que ${chute}`);
  
  
   
        } else {
  
  
   
        alert (`O numeroSecreto é maior que ${chute}`);
  
  
   
        }
  
  
   
    }   //tentativas = tentativas + 1;
  
  
   
        tentativas++;
  
  
  }
  
  
  let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
  
  alert(`Isso
  aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas}
  ${palavraTentativa}.`);
  
  
   
  
  
  
 
     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}
  com ${tentativas} tentativas.`);
  
  
 
  
  
 
   alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com
  ${tentativas} tentativa.`);
  
  
  