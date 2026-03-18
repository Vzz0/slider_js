// Данные для каждого слайда
const slides = [
    {
        city: "Rostov-on-Don<br>LCD admiral",
        area: "81 m2",
        time: "3.5 months",
        cost: "Upon request",
        image: "images/First_slide.png"
    },
    {
        city: "Sochi<br>Thieves",
        area: "105 m2",
        time: "4 months",
        cost: "Upon request",
        image: "images/Second_slide.png"
    },
    {
        city: "Rostov-on-Don<br>Patriotic",
        area: "93 m2",
        time: "3 months",
        cost: "Upon request",
        image: "images/Third_slide.png"
    }
];

let currentIndex = 0;

// DOM элементы
const cityEl = document.getElementById('slide-city');
const areaEl = document.getElementById('slide-area');
const timeEl = document.getElementById('slide-time');
const costEl = document.getElementById('slide-cost');
const imageEl = document.getElementById('slide-image');

const dots = document.querySelectorAll('.dot');
const links = document.querySelectorAll('.link');
const prevBtn = document.querySelector('.prev-arrow');
const nextBtn = document.querySelector('.next-arrow');

// Функция обновления слайдера
function updateSlider(index) {
    // 1. Обновляем текст
    cityEl.innerHTML = slides[index].city;
    areaEl.innerText = slides[index].area;
    timeEl.innerText = slides[index].time;
    costEl.innerText = slides[index].cost;

    // 2. Обновляем картинку
    imageEl.style.opacity = 0.5;
    setTimeout(() => {
        imageEl.src = slides[index].image;
        imageEl.style.opacity = 1;
    }, 200);

    // 3. Обновляем активные классы для точек
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');

    // 4. Обновляем активные классы для ссылок
    links.forEach(link => link.classList.remove('active'));
    links[index].classList.add('active');
}

// Обработчики кликов на стрелки
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length; // Кольцевая прокрутка вперед
    updateSlider(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Кольцевая прокрутка назад
    updateSlider(currentIndex);
});

// Обработчики кликов на точки
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateSlider(currentIndex);
    });
});

// Обработчики кликов на ссылки-заголовки
links.forEach((link, index) => {
    link.addEventListener('click', () => {
        currentIndex = index;
        updateSlider(currentIndex);
    });
});
