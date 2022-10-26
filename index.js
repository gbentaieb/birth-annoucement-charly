function LetterTransition() {
    const letterElement = document.querySelector(".letter");
    letterElement.style.width = "70vw";
    letterElement.style.height = "90vh";
};

function stopFlyingHeartAnimation(heartNumber) {
    document.documentElement.style.setProperty(`--flying-heart-${heartNumber}-animation-iteration-count`, '1');
}

function stopFlyingHeartsAnimation() {
    const flyingHeart1 = document.querySelector(".flyingHeart1");
    const flyingHeart2 = document.querySelector(".flyingHeart2");
    const flyingHeart3 = document.querySelector(".flyingHeart3");
    const flyingHeart4 = document.querySelector(".flyingHeart4");

    flyingHeart1.addEventListener('animationiteration', () => stopFlyingHeartAnimation(1));
    flyingHeart2.addEventListener('animationiteration', () => stopFlyingHeartAnimation(2));
    flyingHeart3.addEventListener('animationiteration', () => stopFlyingHeartAnimation(3));
    flyingHeart4.addEventListener('animationiteration', () => stopFlyingHeartAnimation(4));
};

function onHeartClick() {
    const mainHeartElement = document.querySelector(".mainHeart");
    mainHeartElement.style.opacity = 0;
    mainHeartElement.style.cursor = "default";

    stopFlyingHeartsAnimation();

    const topEnvelopeElement = document.querySelector(".envelopeTop");
    topEnvelopeElement.style.animation = "open-flap 1s ease-in 0.5s 1 forwards";
    
    const letterElement = document.querySelector(".letter");
    letterElement.style.animation = "letterAnimation 1s ease-in-out 1.5s 1 forwards";
    setTimeout(LetterTransition, 2500);

    const letterContentElements = document.querySelectorAll(".letterContent");
    letterContentElements.forEach(e => {
        e.style.animation = "letterContentAnimation 1s linear 3.5s 1 forwards";
    });

    const downloadButtonElement = document.querySelector(".downloadButton");
    downloadButtonElement.style.animation = "letterContentAnimation 1s linear 3.5s 1 forwards";
};