window.onload = function (){
    var nome = ['breno','bruna','tesste','teste'];
    console.log (nome.splice(0,3));
    
    nome.push('joaozinho');
    
    console.log(nome);
    nome.pop ('breno');
    
    
};
//existe uma maneiro de criar um array, instancioando o new array
//FOREARCH
window.onload = function (){
    var nome = ['breno','bruna','tesste','teste'];
    nome.forEach(function(nome){
        //cria passa uma variavel por referencia somente para usar no log
        console.log(nome);
    });
    
    
    console.log(nome.length);
    
    //FOR
    
    for (i=0;i<nome.length;i++){
        console.log(nome[i]);
        
    }
    
    
    //WHILE
    var totalNomes= nome.length;
    var i = 0;
    while (i<totalNomes){
        console.log(nome[i]);
        i++;
        
    }
};