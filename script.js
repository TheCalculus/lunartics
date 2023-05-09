$(document).ready(main);

function fade(element, amt, time) {
    setInterval(() => {
        element.get(0).style.opacity += amt;
    }, time);
}

function main() {
    let video = $(".video");
    let title = $(".title");
    let slogan = $(".slogan");

    video.hide(); // video and slogan hidden in CSS in case of disabled JS
    slogan.hide();
    
    setTimeout(() => {
        video.fadeIn(3000);
        title.fadeOut(3000 + 4500);
    }, 1000);

    video.on("ended", () => {
        title.fadeIn(1000);
        video.fadeTo(1000, 0.5);

        slogan.fadeIn(1000);
    });
}