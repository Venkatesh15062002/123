/* =====================================================
   I-WIN WEBSITE JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const mobileMenu =
    document.getElementById("mobileMenu");

const navLinks =
    document.getElementById("navLinks");


if (mobileMenu && navLinks) {

    mobileMenu.addEventListener(
        "click",
        function () {

            navLinks.classList.toggle("open");

            mobileMenu.textContent =
                navLinks.classList.contains("open")
                    ? "✕"
                    : "☰";

        }
    );

}


/* =====================================================
   DROPDOWN MENUS
===================================================== */

document
    .querySelectorAll(".dropdown-button")
    .forEach(function (button) {

        button.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                const dropdown =
                    button.closest(".dropdown");

                document
                    .querySelectorAll(".dropdown")
                    .forEach(function (item) {

                        if (item !== dropdown) {

                            item.classList.remove(
                                "open"
                            );

                        }

                    });

                dropdown.classList.toggle("open");

            }
        );

    });


/* =====================================================
   CLOSE DROPDOWNS
===================================================== */

document.addEventListener(
    "click",
    function () {

        document
            .querySelectorAll(".dropdown")
            .forEach(function (dropdown) {

                dropdown.classList.remove("open");

            });

    }
);


/* =====================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
===================================================== */

document
    .querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (navLinks) {

                    navLinks.classList.remove(
                        "open"
                    );

                }

                if (mobileMenu) {

                    mobileMenu.textContent =
                        "☰";

                }

            }
        );

    });


/* =====================================================
   MODALS
===================================================== */

const modals =
    document.querySelectorAll(".modal");


function openModal(id) {

    modals.forEach(function (modal) {

        modal.classList.remove("show");

    });


    const modal =
        document.getElementById(id);


    if (modal) {

        modal.classList.add("show");

        document.body.style.overflow =
            "hidden";

    }

}


function closeModal() {

    modals.forEach(function (modal) {

        modal.classList.remove("show");

    });

    document.body.style.overflow = "";

}


/* =====================================================
   OPEN MODALS
===================================================== */

document
    .querySelectorAll("[data-open-modal]")
    .forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const modalId =
                    button.getAttribute(
                        "data-open-modal"
                    );

                openModal(modalId);

            }
        );

    });


/* =====================================================
   CLOSE MODALS
===================================================== */

document
    .querySelectorAll("[data-close-modal]")
    .forEach(function (element) {

        element.addEventListener(
            "click",
            closeModal
        );

    });


/* =====================================================
   SWITCH LOGIN / SIGNUP
===================================================== */

document
    .querySelectorAll("[data-switch-modal]")
    .forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                const modalId =
                    button.getAttribute(
                        "data-switch-modal"
                    );

                openModal(modalId);

            }
        );

    });


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );

const formMessage =
    document.getElementById(
        "formMessage"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            if (formMessage) {

                formMessage.textContent =
                    "Thank you! Your enquiry has been received.";

            }


            contactForm.reset();

        }
    );

}


/* =====================================================
   SIGNUP FORM
===================================================== */

const signupForm =
    document.getElementById(
        "signupForm"
    );

const signupMessage =
    document.getElementById(
        "signupMessage"
    );


if (signupForm) {

    signupForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            if (signupMessage) {

                signupMessage.textContent =
                    "Account form submitted successfully.";

            }


            signupForm.reset();

        }
    );

}


/* =====================================================
   LOGIN FORM
===================================================== */

const loginForm =
    document.getElementById(
        "loginForm"
    );

const loginMessage =
    document.getElementById(
        "loginMessage"
    );


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            if (loginMessage) {

                loginMessage.textContent =
                    "Login form submitted successfully.";

            }


            loginForm.reset();

        }
    );

}


/* =====================================================
   CURRENT YEAR
===================================================== */

const year =
    document.getElementById(
        "year"
    );


if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navItems =
    document.querySelectorAll(
        ".nav-links > a"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            entry.isIntersecting
                        ) {

                            navItems.forEach(
                                function (link) {

                                    link.classList.remove(
                                        "active"
                                    );

                                }
                            );


                            const activeLink =
                                document.querySelector(
                                    '.nav-links a[href="#' +
                                    entry.target.id +
                                    '"]'
                                );


                            if (activeLink) {

                                activeLink.classList.add(
                                    "active"
                                );

                            }

                        }

                    }
                );

            },
            {
                rootMargin:
                    "-40% 0px -50% 0px"
            }
        );


    sections.forEach(
        function (section) {

            observer.observe(
                section
            );

        }
    );

}


/* =====================================================
   COLOR CARD HOVER EFFECT
===================================================== */

document
    .querySelectorAll(
        ".feature-box, .big-color-card"
    )
    .forEach(function (card) {

        card.addEventListener(
            "mouseenter",
            function () {

                card.style.cursor =
                    "pointer";

            }
        );

    });


/* =====================================================
   SMOOTH SCROLL
===================================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    link.getAttribute(
                        "href"
                    );


                if (
                    targetId === "#" ||
                    !targetId
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView({

                        behavior:
                            "smooth",

                        block:
                            "start"

                    });

                }

            }
        );

    });


/* =====================================================
   CLOSE MOBILE MENU AFTER DROPDOWN LINK CLICK
===================================================== */

document
    .querySelectorAll(
        ".dropdown-menu a"
    )
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                if (navLinks) {

                    navLinks.classList.remove(
                        "open"
                    );

                }


                if (mobileMenu) {

                    mobileMenu.textContent =
                        "☰";

                }

            }
        );

    });


/* =====================================================
   PREVENT MODAL BOX CLICK FROM CLOSING MODAL
===================================================== */

document
    .querySelectorAll(
        ".modern-login-box"
    )
    .forEach(function (box) {

        box.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

            }
        );

    });


/* =====================================================
   MODERN LOGIN - PASSWORD TOGGLE
===================================================== */

const togglePassword =
    document.getElementById("togglePassword");

const loginPassword =
    document.getElementById("loginPassword");


if (togglePassword && loginPassword) {

    togglePassword.addEventListener(
        "click",
        function () {

            if (loginPassword.type === "password") {

                loginPassword.type = "text";

                togglePassword.textContent =
                    "🙈";

            } else {

                loginPassword.type =
                    "password";

                togglePassword.textContent =
                    "👁";

            }

        }
    );

}


/* =====================================================
   END
===================================================== */