const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');


   //functions
const validadeInput = ({target}) => {    //-- validar nome
    if(target.value.length > 2){
        button.removeAttribute('disabled');
    return;
    } 
    
    button.setAttribute('disabled','');    
}

const handleSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value); 
    window.location = 'assets/pages/game.html';
}


   //events

input.addEventListener('input', validadeInput);
form.addEventListener('submit', handleSubmit);