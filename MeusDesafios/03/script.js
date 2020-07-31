//Pegando o conteudo do botao de login
const btnLogin = document.querySelector('.btn-login');
const form = document.querySelector('form');

//Pegar o evento quando ele for clicado
btnLogin.addEventListener("click", (evento)=>{
event.preventDefault(); //Quando o botao for clicado ele vai travar a acao de submit
form.classList.add('form-hide'); //Cria uma classe para o form

} )
