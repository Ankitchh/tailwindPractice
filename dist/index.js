
function hamburger (){
    var ham = document.getElementById("menu");
    if(ham.style.display===block){
        ham.style.display="hidden";
    }
    else{
        ham.style.display="block";
    }
}