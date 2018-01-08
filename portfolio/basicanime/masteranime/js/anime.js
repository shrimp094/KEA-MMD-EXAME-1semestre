let killbutton = document.querySelector("#kill");
let monster = document.querySelector("#monster");
let big = document.querySelector("#big");




killbutton.addEventListener('click', killthesmall);
pageload();

function pageload() {

    console.log("TODO: backgroud sound");
    let sick = document.querySelector("#sick");
    sick.setAttribute('autoplay', 'autoplay');
    sick.play();
    sick.addEventListener('ended', killthesmall);

}

function killthesmall() {
    console.log("function: killthesmall");

    monster.classList.toggle("monster");
    let nhaa = document.querySelector("#nhaa");
    nhaa.play();
    monster.addEventListener('animationend', stopkill);



}

function stopkill(){
     sick.currentTime = 0;
    sick.play();





}

let myElements = document.querySelectorAll(".small");
//console.log(myElement);//
let c = 0;
myElements.forEach(addClass);

function addClass(oneclick, index) {
    //console.log(oneli);//
    //oneli.classList.add('stuff');//
    oneclick.addEventListener('click', listCliked);

}

function listCliked(evt) {
    console.log(evt.target);

    c++;
    console.log(c)
    if (c == 3) {
        big.classList.add("big");

        console.log("done")
        myElements.forEach(show);
        c = 0
        big.addEventListener('animationend', show);
        console.log(c);
    }

}

function show() {

    monster.style.opacity="0";
    console.log("removing classes")
    setTimeout(tryAgain, 3000)

}
function tryAgain(){
    monster.style.opacity="1";
    big.classList.remove("big");

}
