/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.setAttribute("aria-expanded", "false");

    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuButton.innerHTML = isOpen ? "✕" : "☰";

        menuButton.setAttribute("aria-expanded", isOpen);

    });

}


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
   ========================================================= */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

        if (menuButton) {
            menuButton.innerHTML = "☰";
            menuButton.setAttribute("aria-expanded", "false");
        }

    });

});


/* =========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener("click", (event) => {

    if (!menuButton || !navLinks) return;

    const clickedMenuButton = menuButton.contains(event.target);
    const clickedNavigation = navLinks.contains(event.target);

    if (!clickedMenuButton && !clickedNavigation) {

        navLinks.classList.remove("active");

        menuButton.innerHTML = "☰";

        menuButton.setAttribute("aria-expanded", "false");

    }

});


/* =========================================================
   RESET MOBILE MENU WHEN SCREEN RETURNS TO DESKTOP
   ========================================================= */

window.addEventListener("resize", () => {

    if (window.innerWidth > 800) {

        if (navLinks) {
            navLinks.classList.remove("active");
        }

        if (menuButton) {
            menuButton.innerHTML = "☰";
            menuButton.setAttribute("aria-expanded", "false");
        }

    }

});


/* =========================================================
   ABOUT PROFILE IMAGE
   Shows the existing round image ONLY on About
   ========================================================= */

const aboutSection = document.getElementById("about");
const aboutProfile = document.querySelector(".nav-profile");

if (aboutSection && aboutProfile) {

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    aboutProfile.classList.add("about-active");

                } else {

                    aboutProfile.classList.remove("about-active");

                }

            });

        },
        {
            threshold: 0.35
        }
    );

    observer.observe(aboutSection);

}