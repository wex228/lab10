
let reels = document.querySelectorAll('.reel img'); 
const spinButton = document.getElementById('spinButton'); 
const emojis = ["cherries.png", "watermelon.png", "lemon.png"];

function spinReels() {
    result.textContent = ''; 
    const spinDuration = 1000;
    const spinSpeed = 50; 
    let spinInterval = []; 

    reels.forEach((reel, index) => {
        spinInterval[index] = setInterval(() => {
            const randomImage = emojis[Math.floor(Math.random() * emojis.length)]; 
            reel.src = randomImage; 
        }, spinSpeed);
    });

    setTimeout(() => {
        reels.forEach((_, index) => clearInterval(spinInterval[index])); 
        checkResult(); 
    }, spinDuration);
}

function checkResult() {
    const values = Array.from(reels).map(reel => reel.src); 
    if (values[0] == values[3] &&  values[3] == values[6]) {
        result.textContent = "Ви перемогли!";
    }
    else if(values[1] == values[4] &&  values[4] == values[7]){
        result.textContent = "Ви перемогли!";
    }
    else if(values[2] == values[5] &&  values[5] == values[8]){
        result.textContent = "Ви перемогли!";
    }
    else {
        result.textContent = "Спробуйте знову";
    }
}

spinButton.addEventListener('click', spinReels);