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
        var span = document.createElement('span');
        
        var text = document.createTextNode(tarefa);

        
        var btnApagar = document.createElement("button");
        btnApagar.innerText = 'Apagar';

        btnApagar.onclick = function() {
            tarefas.removeChild(this);
            todoList.removeChild(this);
        };

        span.appendChild(text);
        span.appendChild(btnApagar);

        linha.appendChild(span);
        todoList.appendChild(linha);

}