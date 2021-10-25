const btn = document.querySelector('.info .btn');
console.log(btn)
const title = document.querySelector('.info .title');
console.log(title)

btn.addEventListener('click', () => {
    btn.classList.toggle('clicked');
    title.classList.toggle('clamp'); 
});

//위와 같음

// btn.addEventListener('click', function() {
//     btn.classList.toggle('clicked');
//     title.classList.toggle('clamp'); 
// });