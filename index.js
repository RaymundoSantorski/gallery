let lastButton = document.getElementById('lastButton');
let nextButton = document.getElementById('nextButton');

function handleClick(e){
    this.classList.add('active');
    console.log(this.classList);
}

lastButton.addEventListener('click', handleClick);
nextButton.addEventListener('click', handleClick)