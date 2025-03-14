let count = 0 ;


let value = document.getElementById('value');
let btns = document.querySelectorAll('.btn');

btns.forEach(function(btns) {
btns.addEventListener('click',function(e){
    const clicked = e.target;
    if(clicked.classList.contains('decrease')){
      count--;
      value.style.color="red";
    }
    else if(clicked.classList.contains('increase')){
     count++;
     value.style.color="green";
    }
    else {
        count = 0;
        value.style.color="#222";
    }
      value.textContent = count;
});
})