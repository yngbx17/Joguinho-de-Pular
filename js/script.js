const alucard = document.querySelector('.alucard');
const pipe = document.querySelector('.pipe');
let score = 0;

const jump = () => {
    alucard.classList.add('jump');
     
    setTimeout(() => {

    alucard.classList.remove('jump');
    
    }, 500);

}
    
const loop = setInterval (() => {

const pipePosition = pipe.offsetLeft;
const alucardPosition = +window.getComputedStyle(alucard).bottom.replace('px', '');

if (pipePosition <= 76 && pipePosition > 0 && alucardPosition < 76 ){
   
   pipe.style.animation = 'none';
   pipe.style.left = `${pipePosition}px`;

   alucard.style.animation = 'none';
   alucard.style.bottom = `${alucardPosition}px`;

   alucard.src = './images/output.png';
   alucard.style.width = '200px'
   alucard.style.marginRight = '-20px'
   clearInterval(loop)
}
score++;
            updateScore();
} , 10);
const updateScore = () => {
    document.getElementById("score").innerText = `Score: ${score}`;
}
document.addEventListener('keydown', jump)
