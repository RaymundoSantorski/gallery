let lastButton = document.getElementById('lastButton');
let nextButton = document.getElementById('nextButton');

function handleClick(e){
    this.classList.add('active');
}

function removeActive(e){
    if(e.propertyName !== 'background-color') return;
    this.classList.remove('active');
}

lastButton.addEventListener('click', handleClick);
nextButton.addEventListener('click', handleClick);

lastButton.addEventListener('transitionend', removeActive);
nextButton.addEventListener('transitionend', removeActive);