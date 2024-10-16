let movies = [
    {
        name: 'Falcon and the winter soldier',
        des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        image: 'Assets/images/slider 2.png'
    },
    {
        name: 'Loki',
        des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        image: 'Assets/images/slider 1.png'
    },
    {
        name: 'Wanda Vision',
        des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        image: 'Assets/images/slider 3.png'
    },
    {
        name: 'Raya and the last dragon',
        des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        image: 'Assets/images/slider 4.png'
    },
    {
        name: 'Luca',
        des: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s',
        image: 'Assets/images/slider 5.png'
    }
];

const carousel = document.querySelector('.caraousel');
let sliders = [];
let slideIndex = 0; //track the current slide

const createSlide = () => {
    if (slideIndex>=movies.length) {
        slideIndex=0;
    }
    //Creating DOM elements
    let slide = document.createElement('div');
    var imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //Attaching DOM Elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //Setting up images dynamically
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    //Setting element class Names
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    //for changing slides
    if(sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
};

for(let i=0; i<3; i++) {
    createSlide();
}

//Calling function in every 3 seconds instead of calling repeatedly
setInterval(()=>{
    createSlide();
}, 3000);

//Video card with images
const imgcards = [...document.querySelectorAll(".video-card")]

imgcards.forEach((item) => {
    item.addEventListener("mouseover", () => {
    let vid = item.children[1];
    vid.play();
    });
    item.addEventListener("mouseleave", () =>{
        let vid = item.children[1]
        vid.pause();
    });
});
// movie posters arrow

let movieContainer = [...document.querySelectorAll('.card-container')];
let leftArrow = [...document.querySelectorAll('.pre-btn')];
let rightArrow = [...document.querySelectorAll('.nxt-btn')];

movieContainer.forEach((item, i)=>{
    let Containerdim = item.getBoundingClientRect();
    let containerWidth = Containerdim.width;

    rightArrow[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth - 200;
    })
    leftArrow[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth + 200;
    })
})
/*section visible on scroll*/
const faders = document.querySelectorAll('.main-container');
const appearOptions = {
    //When the entire column is on screen, it fades in
    threshold: 1,
    rootMargin: "0px 0px -30px 0px"
};

//Intersection Observers
const appearScroll = new IntersectionObserver(function(entries, appearScroll) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            appearScroll.unobserve(entry.target)
        }
    });
}, appearOptions);
faders.forEach(fader => {appearScroll.observe(fader)});