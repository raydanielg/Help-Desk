<!DOCTYPE html>
<html class="light scroll-smooth" dir="ltr">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <meta content="HelpDesk - Online Ticket Support" name="description" />
    <meta name="website" content="https://w3bd.com" />
    <meta name="email" content="info@w3bd.com" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="shortcut icon" href="/favicon.png">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <!-- landing css -->
    <!-- Css -->
    <!-- Main Css -->
    <link rel="stylesheet" href="{{ asset('landing/css/tailwind.min.css') }}" />

    {{-- Inertia --}}
    <script src="https://polyfill.io/v3/polyfill.min.js?features=smoothscroll,NodeList.prototype.forEach,Promise,Object.values,Object.assign,String.prototype.startsWith" defer></script>


    <script src="{{ mix('/js/app.js') }}" defer></script>
    @routes
    @inertiaHead
</head>
<body class="font-inter text-base text-black dark:text-white dark:bg-slate-900">
    @inertia
</body>
<script>
    // ==== for menu scroll
    const pageLink = document.querySelectorAll(".ud-menu-scroll");

    pageLink.forEach((elem) => {
        elem.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(elem.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
                offsetTop: 1 - 60,
            });
        });
    });

    // section menu active
    function onScroll(event) {
        const sections = document.querySelectorAll(".ud-menu-scroll");
        const scrollPos =
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop;

        for (let i = 0; i < sections.length; i++) {
            const currLink = sections[i];
            const val = currLink.getAttribute("href");
            const refElement = document.querySelector(val);
            const scrollTopMinus = scrollPos + 73;
            if (
                refElement.offsetTop <= scrollTopMinus &&
                refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
            ) {
                document
                    .querySelector(".ud-menu-scroll")
                    .classList.remove("active");
                currLink.classList.add("active");
            } else {
                currLink.classList.remove("active");
            }
        }
    }

    window.document.addEventListener("scroll", onScroll);
</script>
<script>
    (function () {
        "use strict";

        // ======= Sticky
        window.onscroll = function () {
            const ud_header = document.querySelector(".ud-header");
            const sticky = ud_header.offsetTop;
            const logo = document.querySelector(".header-logo");

            if (window.pageYOffset > sticky) {
                ud_header.classList.add("sticky");
            } else {
                ud_header.classList.remove("sticky");
            }

            // === logo change
            if (ud_header.classList.contains("sticky")) {
                logo.src = "assets/images/logo/logo.svg";
            } else {
                logo.src = "assets/images/logo/logo-white.svg";
            }

            // show or hide the back-top-top button
            const backToTop = document.querySelector(".back-to-top");
            if (
                document.body.scrollTop > 50 ||
                document.documentElement.scrollTop > 50
            ) {
                backToTop.style.display = "flex";
            } else {
                backToTop.style.display = "none";
            }
        };

        // ===== responsive navbar
        let navbarToggler = document.querySelector("#navbarToggler");
        const navbarCollapse = document.querySelector("#navbarCollapse");

        navbarToggler.addEventListener("click", () => {
            navbarToggler.classList.toggle("navbarTogglerActive");
            navbarCollapse.classList.toggle("hidden");
        });

        //===== close navbar-collapse when a  clicked
        document
            .querySelectorAll("#navbarCollapse ul li:not(.submenu-item) a")
            .forEach((e) =>
                e.addEventListener("click", () => {
                    navbarToggler.classList.remove("navbarTogglerActive");
                    navbarCollapse.classList.add("hidden");
                })
            );

        // ===== Sub-menu
        const submenuItems = document.querySelectorAll(".submenu-item");
        submenuItems.forEach((el) => {
            el.querySelector("a").addEventListener("click", () => {
                el.querySelector(".submenu").classList.toggle("hidden");
            });
        });

        // ===== Faq accordion
        const faqs = document.querySelectorAll(".single-faq");
        faqs.forEach((el) => {
            el.querySelector(".faq-btn").addEventListener("click", () => {
                el.querySelector(".icon").classList.toggle("rotate-180");
                el.querySelector(".faq-content").classList.toggle("hidden");
            });
        });

        // ===== wow js
        new WOW().init();

        // ====== scroll top js
        function scrollTo(element, to = 0, duration = 500) {
            const start = element.scrollTop;
            const change = to - start;
            const increment = 20;
            let currentTime = 0;

            const animateScroll = () => {
                currentTime += increment;

                const val = Math.easeInOutQuad(currentTime, start, change, duration);

                element.scrollTop = val;

                if (currentTime < duration) {
                    setTimeout(animateScroll, increment);
                }
            };

            animateScroll();
        }

        Math.easeInOutQuad = function (t, b, c, d) {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        document.querySelector(".back-to-top").onclick = () => {
            scrollTo(document.documentElement);
        };
    })();

</script>
</html>
