document.addEventListener("DOMContentLoaded", function () {
    const tog = document.querySelector('.nav-toggle');
    const links = document.querySelector('.links'); 

    tog.addEventListener('click', function () {
        links.classList.toggle("show-links"); 
    });
});
