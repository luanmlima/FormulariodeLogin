//Pegando o conteudo do botao de login
const btnLogin = document.querySelector('.btn-login');
const form = document.querySelector('form');

//Pegar o evento quando ele for clicado
btnLogin.addEventListener("click", (evento) => {
    event.preventDefault(); //Quando o botao for clicado ele vai travar a acao de submit
    form.classList.add('form-hide'); //Cria uma classe para o form
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
