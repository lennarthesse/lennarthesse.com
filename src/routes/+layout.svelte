<script>
    import NavBurger from "$lib/assets/icons/nav-burger.svelte";
    import ScrollTop from "$lib/assets/icons/scroll-top.svelte";

    let y = 0;

    function toggleNav() {
        let navLinks = document.getElementById("js-navLinks");
        let navBurger = document.getElementById("js-navBurger");
        if (navLinks.classList.contains("hidden")) {
            navLinks.classList.remove("hidden");
            navBurger.classList.add("crossed");
        } else {
            navLinks.classList.add("hidden");
            navBurger.classList.remove("crossed");
        }
    }

    function closeNav() {
        let navLinks = document.getElementById("js-navLinks");
        let navBurger = document.getElementById("js-navBurger");
        if (!(navLinks.classList.contains("hidden"))) {
            navLinks.classList.add("hidden");
            navBurger.classList.remove("crossed");
        }
    }

    function scrollTop() {
        document.documentElement.scrollTop = 0;
    }
</script>

<svelte:window bind:scrollY={y} />

<nav>
    <div class="nav-container">
        <div class="nav-buttons">
            <div class="nav-logo">
                <a href="/" on:click={closeNav}>
                    <img class="logo" src="/media/lennarthesse-white-text.svg" alt="Lennart Hesse">
                </a>
            </div>
            
            <button id="js-navBurger" class="nav-burger" on:click={toggleNav}>
                <NavBurger />
            </button>
        </div>

        <div id="js-navLinks" class="nav-links hidden">
            <a href="/#leistungen" on:click={closeNav}>Leistungen</a>
            <a href="/#ablauf" on:click={closeNav}>Ablauf</a>
            <a href="/#portfolio" on:click={closeNav}>Portfolio</a>
            <a href="/#about" on:click={closeNav}>Über mich</a>
            <a href="/blog/" on:click={closeNav}>Blog</a>
            <a class="button" href="/kontakt/" on:click={closeNav}>Anfrage schicken</a>
        </div>
    </div>
</nav>

<slot />

<footer>
    <div class="bg-primary">
        <section id="networks">
            <a href="https://www.xing.com/profile/Lennart_Hesse23" target="_blank"><i class="fa fa-xing"></i></a>
            <a href="https://www.github.com/lennarthesse" target="_blank"><i class="fa fa-github"></i></a>
            <a href="https://www.instagram.com/lennart0113/" target="_blank"><i class="fa fa-instagram"></i></a>
        </section>
    </div>
    
    <div class="bg-primary-dark">
        <section>
            <div class="footer-info">
                <div class="footer-links">
                    <h1>Links</h1>
                    <div class="links">
                        <p><a href="/#leistungen">Leistungen</a></p>
                        <p><a href="/#ablauf">Ablauf</a></p>
                        <p><a href="/#portfolio">Portfolio</a></p>
                        <p><a href="/#about">Über mich</a></p>
                        <p><a href="/blog/">Blog</a></p>
                        <p><a href="/kontakt/">Kontakt</a></p>
                        <p><a href="/impressum/">Impressum</a></p>
                        <p><a href="/datenschutz/">Datenschutz</a></p>
                    </div>
                </div>
                <div class="footer-contact">
                    <h1>Kontakt</h1>
                    <p>Lennart Hesse Design & Development</p>
                    <p>Potsdamer Straße 13<br>
                        28211 Bremen<br>
                        Deutschland</p>
                    <p>Telefon: <a href="tel:+4917639886008">+49 176 39886008</a><br>
                        E-Mail: <a href="mailto:info@lennarthesse.com">info@lennarthesse.com</a><br>
                        Web: <a href="https://lennarthesse.com">www.lennarthesse.com</a></p>
                </div>
            </div>

            <p class="copyright"><small>&copy; Lennart Hesse Design & Development</small></p>
        </section>
    </div>
</footer>

<div class="scroll-top" style="bottom: { y > '256' ? '0' : '-5rem'}; right: { y > '256' ? '0' : '-5rem'}">
    <button title="Nach oben" on:click={scrollTop}>
            <ScrollTop />
    </button>
</div>