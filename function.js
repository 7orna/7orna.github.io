let hideText_btn = document.getElementById('hideText_btn')
let hideText = document.getElementById('hideText')

hideText_btn.addEventListener('click', toogleText);

function toogleText() {
    hideText.classList.toggle('show');

    if(hideText.classList.contains('show')){
        hideText_btn.innerHTML = 'Ver menos';
    }
    else {
        hideText_btn.innerHTML = 'Ver mas';
    }
}