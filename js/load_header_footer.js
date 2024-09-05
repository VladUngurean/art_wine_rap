// // Load header
// fetch("header.html")
//     .then((response) => response.text())
//     .then((data) => {
//         document.getElementById("header").innerHTML = data;
//         return fetch("footer.html");
//     })
//     .then((response) => response.text())
//     .then((data) => {
//         document.getElementById("footer").innerHTML = data;

//         // Code to run after header and footer are loaded
//         const hamburger = document.querySelector(".hamburger");
//         const open_header = document.querySelector(".nav_conatainer");
//         const close_button = document.querySelector(".close_button")
//         const body = document.querySelector("body")

//         if (hamburger && open_header) {
//             hamburger.addEventListener("click", function () {
//                 open_header.classList.toggle("active");
//                 body.classList.toggle("active");
//             });
//             close_button.addEventListener("click", function () {
//                 open_header.classList.toggle("active");
//                 body.classList.toggle("active");
//             });
//         }
//     })

// // Load footer
// fetch("footer.html")
//     .then((response) => response.text())
//     .then((data) => {
//         document.getElementById("footer").innerHTML = data;
//     });

Promise.all([
    fetch("header.html").then((response) => response.text()),
    fetch("footer.html").then((response) => response.text()),
]).then(([headerData, footerData]) => {
    document.getElementById("header").innerHTML = headerData;
    document.getElementById("footer").innerHTML = footerData;

    // Code to run after header and footer are loaded
    const hamburger = document.querySelector(".hamburger");
    const open_header = document.querySelector(".nav_conatainer");
    const close_button = document.querySelector(".close_button");
    const body = document.querySelector("body");

    if (hamburger && open_header) {
        hamburger.addEventListener("click", function () {
            open_header.classList.toggle("active");
            body.classList.toggle("active");
        });
        close_button.addEventListener("click", function () {
            open_header.classList.toggle("active");
            body.classList.toggle("active");
        });
    }
}).catch(error => console.error('Error loading header/footer:', error));