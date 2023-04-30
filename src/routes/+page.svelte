<script>
    import { onMount } from "svelte";
    import ScrollHint from "$lib/assets/icons/scroll-hint.svelte";
    import ColorPalette from "$lib/assets/icons/color-palette.svelte";

    let bannerTitles = ["Landing Pages.", "Personal Websites.", "Corporate Design.", "Custom Logos."];
    let bannerTitle = "";

    onMount(typeWrite);

    async function typeWrite() {
        let title = 0
        while (title < bannerTitles.length) {
            let index = 0;
            while (index < bannerTitles[title].length) {
                bannerTitle += bannerTitles[title].charAt(index);
                index++;
                await sleep(100);
            }
            await sleep(1000);
            while (index >= 0) {
                bannerTitle = bannerTitle.substring(0, index);
                index--;
                await sleep(50);
            }
            title = (title + 1) % bannerTitles.length;
            await sleep(250);
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
</script>

<svelte:head>
    <title>Lennart Hesse Design & Development</title>
</svelte:head>

<div id="banner" class="bg-primary-dark">
    <section>
        <h1>{bannerTitle}</h1>
        <hr>
        <p>Egal ob persönlicher Blog, Portfolio, oder Landing Page, hier sind Sie richtig!</p>
        <ScrollHint />
    </section>
</div>

<section id="leistungen">
    <h1>Web Development</h1>
    <div class="grid">
        <div class="grid-item">
            <ColorPalette />
            <div>
                <h2>Landing Pages</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, dolores magnam similique pariatur ea recusandae qui sunt natus laboriosam quisquam optio impedit totam nisi commodi maiores obcaecati perspiciatis! Aliquid, numquam.</p>
            </div>
        </div>
        <div class="grid-item">
            <ColorPalette />
            <div>
                <h2>Personal Websites</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod perferendis mollitia asperiores alias tempora inventore velit, quia pariatur similique. Libero, fugit. Et, nihil. Repudiandae, quis mollitia laboriosam soluta eaque rem!</p>
            </div>
        </div>
    </div>
    
    <h1>Corporate Design</h1>
    <div class="grid">
        <div class="grid-item">
            <ColorPalette />
            <div>
                <h2>Logos</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa deleniti officia explicabo soluta facere minima laudantium laborum! Quasi iste eveniet, aperiam ratione nisi cumque, itaque quo non quos maiores odio.</p>
            </div>
        </div>
        <div class="grid-item">
            <ColorPalette />
            <div>
                <h2>Farbpaletten</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa deleniti officia explicabo soluta facere minima laudantium laborum! Quasi iste eveniet, aperiam ratione nisi cumque, itaque quo non quos maiores odio.</p>
            </div>
        </div>
        <div class="grid-item">
            <ColorPalette />
            <div>
                <h2>Schriftarten</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa deleniti officia explicabo soluta facere minima laudantium laborum! Quasi iste eveniet, aperiam ratione nisi cumque, itaque quo non quos maiores odio.</p>
            </div>
        </div>
        <div class="grid-item">
            <ColorPalette />
            <div>
                <h2>Corporate Identity</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa deleniti officia explicabo soluta facere minima laudantium laborum! Quasi iste eveniet, aperiam ratione nisi cumque, itaque quo non quos maiores odio.</p>
            </div>
        </div>
    </div>
</section>

<section id="ablauf">
    <h1>Der Ablauf</h1>

    <div class="timeline">
        <div class="event">
            <h2>Event 1</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat porro voluptate tempora quos iusto pariatur, voluptatem quibusdam illum placeat labore amet cupiditate quidem delectus, autem dicta neque enim odit.</p>
        </div>
        <div class="event">
            <h2>Event 2</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat porro voluptate tempora quos iusto pariatur, voluptatem quibusdam illum placeat labore amet cupiditate quidem delectus, autem dicta neque enim odit.</p>
        </div>
        <div class="event">
            <h2>Event 3</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat porro voluptate tempora quos iusto pariatur, voluptatem quibusdam illum placeat labore amet cupiditate quidem delectus, autem dicta neque enim odit.</p>
        </div>
        <div class="event">
            <h2>Event 4</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat porro voluptate tempora quos iusto pariatur, voluptatem quibusdam illum placeat labore amet cupiditate quidem delectus, autem dicta neque enim odit.</p>
        </div>
        <div class="event">
            <h2>Event 5</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat porro voluptate tempora quos iusto pariatur, voluptatem quibusdam illum placeat labore amet cupiditate quidem delectus, autem dicta neque enim odit.</p>
        </div>
    </div>
</section>

<div class="bg-primary-dark">
    <section id="portfolio" class="divider">
        <h1>Portfolio</h1>
        
        <div class="slideshow">
            <div class="slide-thumbnail">
                <button class="arrow-left">❮</button>
                <ul class="slides">
                    <li class="slide active">
                        <img src="/media/office.jpg" alt="">        
                    </li>
                    <li class="slide">
                        <img src="/media/office.jpg" alt="">
                    </li>
                </ul>
                <button class="arrow-right">❯</button>
            </div>
            <div class="slide-body">
                <ul class="slides">
                    <li class="slide active">
                        <h2>BUN Bau und Projektentwicklung</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <ul>
                            <li>Gestaltung des Firmenlogos und Briefpapiers</li>
                            <li>Unterstützung beim Aufbau der digitalen Präsenz</li>
                        </ul>
                    </li>
                    <li class="slide">
                        <h2>Pambia Haushaltswaren</h2>
                        <p>Nachhaltige Bambuswaren. Simpel und minimalistisch.</p>
                        <ul>
                            <li><p>Gestaltung der Firmenidentität samt Logos, Schriftart, Farbeschema und Motto</p></li>
                            <li><p>Programmierung der Webseite</p></li>
                            <li><p>Hosten der Webseite</p></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</div>

<section id="about">
    <div class="profile">
        <div class="profile-deco">
            <div class="profile-picture">
                <img src="/media/profile.jpg" alt="Lennart Hesse">
            </div>
        </div>
        <div class="profile-text">
            <h1>Über mich</h1>
            <p>Schon als Jugendlicher habe ich mich für das Programmieren interessiert und erste kleine Programme und Webseiten geschrieben. Als ich älter wurde, fing ich außerdem an, Musik zu produzieren und sie auf YouTube hochzuladen, wodurch ich erste Erfahrungen im Bereich des Brandings und der allgemeinen Gestaltung machte.</p>
            <p>Nach der Schule habe ich ein Informatikstudium an der Universität Bremen begonnen und später zum Studiengang Medieninformatik an der Hochschule in Wernigerode gewechselt, um den kreativen Aspekt mehr einbringen zu können.</p>
            <p>In der Zwischenzeit arbeitete ich an verschiedenen Projekten, teils kleinere Spielereien für mich selbst, um mehr Erfahrungen zu sammeln, teils mit einem Kollegen, um mir ein Wenig dazu zu verdienen. Infolgedessen entschloss ich mich, mein erstes eigenes Unternehmen zu gründen, um meine Fähigkeiten zu Nutzen zu bringen.</p>
            <p>Jetzt biete ich auf meiner Webseite Dienstleistungen rund um die Webpräsenz und Markengestalung kleiner aufstrebender Unternehmen an und hoste einen kleinen Blog, in dem ich Anleitungen und Einblicke in einige meiner privaten Projekte gebe.</p>
        </div>
    </div>
</section>