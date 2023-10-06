function mostraSenha(obj) {
    var obj = document.getElementById('myPassword');
    var imagem = document.getElementsByClassName('olho');
    if (obj.type == "password"){
        obj.type = "text";
        imagem.src = 'imagens/olhoaberto.png';
    }else{
        obj.type = "password";
        imagem.src = 'imagens/olhofechado.png';
    }
}

function verifyEmail(){
    document.getElementById("login_button").addEventListener("click", function(){
        var emailInput = document.getElementById("email");
        var display = document.getElementById("display_verify");
        var email = emailInput.value.trim();
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)){
            emailInput.classList.add("invalid");
            display.innerHTML = "Email invalido, Tente Novamente!";
            return;
        }else{
            emailInput.classList.remove("invalid");
            display.innerHTML = "Email Verified"
        }
    }
    );
}
function limpaDiv(){
    document.getElementById("reset_button").addEventListener("click", function(){
        var display = document.getElementById("display_verify");
        if(display.parentNode)
        {
            display.style.display = 'none';
            return;
        }
      
    }
    )
}