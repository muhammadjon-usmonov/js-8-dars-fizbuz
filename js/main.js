var elForm = document.querySelector('.form');
var elInput = document.querySelector('.input');
var elHeading = document.querySelector('.heading');


elForm.addEventListener('submit', function(evt){

    evt.preventDefault();
     
    var countInput=Number(elInput.value.trim());

    if(countInput%3 == 0 && countInput%5 == 0)
    {
        elHeading.textContent="FizzzBuzzz";
    }
    
    else if(countInput % 3 ==0){
        elHeading.textContent="Buzzz";
    }

   else if(countInput % 5 ==0){
        elHeading.textContent="Fizzz";
    }
    else{
        elHeading.textContent="Ozgina adashdingiz eh attang ";
    }
})