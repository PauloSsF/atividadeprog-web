function enviarFormulario(formulario) {   

    document.getElementsByTagName("tbody")[0].innerHTML +=

    "<tr>\
    <td> "+ formulario.nome.value + " </td>\
    <td> "+ formulario.email.value + " </td>\
    <td> "+ formulario.telefone.value + "</td>\
    <tr>\
    ";
    return false;
}

