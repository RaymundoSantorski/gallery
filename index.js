let currentActive = 0;
let imagesNum = document.querySelectorAll('.image').length;
let lastButton = document.getElementById('lastButton');
let nextButton = document.getElementById('nextButton');

function handleClick(e){
    this.classList.add('active');
    let lastImage = document.getElementById(`image${currentActive%imagesNum}`);
    lastImage.classList.remove('active');
    if(this.id === 'lastButton') currentActive = (imagesNum + (currentActive - 1))%imagesNum;
    else currentActive = (imagesNum + currentActive + 1)%imagesNum;
    document.getElementById(`image${currentActive%imagesNum}`).classList.add('active');
}



function removeActive(e){
    if(e.propertyName !== 'background-color') return;
    this.classList.remove('active');
}

lastButton.addEventListener('click', handleClick);
nextButton.addEventListener('click', handleClick);

lastButton.addEventListener('transitionend', removeActive);
nextButton.addEventListener('transitionend', removeActive);