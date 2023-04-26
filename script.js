function validateForm(){
    var name = document.myform.name.value;
    var mail = document.myform.mail.value;
    var password = document.myform.password.value;
    var password2 = document.myform.password2.value;

    if(name == "null" || name == ""){
        alert("hello EveryOne");
        
    }
    else if(password . length < 6){
        alert("length");
       
    }
    if(password == password2){
        alert("password is Same");
    }
}
prompt("hesso")