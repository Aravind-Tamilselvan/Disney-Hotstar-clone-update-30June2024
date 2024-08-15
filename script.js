// Carousel
let Carousel = document.querySelectorAll('.Carousel .item');
let items = document.querySelectorAll('.movie .movie-info .movie-content');
let thumbnails = document.querySelectorAll('.movie .thumbnail .list .item');
let countItem = items.length;
let itemActive = 0;
let timeoutId = null;
let navbar = document.querySelector(".nav-bar");
let overlay1 = document.querySelector(".overlay-1");
let overlay2 = document.querySelector(".overlay-2");
let movieelement = document.querySelector(".movie");
let Showsection = document.querySelector(".shows");
let Volume = document.querySelector(".volume");
let volumeup = document.querySelector(".volume-up");
let volumedown = document.querySelector(".volume-down");
let image = document.querySelector('.Carousel .item.active #im');
let Video = document.querySelector('.Carousel .item.active #vid');
let scrolllength = 290;
let timeout = null;

document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
        console.log(document.hidden)
        if(Video) Video.pause();
        clearTimeout(timeout);
        image.style.display = "block";
        overlay1.style.display = "block";
        overlay2.style.display = "block";
        Volume.style.display = "none";
    }
})

// Click Thumbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', function () {
        itemActive = index;
        showSlider();
        Volume.style.display = "none";
        overlay1.style.display = "block";
        overlay2.style.display = "block";
    })
})

// Slider function for changing to next slides and run video automatically
function showSlider() {
    let CarouselActiveOld = document.querySelector('.Carousel .item.active');
    let itemActiveOld = document.querySelector('.movie .movie-info .movie-content.active');
    let thumbnailActiveOld = document.querySelector('.movie .thumbnail .list .item.active');

    // Remove Old item
    CarouselActiveOld.classList.remove('active');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');


    // activate new item
    Carousel[itemActive].classList.add('active');
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');


    // Clear any existing timeout
    if (timeoutId) {
        clearTimeout(timeoutId);
    }

    let img = Carousel[itemActive].querySelector('#im');
    let vid = Carousel[itemActive].querySelector('#vid');

    // video play timeout function
    timeoutId = setTimeout(function () {
        vid.play();
        img.style.display = "none";
        navbar.style.background = "linear-gradient(40deg,rgba(15, 16, 20,0.7) 8%,rgba(15,16,20,0.4),rgba(15,16,20,0.4)";
        overlay1.style.display = "none";
        overlay2.style.display = "none";
        Volume.style.display = "block";
        volumedown.style.display = "block";

        vid.addEventListener('ended', function () {
            img.style.display = "block";
            navbar.style.backgroundColor = "#0F1014";
            overlay1.style.display = "block";
            overlay2.style.display = "block";
            Volume.style.display = "none";
            volumedown.style.display = "none";
        });
    }, 5000);

    volumedown.addEventListener('click', function () {
        vid.muted = true;
        volumedown.style.display = "none";
        volumeup.style.display = "block";
    })

    volumeup.addEventListener('click', function () {
        vid.muted = false;
        volumeup.style.display = "none";
        volumedown.style.display = "block";
    })

    // video pause on scroll event listener
    let videopause = 290
    window.addEventListener("scroll", function () {
        let vid = document.querySelector('.Carousel .item.active #vid');
        let scrolltop = window.pageYOffset;

        if (scrolltop > videopause) {
            vid.pause();
            navbar.style.backgroundColor = "rgb(15,16,20)";
        }
        else {
            vid.play();
            navbar.style.background = "linear-gradient(40deg,rgba(15, 16, 20,0.7) 8%,rgba(15,16,20,0.4),rgba(15,16,20,0.4)";
            // image.style.display = "none";
        }

    })


    //rewind the old video
    let oldVid = CarouselActiveOld.querySelector('#vid');
    oldVid.pause();
    oldVid.currentTime = 0;
    img.style.display = "block";
}

// Thumbnail buttons
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var list = document.querySelector('.thumbnail .list');

let listWidth = -92

next.addEventListener("click", function () {
    list.style.marginLeft = listWidth + "%";
    prev.style.display = "flex";
    next.style.display = "none";

})

prev.addEventListener("click", function () {
    list.style.marginLeft = 0;
    prev.style.display = "none";
    next.style.display = "flex";
})



// Movie Rows

// Buttons for movie rows

var nextButton = document.getElementById("next-button");
var prevButton = document.getElementById("previous");
var slides = document.getElementById("slides");
var slideCount = document.querySelectorAll(".slide").length;
var currentSlide = 0;
var slidesPerClick = 7.25; // Number of slides to move per click
var slideWidth = 185; // width of slide including margin

nextButton.addEventListener('click', function () {
    if (currentSlide + slidesPerClick < slideCount) {
        currentSlide = currentSlide + slidesPerClick;
    } else {
        currentSlide = slideCount - 1; // Move to the last slide if fewer than slidesPerClick slides are left
    }
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    prevButton.style.display = "flex";


    if (currentSlide + 0.5 <= slideCount) {
        nextButton.style.display = "none";
    }
});

prevButton.addEventListener('click', function () {
    if (currentSlide - slidesPerClick >= 0) {
        currentSlide = currentSlide - slidesPerClick;
    } else {
        currentSlide = 0;
    }
    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;

    if (currentSlide * slideWidth === 0) {
        prevButton.style.display = "none";
        nextButton.style.display = "flex";
    }

});



// buttons for different languages row

var previousbutton = document.getElementById('prevgenre');
var nextgenrebutton = document.getElementById('nextgenre');
var genrecontainer = document.querySelector('.card-container');

let languagerow = -96

nextgenrebutton.addEventListener('click', function () {
    let languagerow = -96
    genrecontainer.style.marginLeft = languagerow + "%";
    previousbutton.style.display = "flex";
    nextgenrebutton.style.display = "none";
})

previousbutton.addEventListener('click', function () {
    languagerow = 10;
    genrecontainer.style.marginLeft = languagerow + "px";
    previousbutton.style.display = "none";
    nextgenrebutton.style.display = "flex";
})

// buttons for top 10 shows

var nextshow = document.querySelector(".nextshow")
var prevshow = document.querySelector(".prevshow")
var Showslider = document.querySelector(".slides-3");

let showwidth = -59

nextshow.addEventListener('click', function () {
    let showwidth = -51
    Showslider.style.marginLeft = showwidth + "%";
    nextshow.style.display = "none";
    prevshow.style.display = "flex";
})

prevshow.addEventListener('click', function () {
    showwidth = 18;
    Showslider.style.marginLeft = showwidth + "px";
    prevshow.style.display = "none"
    nextshow.style.display = "flex"
})

// buttons for popular shows

var nextslide = document.getElementById("next-4");
var prevslide = document.getElementById("prev-4");
var Slide4 = document.querySelector(".row-4 .slides");
var count = document.querySelectorAll(".row-4 .slide").length;
var current = 0;
var slidesclick = 7.25; // Number of slides to move per click
var slidewidth = 185; // width of slide including margin

nextslide.addEventListener('click', function () {
    if (current + slidesclick < count) {
        current = current + slidesclick;
    } else {
        current = count - 1; // Move to the last slide if fewer than slidesPerClick slides are left
    }
    Slide4.style.transform = `translateX(-${current * slidewidth}px)`;
    prevslide.style.display = "flex";

    if (current + 0.5 <= count) {
        nextslide.style.display = "none";
    }
});

prevslide.addEventListener('click', function () {
    if (current - slidesclick >= 0) {
        current = current - slidesclick;
    } else {
        current = 0; // Move to the first slide if fewer than slidesPerClick slides are left
    }
    Slide4.style.transform = `translateX(-${current * slidewidth}px)`;

    if (current * slidewidth === 0) {
        prevslide.style.display = "none";
        nextslide.style.display = "flex";
    }
});

// buttons for cricket

var nextcricket = document.querySelector(".next-button-2");
var prevcricket = document.querySelector(".prev-button-2");
var Slide2 = document.querySelector(".slides-2");
var cricketcount = document.querySelectorAll(".slide-2").length;
var currentCricket = 0;
var cricketslidesclick = 6.5; // Number of slides to move per click
var cricketslidewidth = 260; // width of slide including margin

nextcricket.addEventListener('click', function () {
    if (currentCricket + cricketslidesclick < cricketcount) {
        currentCricket = currentCricket + cricketslidesclick;
    } else {
        currentCricket = cricketcount - 1; // Move to the last slide if fewer than slidesPerClick slides are left
    }
    Slide2.style.transform = `translateX(-${currentCricket * cricketslidewidth}px)`;
    prevcricket.style.display = "flex";
    if (currentCricket + 0.5 <= cricketcount) {
        nextcricket.style.display = "none";
    }
});

prevcricket.addEventListener('click', function () {
    if (currentCricket - cricketslidesclick >= 0) {
        currentCricket = currentCricket - cricketslidesclick;
    } else {
        currentCricket = 0; // Move to the first slide if fewer than slidesPerClick slides are left
    }
    Slide2.style.transform = `translateX(-${currentCricket * cricketslidewidth}px)`;
    if (currentCricket * cricketslidewidth === 0) {
        prevcricket.style.display = "none";
        nextcricket.style.display = "flex";
    }
});