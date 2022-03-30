function Age(){
    var userage = prompt ("Your age");
     
    
    if (userage >= 18){
        alert("Welcome to Our Website");
        }
    else if(userage < 18) {
            alert("you are not old enough")
        }
    else if( isNaN(userage)){
    alert("age is not valid"); 
    }

}
Age()

let check = isNaN("77")
console.log(check);