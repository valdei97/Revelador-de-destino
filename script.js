const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente.",
  "Minha resposta é não.",
  "Você não pode contar com isso.",
  "melhor não te dizer agora.",
  "Ao meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível ver agora.",
  "Perspectiva boa.",
  "As perspectivas não são muito boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]


//clicar em fazer pergunta
function fazerPergunta(){
  if(inputPergunta.value == "") {
    alert("Digite sua pergunta")
    return
  }
  buttonPerguntar.setAttribute("disabled", true)
  const pergunta = "<div>" + inputPergunta.value + "</div>"
  
  //gerar numero aleatorio
  const totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)
    console.log(respostas[numeroAleatorio])
    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
  elementoResposta.style.opacity = 1;
  //sumir com a resposta em 3s
  setTimeout(function(){
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  },3000)
 
}