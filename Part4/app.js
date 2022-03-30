function age(){
    var userage = prompt();
    if (userage > 18 && userage < 60){
        alert("Welcome to Our Website");
        }
    else if( isNaN(userage)){
            alert("age is not valid"); 
            }
    else {
            alert("you are not old enough")
        }
    
    


}
age()