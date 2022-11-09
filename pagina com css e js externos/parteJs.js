//meu formulario
function myFunction() {
    document.getElementById("demonst").innerHTML = "Agora sou um sapo.";
}

function myFunReverse() {
    document.getElementById("demonst").innerHTML = "Voltei a ser um pato.";
}

function secretoVerde() {
    document.getElementById("secreto").innerHTML = "E gosto de verde.";
}

function secretoVermelho() {
    document.getElementById("secreto").innerHTML = "E gosto de vermelho.";
}

function apagar() {
    document.getElementById("demonst").innerHTML = "Sou um pato.";
    document.getElementById("secreto").innerHTML = "";
}

//formulario do fim da pagina
function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  //
  function calculaMedia(nota1, nota2, peso1, peso2) {
    var media = 0;
    media = (parseFloat(nota1*peso1) + parseFloat(nota2*peso2)) / (parseFloat(peso1) + parseFloat(peso2)); 
    return media;
}//Calcula a media aritmetica ponderada a partir das notas e pesos fornecidos

function limpaCampo(campo) {
     if(campo == 1) {
         document.form.nota1.value ="";    // pega o elemento nota 1 pelo formulário
     }
     if(campo == 2) {
         document.getElementById("nota2").value= "";    // podemos pegar o elemento pelo ID dele também
     }
     if(campo == 3) {
         document.getElementById("peso1").value= ""; 
    }
     if(campo == 4) {
         document.getElementById("peso2").value = "";
    }                
}//Limpa o campo caso o usuario clique no espaço a ser preenchido

 //O enunciado pedia uma nova funçao p calcular media aritmetica e como ja tinha a ponderada criei uma simples abaixo
function mediasimples(nota1, nota2) {
     var media_sim = 0;
     media_sim = (parseFloat(nota1) + parseFloat(nota2)) / 2;
     return media_sim;
 }//calcula media aritmetica simples

 function media6() {
    //pegando o valor fornecido para media
    let x = document.getElementById("medfin").value;
    let texto;
    if (x >= 6) {
        texto = "Aprovado.";
    } else {
        texto = "Reprovado.";
    }
    document.getElementById("aprov").innerHTML = texto;
}//Valida se a media é maior ou igual a 6