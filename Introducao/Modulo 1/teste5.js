function retornaHabilidades(usuarios){

    for(var usuario of usuarios){
        var texto = "O "+ usuario.nome;
        texto += " possui as habilidades: ";
    
        texto += usuario.habilidades.join(",");
        console.log(texto);
    }
    
}

var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
   ];

   retornaHabilidades(usuarios)