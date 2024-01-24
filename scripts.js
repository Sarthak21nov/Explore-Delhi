let text = document.querySelector('#text');
let redfort = document.querySelector('#redfort');
let indiaGate = document.querySelector('#indiagate');

window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    text.style.top = -2 * value +'px';
    redfort.style.right = -1 * value + 'px';
    indiaGate.style.left = -1 *value + 'px';
})
