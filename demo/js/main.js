const singupButton = document.getElementById('singUp');
const singinButton = document.getElementById('singIn');
const container = document.getElementById('container');


singupButton.addEventListener('click', () => {
    container.classList.add('container-right-panel-active');
});

singinButton.addEventListener('click', () => {
    container.classList.remove('container-right-panel-active');
})