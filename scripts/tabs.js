var canResize = false;

// function openTab(evt, tabId) {
//     var i, tabcontent, tablinks, workssubtab, aboutsubtab;

//     tabcontent = document.getElementsByClassName("tabcontent");
//     tablinks = document.getElementsByClassName("tablinks");
//     workssubtab = document.getElementById("WORKS-sub-tab");
//     aboutsubtab = document.getElementById("ABOUT-sub-tab");

//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     if (tabId == "WORKS") {
//         document.getElementById(tabId).style.display = "block";
//         workssubtab.style.display = "flex";

//         if (canResize) {
//             canResize = false;
//         }
//     }
//     else if (tabId == "ABOUT") {
//         document.getElementById(tabId).style.display = "block";
//         aboutsubtab.style.display = "flex";

//         refreshCarousel();

//         if (!canResize) {
//             canResize = true;
//         }
//     }
//     else {
//         document.getElementById(tabId).style.display = "block";
//         if (canResize) {
//             canResize = false;
//         }
//     }

//     evt.currentTarget.className += " active";
// }

function openTabWORKS(evt, tabId) {
    var i, workstabcontent, workstablinks;

    workstabcontent = document.getElementsByClassName("workstabcontent");
    workstablinks = document.getElementsByClassName("workstablinks");
    workstab = document.getElementById("WORKS-tabs");

    for (i = 0; i < workstabcontent.length; i++) {
        workstabcontent[i].style.display = "none";
    }

    for (i = 0; i < workstablinks.length; i++) {
        workstablinks[i].className = workstablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabId).style.display = "block";
    workstab.style.display = "flex";

    if (canResize) {
        canResize = false;
    }

    evt.currentTarget.className += " active";
}

function openTabABOUT(evt, tabId) {
    var i, abouttabcontent, abouttablinks;

    abouttabcontent = document.getElementsByClassName("abouttabcontent");
    abouttablinks = document.getElementsByClassName("abouttablinks");
    abouttab = document.getElementById("ABOUT-tabs");

    for (i = 0; i < abouttabcontent.length; i++) {
        abouttabcontent[i].style.display = "none";
    }

    for (i = 0; i < abouttablinks.length; i++) {
        abouttablinks[i].className = abouttablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabId).style.display = "block";
    abouttab.style.display = "flex";

    if (!canResize) {
        canResize = true;
    }

    evt.currentTarget.className += " active";

    if (tabId == "other") {

        carousel();
        refreshCarousel();
    }
}

function openJobsTab(evt, tabId) {
    var i, jobsverttabcontent, aboutjobstablinks;

    jobsverttabcontent = document.getElementsByClassName("jobsverttabcontent");
    aboutjobstablinks = document.getElementsByClassName("aboutjobstablinks");

    for (i = 0; i < jobsverttabcontent.length; i++) {
        jobsverttabcontent[i].style.display = "none";
    }

    for (i = 0; i < aboutjobstablinks.length; i++) {
        aboutjobstablinks[i].className = aboutjobstablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabId).style.display = "block";

    evt.currentTarget.className += " active";
}

function carousel() {
    var options = {
        lazyLoad: 'ondemand',
        dots: true,
        slidesToScroll: 1,
        autoplay: false,
        slidesToShow: 3,
        adaptiveHeight: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
            }
        }]
    };

    const mySlider = $('#Carousel').on('init', function (slick) {
        multiSlideAdaptiveHeight(this);
    }).on('beforeChange', function (slick, currentSlide, nextSlide) {
        multiSlideAdaptiveHeight(this);
    }).not('.slick-initialized').slick(options).slick("refresh");


    function multiSlideAdaptiveHeight(slider) {
        if (canResize) {
            let activeSlides = [];
            let tallestSlide = 0;
            setTimeout(function () {
                $('.slick-track .slick-active', slider).each(function (i) {
                    activeSlides[i] = $(this).outerHeight();
                });
                activeSlides.forEach(function (item) {
                    if (item > tallestSlide) {
                        tallestSlide = item;
                    }
                });
                $('.slick-list', slider).height(tallestSlide);
            }, 100);
        }
    }


    $(window).on('resize', function () {
        multiSlideAdaptiveHeight(mySlider);
    });
}

function refreshCarousel() {
    var Carousel;
    Carousel = document.getElementById('Carousel');

    if (Carousel.classList.contains('slick-initialized')) {
        // $('#Carousel').slick("refresh").slick("setPosition");
        $('#Carousel').slick("refresh");
        setTimeout(function () {
            $('#Carousel').slick('slickGoTo', 0);
        }, 500);
    }
}

// document.getElementById("defaultOpen").click();
document.getElementById("defaultOpenWorks").click();
document.getElementById("defaultOpenAbout").click();
document.getElementById("defaultOpenJobs").click();