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