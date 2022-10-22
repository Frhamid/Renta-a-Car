
let pop = document.getElementById("pop");
let read = document.getElementById("Read")
let text = document.getElementById("hide")

function btn() {
    if (pop.style.display != "flex") {
        pop.style.display = "flex";


    }
}

function btn1(){

    if (pop.style.display != "none") {
        pop.style.display = "none";


    }
}

read.addEventListener('click', function hide() {
    if (text.style.display != 'none') {
        text.style.display = 'none';
        read.innerHTML = 'Read more';

    }
    else {
        text.style.display = 'block';
        read.innerHTML = 'Read less';
    }
})






