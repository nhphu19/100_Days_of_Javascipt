let lessonsList = document.getElementById('lessonsList');

const lessons = [
    {
        name: 'Pixel Art Generator',
        link: '/Day_01_PixelArtGenerator',
    },
    {
        name: 'Rich Text Editor',
        link: '/Day_02_RichTextEditor',
    },
    {
        name: 'Pass Generator',
        link: '/Day_03_PassGenerator',
    },
    {
        name: 'QR Code Generator',
        link: '/Day_04_QRCodeGenerator',
    },
    {
        name: 'Detect Device Battery',
        link: '/Day_05_DetectDeviceBattery',
    },
    {
        name: 'Simple XO Game',
        link: '/Day_06_SimpleXOGame',
    },
    {
        name: 'Flip A Coin Game',
        link: '/Day_07_FlipACoinGame',
    },
    {
        name: 'Multi Step Form',
        link: '/Day_08_MultiStepForm',
    },
    {
        name: 'Aspect Ratio Calculator',
        link: '/Day_09_AspectRatioCalculator',
    },
    {
        name: 'Weather App',
        link: '/Day_10_WeatherApp',
    },
    {
        name: 'Movie Info App',
        link: '/Day_11_MovieInfoApp',
    },
];

let getLessons = () => {
    lessonsList.innerHTML = lessons
        .map((lesson, index) => {
            const indexOf = index + 1;

            return `<a href="${lesson.link}" class="home-lesson-item" target="_blank">
                <div class="home-lesson-img">
                    <img src="images/day_${indexOf < 10 ? '0' + indexOf : indexOf}.jpg" alt="">
                </div>
                <div class="home-lesson-name">#${indexOf < 10 ? '0' + indexOf : indexOf} - ${lesson.name}</div>
            </a>`;
        })
        .join('');
};

window.addEventListener('load', getLessons);
