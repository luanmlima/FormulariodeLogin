//Pegando o conteudo do botao de login
const btnLogin = document.querySelector('.btn-login');
const form = document.querySelector('form');

//Pegar o evento quando ele for clicado
btnLogin.addEventListener("click", (event) => {
    event.preventDefault(); //Quando o botao for clicado ele vai travar a acao de submit

    //Validando input
    const fields = [...document.querySelectorAll('.input-block input')];

    //Criando um evento que verifica se os campos estao vazios e cria uma classe para chamar o evento
    fields.forEach(field => {
        if (field.value === '') {
            form.classList.add('validate-error');
        }
    });

    const formError = document.querySelector('.validate-error');
    if (formError) {
        formError.addEventListener('animationend', (event) => {
            if (event.animationName === 'nono') {
                formError.classList.remove('validate-error');
            }   
        })
    }
    else {
        form.classList.add('form-hide'); //Cria uma classe para o form
    }
})

//Desafio 4
//Remove a barra de rolagem assim que o evento de animação Down comecar
//Para evitar que o body da página fique maior
form.addEventListener('animationstart', (event) => {
    if (event.animationName === 'down') {
        document.querySelector('body').style.overflow = 'hidden';
    }
})


//Adiciona um ouvidor, assim que a animacao acabar (se for a animacao down)
//Aciona um estilo no form que faz com que a animação não seja mais vista
form.addEventListener('animationend', (event) => {
    if (event.animationName === 'down') {
        form.style.display = 'none';
        document.querySelector('body').style.overflow = 'none';
    }
});


