var todoList = document.querySelector("#todoList");
var btnAdicionar = document.querySelector("#btnAdicionar");
var inputTarefa = document.querySelector("#txtNovaTarefa");

var tarefas = [];


btnAdicionar.onclick = function (){
    if(inputTarefa.value !== ""){
        adicionarTarefa(inputTarefa.value);
        inputTarefa.value = "";
    }
};

function adicionarTarefa(tarefa){
    tarefas.push(tarefa);
    preencherLista(tarefa);
}


function preencherLista(tarefa){
    
        var linha = document.createElement("li");
        var text = document.createTextNode(tarefa);

        linha.appendChild(text);
        todoList.appendChild(linha);
    
}