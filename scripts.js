let text = document.querySelector('#text');
let redfort = document.querySelector('#redfort');
let indiaGate = document.querySelector('#indiagate');

window.addEventListener('scroll',()=>{
    let value = window.scrollY;
    text.style.top = -2 * value +'px';
    redfort.style.right = -1 * value + 'px';
    indiaGate.style.left = -1 *value + 'px';
})

document.querySelector('#a').onclick = function(){
    alert('You will be guided to Visa Authority Page');
    window.location.href="https://indianvisaonline.gov.in/";
}
document.querySelector('#b').onclick = function(){
    alert('You will be guided to Booking.com Page');
    window.location.href="https://www.booking.com/city/in/new-delhi.html?aid=306395;label=in-new-delhi-e8W1ee8F8u0VtKbPZDZV*wS154618435823:pl:ta:p11020:p2:ac:ap:neg:fi:tikwd-186693036:lp9144064:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YZVcNNsENnH02-pWD53qm9c;ws=&gad_source=1&gclid=EAIaIQobChMIqt7i9cP7gwMVwKlmAh39HgadEAAYASAAEgJwdvD_BwE";
}
document.querySelector('#c').onclick = function(){
    alert('You will be guided to Make My Trip Website for further proceedings');
    window.location.href="https://www.makemytrip.com/flights/";
}
document.querySelector('#d').onclick = function(){
    alert('You will be guided to Terms and Conditions for Visa Granting');
    window.location.href="https://hci.gov.in/male/?4746?000";
}


