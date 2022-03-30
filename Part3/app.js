function age(){
    var userage = prompt();
    if (userage <= 60){
        alert("Welcome to Our Website");
        }
    else if(userage > 60) {
            alert("you are not old enough")
        }
    else if( isNaN(userage)){
    alert("age is not valid"); 
    }
    


}
age()