document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('Formulario');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const paragraph = document.getElementById('warning');

    form.addEventListener("submit", e => {
        e.preventDefault();
        let warnings = "";
        paragraph.innerHTML = "";
        let submit = true;
        let regExemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        // nombre
        if (nombre.value == "") {
            warnings += 'Nombre invalido';
            submit = false;
        } else if (nombre.value.length < 3) {
            warnings += 'El nombre debe tener al menos 3 letras<br>';
            submit = false;
        }

        // email
        if (!regExemail.test(email.value)) {
            submit = false;
            warnings += 'Correo invalido<br>';
        }

        // submit
        if (submit) {
            paragraph.innerHTML = "Sent";
        } else {
            paragraph.innerHTML = warnings;
        }
    });
});