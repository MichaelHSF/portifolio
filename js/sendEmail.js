function SendEmail() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const number = document.getElementById("number").value
    const message = document.getElementById("message").value

    var subject = document.getElementById("subject").value

    if( subject == null || subject == '' ){
        subject = "FORM PORTÓLIO✨⚠️:"
    }

    if ( name == null || name == '' ) {
        this.incompleteFormSwal("Por favor, preencha seu nome para que posse lhe reconhecer.");
        return false;
    }

    if ( (number == null || number == '') && (email == null || email == '') ) {
        this.incompleteFormSwal("Por favor, preencha uma forma de contato.");
        return false;
    }

    if ( message == null || message == '' ) {
        this.incompleteFormSwal("Por favor, preencha o campo de mensagem.");
        return false;
    }

    try {
        Email.send({
            SecureToken: '83878ba3-ab4c-4e79-952c-c961f43192e4',
            To: 'michaelh.trb@gmail.com',
            From: "michaelh.trb@gmail.com",
            Subject: `${subject}`,
            Body: `
                Name: ${name} <br>
                Email: ${email} <br>
                Numero: ${number} <br>
                Message: ${message}
            `
        }).then(() => {
            this.emailSuccessSwal();
        });
    } catch (error) {
        this.emailErrorSwal();
    }
}

function emailSuccessSwal(){
    Swal.fire({
        title: 'Mensagem enviada!',
        text: 'Agradeço o contato.',
        icon: 'success',
        confirmButtonText: 'Ok'
    })
}

function emailErrorSwal(){
    Swal.fire({
        title: 'Mensagem não enviada!',
        text: 'Por favor, utilize outra forma de contato.',
        icon: 'error',
        confirmButtonText: 'Ok'
    })
}

function incompleteFormSwal(message){
    Swal.fire({
        title: 'Atenção!',
        text: message,
        icon: 'warning',
        confirmButtonText: 'Ok'
    })
}