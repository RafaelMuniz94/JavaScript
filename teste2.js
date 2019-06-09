function retornarPares(num1, num2){
    var  vetor =[];
    var  index = 0;
    for(num1; num1 <= num2; num1++){
        if(num1%2 == 0){
            vetor[index] = num1;
            index ++;
        }
    }
    return vetor;
}

console.log(retornarPares(32,321))
