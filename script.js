// ================================
// Digital Card
// script.js
// ================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("Digital Card Loaded");

    fadeButtons();

    cardAnimation();

});


// ================================
// Button Hover Animation
// ================================

function fadeButtons(){

    const buttons = document.querySelectorAll(".button");

    buttons.forEach(button=>{

        button.addEventListener("mouseenter",()=>{

            button.style.transform="translateY(-3px) scale(1.02)";

        });

        button.addEventListener("mouseleave",()=>{

            button.style.transform="";

        });

    });

}


// ================================
// Scroll Animation
// ================================

function cardAnimation(){

    const cards=document.querySelectorAll(".card");

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.2

    });

    cards.forEach(card=>{

        observer.observe(card);

    });

}


// ================================
// Future Functions
// ================================

// ダークモード
function toggleDarkMode(){

    console.log("Coming Soon");

}

// 連絡先コピー
function copyText(text){

    navigator.clipboard.writeText(text);

}

// QR表示
function openQR(){

    console.log("Coming Soon");

}

// ページトップへ
function pageTop(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
