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
    let buttons = $("#navigation_interface");

    // video.hide(); // video and slogan hidden in CSS in case of disabled JS
    // slogan.hide();

    setTimeout(() => {
        video.fadeIn(3000);
        title.fadeOut(3000 + 4500);
    }, 1000);

    video.on("ended", () => {
        title.fadeIn(1000);
        video.fadeTo(1000, 0.5);
        slogan.fadeIn(1000);

        setTimeout(() => {
            buttons.children("button").each((index, element) => {
                console.log(element);
                $(element).fadeIn(1000 + index * 500);
            });
        }, 1000);
    });
}

function navigateToMarketingVideo() {
    window.open("https://theknoxschool-my.sharepoint.com/personal/junchengzh_knox_vic_edu_au/_layouts/15/stream.aspx?id=%2Fpersonal%2Fjunchengzh%5Fknox%5Fvic%5Fedu%5Fau%2FDocuments%2FDesktop%2Fhehehea%5F1%2Emp4&wdLOR=c69A0341E%2DA451%2D4F5B%2DBE28%2D7D133B45926A&ga=1", '_blank').focus();
}

function navigateToBusinessPlan() {
    window.open("https://theknoxschool-my.sharepoint.com/:w:/g/personal/ap2054217_knox_vic_edu_au/EcNJF91sg5tChynkOWeSURgBRkEBjD896t8BDHVFv6TsIA?e=KWoZWQ", '_blank').focus();
}