// Sistema de contagem e classificação //

let quantidadeDeAlunos =  0 ;
quantidadeDeAlunos = prompt ("Digite a quantidade de alunos")

for(let i = 0; i <= quantidadeDeAlunos; i ++ ){
     if (i == 0){
        console.log  (i + "Zero");
        }else(i % 2 == 0) 
    {
         console.log(i + "Par");
        }else{
        console.log(i + "Impar");
    }
    
}