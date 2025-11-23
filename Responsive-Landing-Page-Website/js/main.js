document.addEventListener("DOMContentLoaded", function () {
  // --- AOS ANIMATION INIT (Sihirli Kısım) ---
  AOS.init({
    duration: 800, // Animasyon süresi (ms)
    offset: 150, // Tetikleme mesafesi
    delay: 100, // Gecikme
  });

  // --- NAVBAR MENU İŞLEMLERİ ---
  let menuBtn = document.querySelector("#menu-btn");
  let navbar = document.querySelector(".navbar");

  if (menuBtn) {
    menuBtn.onclick = () => {
      menuBtn.classList.toggle("fa-times");
      navbar.classList.toggle("active");
    };
  }

  window.onscroll = () => {
    if (menuBtn) {
      menuBtn.classList.remove("fa-times");
      navbar.classList.remove("active");
    }
  };

  // --- ACCORDION (SSS) ---
  let accordions = document.querySelectorAll(".accordion-container .accordion");

  accordions.forEach((accordion) => {
    let header = accordion.querySelector(".accordion-header");
    let body = accordion.querySelector(".accordion-body");

    if (header && body) {
      header.onclick = () => {
        header.classList.toggle("active");
        body.classList.toggle("active");

        if (header.classList.contains("active")) {
          body.style.maxHeight = body.scrollHeight + "px";
        } else {
          body.style.maxHeight = null;
        }
      };
    }
  });

  // --- MODAL (RESİM BÜYÜTME) ---
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

  /* --- DARK MODE --- */
  let themeBtn = document.querySelector("#theme-btn");

  if (themeBtn) {
    themeBtn.onclick = () => {
      themeBtn.classList.toggle("fa-sun");

      if (themeBtn.classList.contains("fa-sun")) {
        document.body.classList.add("dark");
        document.documentElement.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
        document.documentElement.classList.remove("dark");
      }
    };
  }

  /* --- WHATSAPP FORM GÖNDERİMİ --- */
  const form = document.getElementById("appointmentForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const location = document.getElementById("location").value;
      const serviceType = document.getElementById("service-type").value;
      const message = document.getElementById("message").value;

      const whatsappMessage = `Merhaba, web sitenizden yazıyorum.%0A%0A*İsim:* ${name}%0A*Telefon:* ${phone}%0A*Konum:* ${location}%0A*Hizmet:* ${serviceType}%0A*Not:* ${message}`;

      window.open(
        `https://wa.me/905423028403?text=${whatsappMessage}`,
        "_blank"
      );
    });
  }
});
