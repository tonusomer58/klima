document.addEventListener("DOMContentLoaded", function () {
    
    // --- NAVBAR MENU İŞLEMLERİ ---
    let menu = document.querySelector("#menu-btn");
    let navbar = document.querySelector(".navbar");

    if (menu) {
        menu.onclick = () => {
            menu.classList.toggle("fa-times");
            navbar.classList.toggle("active");
        };
    }

    window.onscroll = () => {
        if (menu) {
            menu.classList.remove("fa-times");
            navbar.classList.remove("active");
        }
    };

    // --- ACCORDION (SSS) İŞLEMLERİ ---
    let accordions = document.querySelectorAll('.accordion-container .accordion');

    accordions.forEach(accordion => {
        let header = accordion.querySelector('.accordion-header');
        let body = accordion.querySelector('.accordion-body');

        if(header && body) {
            header.onclick = () => {
                // Diğer açık olanları kapatmak istersen bu yorumu kaldır:
                /*
                accordions.forEach(acc => {
                    if(acc !== accordion){
                        acc.querySelector('.accordion-header').classList.remove('active');
                        acc.querySelector('.accordion-body').classList.remove('active');
                        acc.querySelector('.accordion-body').style.maxHeight = null;
                    }
                });
                */

                header.classList.toggle('active');
                body.classList.toggle('active');

                if(header.classList.contains('active')){
                    body.style.maxHeight = body.scrollHeight + "px";
                } else {
                    body.style.maxHeight = null;
                }
            };
        }
    });

    // --- MODAL (RESİM BÜYÜTME) İŞLEMLERİ ---
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var closeBtn = document.querySelector(".close");
    var images = document.querySelectorAll(".features .row .image img");

    if (modal && modalImg && images.length > 0) {
        images.forEach(function (img) {
            img.addEventListener("click", function () {
                modal.style.display = "block";
                modalImg.src = this.src;
            });
        });

        if (closeBtn) {
            closeBtn.onclick = function () {
                modal.style.display = "none";
            };
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    }
});