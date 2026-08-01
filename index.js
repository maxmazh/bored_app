const btnGo = document.querySelector('.js_btn_go');
const imgJson = document.querySelector('.js_img_json');
const activeTitle = document.querySelector('.js_title_active');

function randomFetch() {
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then((res) => {

            const imgSrc = res.slip.advice;

            console.log(imgSrc);

            const p = document.createElement('p');
            p.className = 'post';
            p.textContent = imgSrc;

            imgJson.appendChild(p);
        });
}

function bodyGreen() {
    const body = document.querySelector('body');

    body.classList.add('green_theme');
}

btnGo.addEventListener('click', function() {
    
    bodyGreen();

    if (activeTitle) {
        activeTitle.remove();
    }

    randomFetch();

    imgJson.innerHTML = 'Ура, теперь не скучно 🔥';
});