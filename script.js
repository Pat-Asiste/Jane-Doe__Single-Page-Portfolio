function checkdata() {
    //Declarar Inputs.
    var nameInput = document.getElementById("name");
    var messageInput = document.getElementById("message");

    //Verificar si están vacíos.
    if (nameInput.value == "") {
        alert("Please enter your name");
        nameInput.focus();
        //interrumpe la función.
        return false;
    }
    if (messageInput.value == "") {
        alert("Please enter your recommendation");
        messageInput.focus();
        return false;
    }
    alert("Your recommendation was send. Thanks for your feedback!");
    return true;
}