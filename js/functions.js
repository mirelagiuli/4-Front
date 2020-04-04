// Arquivo JS do projeto

//Validação Formulário Index
function sendForm() {
	var form = document.forms["form-Index"];
	var msgBox = document.querySelector(".message")
	msgBox.classList.remove('error');
    msgBox.innerHTML = "";

    //Validação NOME
	if (form["name"].value == "" || form["name"].value == null || 
		form["name"].value.lenght < 3) {
			msgBox.innerHTML = ("Por favor, preencha seu nome corretamente.");
			msgBox.classList.add('error')
			form.focus();
			return false;
	}

	//Validação EMAIL
	if (form["email"].value.indexOf("@") == -1 || 
		form["email"].value.indexOf(".") == -1 ||
		form["email"].value == "" || form["email"].value == null) {
			msgBox.innerHTML = ("Por favor, preencha com um email válido.");
			msgBox.classList.add('error')
			form.focus();
			return false;
	}

	//Validação Telefone
	if (form["phone"].value == "" || form["phone"].value == null) {
			msgBox.innerHTML = ("Por favor, preencha seu número de telefone.");
			msgBox.classList.add('error')
			form.focus();
			return false;		
	}

	//Validação Conteúdo
	if (form["msg-content"].value == "" || form["msg-content"].value == null) {
			msgBox.innerHTML = ("Por favor, escreva uma mensagem.");
			msgBox.classList.add('error')
			form.focus();
			return false;
	}

	//Validação Forma de Contato
  	if (form["conta"][0].checked == false
    	&& form["conta"][1].checked == false) {
 		msgBox.innerHTML = ("Por favor, selecione o campo forma de contato.");
		msgBox.classList.add('error')
		form.focus();
    	return false;
    }


    //Validação Disponibilidade para Contato
  	if (form["input-comercial"].checked == false &&
    	form["input-manha"].checked == false &&
    	form["input-tarde"].checked == false &&
    	form["input-noite"].checked == false &&
    	form["text-input"].value == "") {
 		msgBox.innerHTML = ("Por favor, selecione o campo disponibilidade de contato.");
		msgBox.classList.add('error')
		form.focus();
		return false;
    }
}

//Máscara de Telefone
function masktelefone(n, t) {
    var v = n.value;
    if (isNaN(v[v.length - 1])) {
        n.value = v.substring(0, v.length - 1);
        return;
    }
    if (t === "tel") {
        if (v.length === 1) n.value = "(" + n.value;
        if (v.length === 3) n.value += ") ";
        if (v[5] == 9) {
            n.setAttribute("maxlength", "15");
            if (v.length === 10) n.value += "-";
        } else {
            n.setAttribute("maxlength", "14");
            if (v.length === 9) n.value += "-";
        }
    }
}

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