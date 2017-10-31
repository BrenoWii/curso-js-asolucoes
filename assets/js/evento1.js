var btn = document.querySelector("#btn-teste");




btn.onclick = function(){
    teste();
};


// ou 


btn.addEventListener('click',function(){
   teste() ;
});


function teste(){
    
    console.log('teste');
}