/*
:::::::::::::::::::::::::::::::::::::::::::::::::::
Área dedicada as variaveis utilizadas nas questões.
:::::::::::::::::::::::::::::::::::::::::::::::::::
*/

let pergunta01 = ["No Scrum dividimos o projetos, como são chamadas essas divisões?", "Sprints.", "Product Backlog.", "Daily Scrum.", "Product Owner.", 0];

let pergunta02 = ["Quando um Sprint termina? ","Quando todos os itens do Product Backlog atingem a sua definição 'Feito' no quadro Kanbam." ,"Ao expirar o tempo definido. " ,"Quando todas as tarefas foram concluídas. " , "Quando o PO diz que ela chegou ao fim.", 1];

let pergunta03 = ["Qual o objetivo das Daily Scrum?", "Identificar o que funcionou bem, o que pode ser melhorado e que ações serão tomadas para melhorar.", "Reuniões longas para se discutir o projeto, sendo realizadas duas a três vezes na semana.", "Ela tem como objetivo disseminar conhecimento sobre o que foi feito no dia anterior, identificar impedimentos e priorizar o trabalho a ser realizado no dia que se inicia.", "Revisar o projeto e realizar testes.", 2];

let pergunta04 = ["Quem deve saber mais sobre o progresso em direção a um objetivo de negócio ou um lançamento, e ser capaz de explicar as alternativas mais claramente?", "O Product Owner.", "A equipe de desenvolvimento.", "O Gerente de Projeto.", "O Scrum Master. ", 3];

let pergunta05 = ["Qual afirmação melhor descreve a 'Sprint Retrospective'? ", " É quando a Equipe e as partes interessadas inspecionam o resultado da Sprint e descobrem o que fazer na próximo Sprint. ", "É uma revisão das atividades da equipe durante o Sprint.", "É uma demonstração no final da Sprint para todos na organização para fornecer feedback sobre o trabalho realizado. ", "Ela é usada para felicitar a equipe de desenvolvimento com ituito de  punir os membros que não cumpriram seus compromissos.", 4];

let pergunta06 = ["Quem tem a última palavra sobre a ordem do Product Backlog?", "Os Stakeholders.", "O Scrum Master.", "A Equipe de Desenvolvimento.", "O Product Owner.", 5];

let pergunta07 = ["De acordo com o Guia do Scrum (Scrum.org), como é constituído um Time Scrum?", "Project Manager, Agile Master e Administrator.", "Agile coordinator, Scrum e Lean.", "Product Owner, Scrum Master e Developers.", "Sprint, Portfolio manager e Stakeholders.", 6];

let pergunta08 = ["A metodologia Scrum estabelece vários papéis a serem desempenhados pelo time. O responsável por controlar o progresso do desenvolvimento do projeto e ser o guardião dos ritos é o:", "product owner. ", "patrocinador do projeto.","stakeholder.", "scrum master.", 7];

let pergunta09 = ["São artefatos do Scrum:", "Sprint Backlog, Product Backlog, Increment.", 'Sprint Planning, Sprint Review, Sprint Retrospective.', 'Sprint, Product Backlog, Sprint Review.', 'Sprint Planning, Daily Scrum, Increment.', 8];

let pergunta10 = ["No contexto do SCRUM, a evolução diária da quantidade de atividades por fazer e da quantidade de atividades concluídas pode ser visualizada no diagrama:", "backlog scrum.", "backlog burndown.", "daily scrum.", "sprint burndown.", 9];

var lista;
var resposta = { 0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0 };
var gabarito = { 0:0.1, 1:1.2, 2:2.3, 3:3.4, 4:4.1, 5:5.2, 6:6.3, 7:7.4, 8:8.1, 9:9.2 };
var resultado = 0;

/* 
:::::::::::::::::::::::::::::::::::::::::::::::::::::::
Determina questão a ser carregada e carrega respostas.
:::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

window.onload = carregar(pergunta01);

function carregar(var1) {
  lista = [var1];
  n1 = lista[0][5]
  //console.log(lista)
  document.getElementById("pergunta_").textContent = lista[0][0];
  document.getElementsByClassName("botao_1")[n1].style.backgroundColor = "#b20000";
  document.getElementsByClassName("botao_1")[n1].style.color = "white";

  for(i=0; i < 10; i++){
    if (i != n1){
    document.getElementsByClassName("botao_1")[i].style.backgroundColor = "white";
    document.getElementsByClassName("botao_1")[i].style.color = "#b20000";
  }
}
  for (i = 0; i < document.getElementsByClassName("lista").length; i++) {
    document.getElementsByClassName("lista")[i].textContent = lista[0][i + 1];
  }
  animaBotaoResposta()
}

/* 
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 Executa o carregamento das respostas sobre o array resposta para check final. 
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function answer(var1) {
  let n2 = lista[0][5]
  resposta[lista[0][5]] = n2 + (var1/10);
  //console.log(n2)
  //console.log(resposta);
  animaBotaoResposta()
}

/* 
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Realiza teste das respostas e trabalha String a ser apresentada no diploma.
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function answerTest() {
  for (i = 0; i < 10; i++) {
    //console.log(gabarito[i])
    //console.log(resposta[i])
    if (resposta[i] == gabarito[i]) {
      resultado += 1;
    }
  }

  console.log(resultado);

  document.getElementsByClassName("quizz")[0].style.display = "none";
  document.getElementsByClassName("quizz")[1].style.display = "none";
  document.getElementsByClassName("diploma")[0].style.display = "block";
  document.getElementsByClassName("diploma2")[0].style.display = "block";

  document.getElementById("nota_diploma").textContent = `Nota avaliação : ${resultado} de 10`;
}

function teste() {
  console.log(document.getElementById("botao_1").value);
}

/* 
:::::::::::::::::::::::::::::::::::::::::
Segunda etapa do carregamento do diploma. 
:::::::::::::::::::::::::::::::::::::::::
*/

var nomeDiploma;
var raDiploma;

function carregaDados() {
  // Grava nome em uma variavel e carrega no <div> Diploma

  //console.log(document.getElementById("nome_diploma").value);

  nomeDiploma = document.getElementById("nome_diploma").value;
  raDiploma = document.getElementById("ra_diploma").value;

  //console.log(nomeDiploma);

  // Manipulação documento Diploma

  document.getElementById("diploma_nome").textContent = `Aluno: ${nomeDiploma}`;
  document.getElementById("diploma_ra").textContent = `RA : ${raDiploma}`;

}

function imprimir() {
  document.getElementsByClassName("quizz")[0].style.display = "none";
  document.getElementsByClassName("diploma")[0].style.display = "none";
  document.getElementById("imagem_diploma").style.display = "block";
 
  window.print();
}

/* 
::::::::::::::::::::::::::::::::::::::
Função dedicada a animação dos botoes.
::::::::::::::::::::::::::::::::::::::
*/

function animaBotaoResposta(){

    for (i = 0; i < document.getElementsByClassName("lista").length; i++) {
        n1 = lista[0][5]
        n2 = document.getElementsByClassName("lista")[i].value = n1 + ((i+1)/10)
        n3 = resposta[n1]


        //console.log(n1)
        //console.log(n2)
        //console.log(n3)
        
        if (n2 == n3){
            document.getElementsByClassName("lista")[i].style.backgroundColor = "#054166"
            document.getElementsByClassName("lista")[i].style.color = "#B3B012"
        }else {
            document.getElementsByClassName("lista")[i].style.backgroundColor = "white" 
            document.getElementsByClassName("lista")[i].style.color = "black"

        }
    
     }
}

// Commit   
