function onHeartClick() {
    const heartElement = document.querySelector(".heart");
    heartElement.style.opacity = 0;
    heartElement.style.cursor = "default";

    document.documentElement.style.setProperty('--flying-hearts-animation-iteration-count', '1');

    const topEnvelopeElement = document.querySelector(".envelopeTop");
    topEnvelopeElement.style.animation = "open-flap 1s ease-in 1 forwards";
    
    const letterElement = document.querySelector(".letter");
    letterElement.style.animation = "letterAnimation 2s ease-in-out 1s 1 forwards";

    const letterContentElements = document.querySelectorAll(".letterContent");
    letterContentElements.forEach(e => {
        e.style.animation = "letterContentAnimation 1s linear 3s 1 forwards";
    });

    const downloadButtonElement = document.querySelector(".downloadButton");
    downloadButtonElement.style.animation = "letterContentAnimation 1s linear 3s 1 forwards";
}