////////////////////////////////////////////
// back to top
////////////////////////////////////////////
const scrollBtnX = document.querySelector(".back-to-top");

const btnVisibility = () => {
    if (window.scrollY > 400) {
        scrollBtnX.style.visibility = "visible";
    } else {
        scrollBtnX.style.visibility = "hidden";
    }
};
///////////////////////////////
//Start Header SticyClass
///////////////////////////////

const headerSelect = document.querySelector(".header");
const headerNavBarItems = document.querySelectorAll(".sticky-header .nav-item");
const headerMenuLink = document.querySelectorAll(".mega-dropdown-link");
const mainWrapper = document.querySelector(".main");
const headerSticyClass = document.querySelector(".sticky-header");
var style = window.getComputedStyle(headerSticyClass, null);

const headerSticky = () => {
    if (window.scrollY > mainWrapper.offsetTop - 40) {
        headerSticyClass.classList.add('sticked');
        headerSelect.style.paddingBottom = style.getPropertyValue("height");

    } else {
        headerSticyClass.classList.remove('sticked');
        headerSelect.style.paddingBottom = 0;

    }
}


///////////////////////@#@$@#//////////////////////////////
//End Header SticyClass
///////////////////////@#@$@#//////////////////////////////


document.addEventListener("scroll", () => {
    btnVisibility();
    headerSticky();
});

scrollBtnX.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


///////////////////////@#@$@#//////////////////////////////
// Open Search Modal  & Close
///////////////////////@#@$@#//////////////////////////////


document.querySelector('.close-search-modal').addEventListener("click", () => {
    document.querySelector('.search-modal').classList.remove('open');
});
document.querySelector('.open-search-modal').addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector('.search-modal').classList.add('open');
    document.querySelector('.input-search').focus();
});

document.querySelectorAll('.open-search-modal').forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector('.search-modal').classList.add('open');
        document.querySelector('.input-search').focus();
    });
});
///////////////////////@#@$@#//////////////////////////////
// Count Down
///////////////////////@#@$@#//////////////////////////////

(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        nextYear = yyyy + 1,
        dayMonth = "11/06/",
        birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
        birthday = dayMonth + nextYear;
    }
    //end
    const countDown = new Date(birthday).getTime(),
        x = setInterval(function () {

            const now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                // document.getElementById("headline").innerText = "It's event time!";
                // document.getElementById("content").style.display = "block";
                document.getElementById("counter-wrapper").style.display = "none";
                clearInterval(x);
            }
            //seconds
        }, 0);


}());

// Swiper Init

var newsCarousel = new Swiper(".main-news-carousel .swiper", {
    speed: 1000,
    spaceBetween: 20,
    loop: true,
    autoHeight: true,
    navigation: {
        nextEl: ".main-news-carousel .swiper-button-next",
        prevEl: ".main-news-carousel .swiper-button-prev",
    },
});



var writerCarousel = new Swiper(".watan-writer-carousel", {
    speed: 1000,
    spaceBetween: 20,
    slidesPerView: 1.3,
    navigation: {
        nextEl: ".watan-writer .swiper-button-next",
        prevEl: ".watan-writer .swiper-button-prev",
    },
    breakpoints: {
    
        // when window width is >= 480px
        420: {
            slidesPerView: 2,
        },
        520: {
            slidesPerView: 3,
        },
        // when window width is >= 640px
        768: {
            slidesPerView: 4,
        },
        992: {
            slidesPerView: 6,
        }
    }
});
// document.querySelectorAll('.side-image, .popular-news-counter-card').forEach(function (item) {
//     item.onmouseover = (event) => {
//         let dataImage = item.getAttribute('data-image');
//         let dataText = item.getAttribute('data-text');
//         item.classList.add('active');
//         document.querySelector('[data-image="' + dataText + '"]', '[data-text="' + dataImage + '"]').classList.add("active");
//     };
//     item.onmouseleave = (event) => {
//         let dataImage = item.getAttribute('data-image');
//         let dataText = item.getAttribute('data-text');
//         item.classList.remove('active');
//         document.querySelector('[data-text="' + dataImage + '"]', '[data-image="' + dataText + '"]').classList.remove("active");
//     };
// });
(function ($) {
    $(".popular-news-counter-card, .side-image").hover(function () {
        let itemNum = $(this).data('text');
        let iamgeNum = $(this).data('image');
        $(this).addClass('active');
        $("[data-image=" + itemNum + "]").addClass('active');
        $("[data-text=" + iamgeNum + "]").addClass('active');
    }, function () {
        let itemNum = $(this).data('text');
        let iamgeNum = $(this).data('image');
        $(this).removeClass('active');
        $("[data-image=" + itemNum + "]").removeClass('active');
        $("[data-text=" + iamgeNum + "]").removeClass('active');
    });
})(jQuery);