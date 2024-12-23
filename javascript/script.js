// JavaScript

console.log('Hello world!');

const open = document.querySelector('#btn-open');
const close = document.querySelector('#btn-close');
const menu = document.querySelector('#menu');
const items = document.querySelectorAll('.item');

const menuOpen = () => {
    const keyframes = {
        visibility: ['hidden', 'visible'],
        opacity: [0, 1]
    }
    const options = {
        duration: 600,
        easing: 'ease',
        fill: 'forwards',
    }
    menu.animate(keyframes, options);

    items.forEach((item, index) => {
        item.animate({ opacity: [0, 1] }, {
            duration: 500,
            easing: 'ease',
            fill: 'forwards',
            delay: index * 150,
        });
    });

}
open.addEventListener('click', menuOpen);

const menuClose = () => {
    const keyframes = {
        visibility: ['visible', 'hidden'],
        opacity: [1, 0]
    }
    const options = {
        duration: 400,
        easing: 'ease',
        fill: 'forwards',
    }
    menu.animate(keyframes, options);

    items.forEach((item) => {
        item.animate({ opacity: [1, 0] }, {
            duration: 400,
            easing: 'ease',
            fill: 'forwards',
        });
    });

}
close.addEventListener('click', menuClose);

// 定数の定義
const loading = document.getElementById('loading');

// cssクラスを追加する関数
function animation() {
    loading.classList.add('loaded');
}

//画面が読み込まれたら animation を呼び出す
window.addEventListener('load', animation);

const mouseStalker = document.getElementById('dango-ms');
let msPos = {
    s: {
        x: document.documentElement.clientWidth / 2,
        y: document.documentElement.clientHeight / 2
    },
    m: {
        x: document.documentElement.clientWidth / 2,
        y: document.documentElement.clientHeight / 2
    }
};

if (window.matchMedia("(pointer: fine)").matches) {
    document.addEventListener("mousemove", msActivate);
}
function msActivate() {
    mouseStalker.classList.add('dango-ms-active');
    document.removeEventListener("mousemove", msActivate);
    // mouseの位置セット
    document.addEventListener('mousemove', function (e) {
        msPos.m.x = e.clientX;
        msPos.m.y = e.clientY;
    });
    requestAnimationFrame(msPosUpdate);
}

requestAnimationFrame(msPosUpdate);

function msPosUpdate() {
    msPos.s.x += (msPos.m.x - msPos.s.x) * 0.1;
    msPos.s.y += (msPos.m.y - msPos.s.y) * 0.1;
    const x = Math.round(msPos.s.x * 10) / 10;
    const y = Math.round(msPos.s.y * 10) / 10;
    mouseStalker.style.transform = `translate3d(` + x + 'px,' + y + 'px, 0)';
    requestAnimationFrame(msPosUpdate);
}

const gallery = document.querySelector('#gallery');

const lists = [
    'dango1.jpg',
    'dango2.jpg',
    'dango3.jpg',
    'dango4.jpg',
    'dango5.jpg',
    'dango6.jpg',
    'dango7.jpg',
];
//console.log(lists.length);

for (let i = 0; i < lists.length; i++) {
    const content = `<div><img src="images/${lists[i]}" alt=""></div>`;
    //gallery.textContent = content;
    gallery.insertAdjacentHTML('beforeend', content);
}
//const listsに並んだ画像の数をlists.lengthで取得。「lists.lengthで数えた数」未満のときiに1を足す。
//const listsに並んだ画像（配列の要素）の番号（インデックス）は0から始まる。画像が7枚の時は、インデックスは0〜6ということになる。