// Arquivo JS do projeto

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
		form["email"].valueOf.indexOf(".") == -1 ||
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
			return false;		
	}

	//Validação assunto

	//Validação Conteúdo
	if (form["subject"].value == "" || form["subject"].value == null) {
			msgBox.innerHTML = ("Por favor, escreva uma mensagem.");
			msgBox.classList.add('error')
			form.focus();
			return false;
	}

	//Máscara de Telefone

	//Validação Forma de Contato
  	if (document.form.conta[0].checked == false
    	&& document.form.conta[1].checked == false) {
   		alert('Por favor, selecione o campo forma de contato.');
    	return false;
    }


    //Validação Disponibilidade para Contato
  	if (document.getElementById('input-comercial').checked == false &&
    	document.getElementById('input-manha').checked == false &&
    	document.getElementById('input-tarde').checked == false &&
    	document.getElementById('input-noite').checked == false &&
    	document.getElementById('text-input').value == "") {
    	alert('Por favor, selecione o campo disponibilidade de contato.');
    	return false;
    }
}