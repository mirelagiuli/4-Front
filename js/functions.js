// Arquivo JS do projeto

// PLUGIN JPAGES -- RESPONSE__MANAGEMENT
$(function(){

    $("div.holder").jPages({
      containerID : "management",
      perPage : 10,
    });
  
  });

/*
 *Codigo para validação do login 
*/

function validaLogin(){
    
  const username = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  if ( username == "academy@cocreare.com.br" && password == "123456"){        
      window.location = "/management.html";
      return true;
  } else {
      alert ("Login ou senha incorreta!!");
      return false;
  }
}

/**
 * Fim da validação de login
 */