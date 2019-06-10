function returnExperiencia(anos){
    if(anos>= 0 && anos <= 1){
        return "Iniciante";
    }
    else if(anos> 1 && anos <= 3){
        return "Intermediario";
    }else if(anos >3 && anos <= 6){
        return "Avançado";
    }
    else if(anos >= 7){
        return "Jedi Master";
    }
}

console.log(returnExperiencia(1));
console.log(returnExperiencia(2));
console.log(returnExperiencia(5));
console.log(returnExperiencia(7));