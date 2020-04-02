/**/
function validaForm() {
    if (document.form.conta[0].checked == false
        && document.form.conta[1].checked == false) {
        alert('Por favor, selecione o campo forma de contato.');
        return false;
    }
    if (document.getElementById('input-comercial').checked == false &&
        document.getElementById('input-manha').checked == false &&
        document.getElementById('input-tarde').checked == false &&
        document.getElementById('input-noite').checked == false &&
        document.getElementById('text-input').value == "") {
        alert('Por favor, selecione o campo disponibilidade de contato.');
        return false;
    }

}



