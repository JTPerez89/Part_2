const toppBtn = document.querySelector("#topBtn");
const topUpdate = document.querySelector("#topChange");
const middBtn = document.querySelector("#midBtn");
const midUpdate = document.querySelector("#midChange");
const bottBtn = document.querySelector("#botBtn");
const botUpdate = document.querySelector("#botChange");

let counter = 9;
let counter2 = 12;
let counter3 = 9;

function topBtnClick() {
    counter++;
    topUpdate.innerText = `${counter} like(s)`;
    return topUpdate;
}

function midBtnClick() {
    counter2++;
    midUpdate.innerText = `${counter2} like(s)`;
    return midUpdate;
}

function botBtnClick() {
    counter3++;
    botUpdate.innerText = `${counter3} like(s)`;
    return botUpdate;
}

toppBtn.addEventListener('click', topBtnClick);
middBtn.addEventListener('click', midBtnClick);
bottBtn.addEventListener('click', botBtnClick);