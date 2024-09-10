function myFunction(){
    var inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()){
        document.getElementById("results").innerHTML= inpObj.validationMessage;
    }
    else{
        document.getElementById("results").innerHTML="input OK"
    }
}