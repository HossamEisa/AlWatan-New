let slideUp = (target, duration = 500) => {
    target.style.transitionProperty = 'height, margin, padding';
    target.style.transitionDuration = duration + 'ms';
    target.style.boxSizing = 'border-box';
    target.style.height = target.offsetHeight + 'px';
    target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(() => {
        target.style.display = 'none';
        target.style.removeProperty('height');
        target.style.removeProperty('padding-top');
        target.style.removeProperty('padding-bottom');
        target.style.removeProperty('margin-top');
        target.style.removeProperty('margin-bottom');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
        //alert("!");
    }, duration);
}

let slideDown = (target, duration = 500) => {
    target.style.removeProperty('display');
    let display = window.getComputedStyle(target).display;
    if (display === 'none')
        display = 'block';
    target.style.display = display;
    let height = target.offsetHeight;
    target.style.overflow = 'hidden';
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.boxSizing = 'border-box';
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + 'ms';
    target.style.height = height + 'px';
    target.style.removeProperty('padding-top');
    target.style.removeProperty('padding-bottom');
    target.style.removeProperty('margin-top');
    target.style.removeProperty('margin-bottom');
    window.setTimeout(() => {
        target.style.removeProperty('height');
        target.style.removeProperty('overflow');
        target.style.removeProperty('transition-duration');
        target.style.removeProperty('transition-property');
    }, duration);
}
let slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
        return slideDown(target, duration);
    } else {
        return slideUp(target, duration);
    }
}

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

headerMenuLink.forEach(item => {
    item.onmouseover = function (e) {
        slideDown(item.nextElementSibling);

    };
    item.onmouseout = function (e) {
        slideUp(item.nextElementSibling);
    };
});

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
        }, 0)
}());