/* ==========================================================
   Digital Profile
   script.js
   Version 2
========================================================== */


/* ==========================================================
   Initialize
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("Digital Profile Loaded");

    initIntroScreen();

    initScrollAnimation();

    initButtonEffect();

});


/* ==========================================================
   Intro Screen
========================================================== */

function initIntroScreen(){

    const introScreen = document.getElementById("intro-screen");

    if(!introScreen){
        return;
    }

    const alreadyPlayed = sessionStorage.getItem("introPlayed");

    if(alreadyPlayed === "true"){

        introScreen.classList.add("hide");
        return;

    }

    const closeIntro = () => {

        introScreen.classList.add("hide");
        sessionStorage.setItem("introPlayed", "true");

    };

    setTimeout(closeIntro, 2200);

    introScreen.addEventListener("click", closeIntro);

}


/* ==========================================================
   Scroll Animation
========================================================== */

function initScrollAnimation(){

    const cards = document.querySelectorAll(".card");

    if(cards.length === 0){
        return;
    }

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold:0.2
    });

    cards.forEach((card) => {

        observer.observe(card);

    });

}


/* ==========================================================
   Button Effect
========================================================== */

function initButtonEffect(){

    const buttons = document.querySelectorAll(".button");

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            button.classList.add("clicked");

            setTimeout(() => {

                button.classList.remove("clicked");

            }, 250);

        });

    });

}


/* ==========================================================
   Utility : Copy Text
   ※ 後でメール・電話番号コピー機能に使います
========================================================== */

function copyText(text){

    if(!navigator.clipboard){

        alert("この端末ではコピー機能が利用できません。");

        return;

    }

    navigator.clipboard.writeText(text)
        .then(() => {

            alert("コピーしました。");

        })
        .catch(() => {

            alert("コピーに失敗しました。");

        });

}


/* ==========================================================
   Utility : Page Top
   ※ 後でトップへ戻るボタンを付ける場合に使います
========================================================== */

function pageTop(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}


/* ==========================================================
   Future Function : Dark Mode
   ※ 後でボタン式ダークモードにする時の土台
========================================================== */

function toggleDarkMode(){

    document.body.classList.toggle("dark-mode");

}


/* ==========================================================
   Future Function : QR
   ※ 後でQRコード表示機能に使います
========================================================== */

function openQR(){

    console.log("QR function coming soon.");

}
