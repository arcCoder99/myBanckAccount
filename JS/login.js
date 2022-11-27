document.getElementById("signInButton").addEventListener("click", function(){
    // console.log("Button is captured");

    let myEmail = document.getElementById("emailAddrs");
    const var1 = myEmail.value;
    let myPassword = document.getElementById("myPW");
    const var2 = myPassword.value;

    if(var1 == "abc@gmail.com" && var2 == "1234"){
        window.location.href="accountPage.html";
    } 
    else{alert("You entered a wrong Username or Password")};
})



