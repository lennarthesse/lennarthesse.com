<script>
    import NavBurger from "$lib/assets/icons/nav-burger.svelte";

    function toggleNav() {
        let navLinks = document.getElementById("js-navLinks");
        if (navLinks.classList.contains("hidden")) {
            navLinks.classList.remove("hidden");
        } else {
            navLinks.classList.add("hidden");
        }
    }

    function closeNav() {
        let navLinks = document.getElementById("js-navLinks");
        if (!(navLinks.classList.contains("hidden"))) {
            navLinks.classList.add("hidden");
        }
    }
</script>

<nav>
    <div class="nav-container">
        <div class="nav-buttons">
            <div class="nav-logo">
                <a href="/" on:click={closeNav}>
                    <img class="logo" src="/media/lennarthesse-white-text.svg" alt="Lennart Hesse">
                </a>
            </div>
            
            <button class="nav-burger" on:click={toggleNav}>
                <NavBurger />
            </button>
        </div>

        <div class="nav-links hidden" id="js-navLinks">
            <a href="/#leistungen" on:click={closeNav}>Leistungen</a>
            <a href="/#ablauf" on:click={closeNav}>Ablauf</a>
            <a href="/#portfolio" on:click={closeNav}>Portfolio</a>
            <a href="/#about" on:click={closeNav}>About</a>
            <a href="/blog/" on:click={closeNav}>Blog</a>
            <a href="/kontakt" on:click={closeNav}>Anfrage schicken</a>
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
                        <p><a href="/#about">About</a></p>
                        <p><a href="/blog/">Blog</a></p>
                        <p><a href="/kontakt/">Kontakt</a></p>
                        <p><a href="/impressum/">Impressum</a></p>
                        <p><a href="/datenschutz/">Datenschutz</a></p>
                    </div>
                </div>
                <div class="footer-contact">
                    <h1>Kontakt</h1>
                    <p>Lennart Hesse Design & Development</p>
                    <p>Potsdamer Straße 13 <br>
                        28211 Bremen <br>
                        Deutschland</p>
                    <p>Telefon: +49 176 39886008 <br>
                        E-Mail: info@lennarthesse.com <br>
                        Web: www.lennarthesse.com</p>
                </div>
            </div>

            <p class="copyright"><small>&copy; Lennart Hesse Design & Development</small></p>
        </section>
    </div>
</footer>