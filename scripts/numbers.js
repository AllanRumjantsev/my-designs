// Items
const yearsItem = document.querySelector("#STATS #Years-stats");
const projectsItem = document.querySelector("#STATS #Projects-stats");
const videosItem = document.querySelector("#STATS #Videos-stats");
const bannersItem = document.querySelector("#STATS #Banners-stats");
const landingsItem = document.querySelector("#STATS #Landings-stats");
const smPromosItem = document.querySelector("#STATS #Sm-promos-stats");

// Numbers
const yearsNumber = document.querySelector("#STATS #Years-stats .number");
const projectsNumber = document.querySelector("#STATS #Projects-stats .number");
const videosNumber = document.querySelector("#STATS #Videos-stats .number");
const bannersNumber = document.querySelector("#STATS #Banners-stats .number");
const landingsNumber = document.querySelector("#STATS #Landings-stats .number");
const smPromosNumber = document.querySelector("#STATS #Sm-promos-stats .number");

// Dividers
const yearsDivider = document.querySelector("#STATS #Years-stats .item-divider");
const projectsDivider = document.querySelector("#STATS #Projects-stats .item-divider");
const videosDivider = document.querySelector("#STATS #Videos-stats .item-divider");
const bannersDivider = document.querySelector("#STATS #Banners-stats .item-divider");
const landingsDivider = document.querySelector("#STATS #Landings-stats .item-divider");
const smPromosDivider = document.querySelector("#STATS #Sm-promos-stats .item-divider");

// Counter
const toGoText = document.querySelector("#STATS-tab #To-go");
var toGo = 6;

// Create empty timelines
var yearsItemTl = gsap.timeline();
var projectsItemTl = gsap.timeline();
var videosItemTl = gsap.timeline();
var bannersItemTl = gsap.timeline();
var landingsItemTl = gsap.timeline();
var smPromosItemTl = gsap.timeline();

// Set Initial Random Rotations
gsap.to(yearsNumber, { rotation: getRandomInt(30), duration: 0 });
gsap.to(projectsNumber, { rotation: getRandomInt(30), duration: 0 });
gsap.to(videosNumber, { rotation: getRandomInt(30), duration: 0 });
gsap.to(bannersNumber, { rotation: getRandomInt(30), duration: 0 });
gsap.to(landingsNumber, { rotation: getRandomInt(30), duration: 0 });
gsap.to(smPromosNumber, { rotation: getRandomInt(30), duration: 0 });

function getRandomInt(max) {
    return Math.floor(Math.random() * max) - Math.floor(Math.random() * max);
}

// Listeners
yearsItem.addEventListener("click", () => { yearsItemTl.add(anim(yearsItemTl, yearsNumber, yearsDivider, yearsItem)).play() }, { once: true });
projectsItem.addEventListener("click", () => { projectsItemTl.add(anim(projectsItemTl, projectsNumber, projectsDivider, projectsItem)).play() }, { once: true });
videosItem.addEventListener("click", () => { videosItemTl.add(anim(videosItemTl, videosNumber, videosDivider, videosItem)).play() }, { once: true });
bannersItem.addEventListener("click", () => { bannersItemTl.add(anim(bannersItemTl, bannersNumber, bannersDivider, bannersItem)).play() }, { once: true });
landingsItem.addEventListener("click", () => { landingsItemTl.add(anim(landingsItemTl, landingsNumber, landingsDivider, landingsItem)).play() }, { once: true });
smPromosItem.addEventListener("click", () => { smPromosItemTl.add(anim(smPromosItemTl, smPromosNumber, smPromosDivider, smPromosItem)).play() }, { once: true });

// Create animation
function anim(itemTl, number, divider, item) {
    itemTl.to(number, { top: 36, duration: .7, ease: "back.out(12)" });
    itemTl.to(number, { rotation: 0, duration: .7, ease: "back.out(7)" }, "-=.6");
    itemTl.to(divider, { width: 0, duration: .5, ease: "back.in(3)" }, "-=.8");
    itemTl.to(item, { cursor: "default" }, "-=5");
    toGo -= 1;
    if (toGo > 0) {
        toGoText.innerHTML = `click or tap 'em: ${toGo} to go`;
    } else {
        toGoText.innerHTML = `yeap, there they are`;
    }
    gsap.fromTo(toGoText, { opacity: .1 }, { opacity: 1, duration: 1, ease: "sine.out" });
}