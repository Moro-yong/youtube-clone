
//더보기 기능

const infoMore = document.querySelector('.infoMore');
console.log(infoMore);
const infoTitle = document.querySelector('.infoTitle');
console.log(infoTitle);

//더보기 clamp
infoMore.addEventListener('click', () => {
    infoMore.classList.toggle('clicked');
    infoTitle.classList.toggle('clamp');

    //더보기 버튼 텍스트 변경
    if(infoMore.innerText === '더보기') {
        infoMore.innerText = '간략히';
    } else infoMore.innerText = '더보기';
});

