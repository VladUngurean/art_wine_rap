//img blur load 

let blurDivs = document.querySelectorAll(".blur_img_load")

blurDivs.forEach(div => {
    const img = div.querySelector("img")

    function loaded() {
        div.classList.add("loaded")
        setTimeout(() => {
            div.style.backgroundImage = "unset";
        }, 200);
    }

    if (img.complete) {
        loaded()
    } else {
        img.addEventListener("load", loaded)
    }
})


const hamburger = document.querySelector(".hamburger");
const open_header = document.querySelector(".nav_conatainer");
const close_button = document.querySelector(".close_button")
const sendMsg = document.querySelector(".send_msg")
const body = document.querySelector("body")

if (hamburger && open_header) {
    hamburger.addEventListener("click", function () {
        open_header.classList.toggle("active");
        body.classList.toggle("active");
    });
    close_button.addEventListener("click", function () {
        open_header.classList.toggle("active");
        body.classList.toggle("active");
    });
    sendMsg.addEventListener("click", function () {
        open_header.classList.toggle("active");
        body.classList.toggle("active");
    });
}