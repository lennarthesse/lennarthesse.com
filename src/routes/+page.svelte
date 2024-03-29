<script>
    import { onMount } from "svelte";
    import ScrollHint from "$lib/assets/icons/scroll-hint.svelte";
    import ColorPalette from "$lib/assets/icons/color-palette.svelte";
    import Typeface from "$lib/assets/icons/typeface.svelte";
    import Documents from "$lib/assets/icons/documents.svelte";
    import Business from "$lib/assets/icons/business.svelte";
    import Personal from "$lib/assets/icons/personal.svelte";
    import Logo from "$lib/assets/icons/logo.svelte";

    let bannerTitles = ["Landing Pages.", "Corporate Design.", "Personal Websites.", "Custom Logos.", "Business Websites."];
    let bannerTitle = "";

    let slideIndex = 0;
    
    onMount(() => {
        typeWrite();
    });
    

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

    function incrementSlide() {
        crementSlide(1);
    }

    function decrementSlide() {
        crementSlide(-1);
    }

    function crementSlide(i) {
        var thumbnails = document.getElementById("js-thumbnails").children;
        var descriptions = document.getElementById("js-descriptions").children;
        thumbnails[slideIndex].classList.remove("active");
        descriptions[slideIndex].classList.remove("active");
        slideIndex += i;
        if (slideIndex >= thumbnails.length) {
            slideIndex = 0;
        }
        if (slideIndex < 0) {
            slideIndex = thumbnails.length - 1;
        }
        thumbnails[slideIndex].classList.add("active");
        descriptions[slideIndex].classList.add("active");
    }
</script>

<svelte:head>
    <title>Lennart Hesse Design & Development</title>
</svelte:head>

<div id="banner" class="bg-primary-dark">
    <section>
        <h1>{bannerTitle}<noscript>Design & Development.</noscript> </h1>
        <hr>
        <p>Ob Firmenseite oder Portfolio, Logo oder Visitenkarte, hier sind Sie richtig!</p>
        <ScrollHint />
    </section>
</div>

<section id="leistungen">
    <h1>Web Development</h1>
    <div class="grid">
        <div class="grid-item">
            <Business />
            <div>
                <h2>Business Websites</h2>
                <p>Eine Firmenwebseite präsentiert Ihr Unternehmen im Internet. Dort können Sie alle wichtigen Informationen für Ihre Kunden bereithalten und ihnen eine leichte und moderne Kontaktaufnahme ermöglichen.</p>
                <p>Genau so können Sie eine Landing Page verwenden, um ein bestimmtes Produkt oder eine bestimmte Dienstleistung zu bewerben. Hier liegt der Fokus allein auf der angebotenen Leistung, um die Konversionsrate zu maximieren.</p>
            </div>
        </div>
        <div class="grid-item">
            <Personal />
            <div>
                <h2>Personal Websites</h2>
                <p>Als Privatperson oder Einzelunternehmer ist eine Webseite zur eigenen Person interessant. So kann man beispielsweise über Interessen und Hobbies erzählen oder Projekte wie Webanwendungen hosten.</p>
                <p>Einzelunternehmer oder Freelancer können außerdem in Form einer Portfolioseite ihre Fähigkeiten und Dienstleistungen auflisten und ihren Werdegang skizzieren. Das macht besonders bei potenziellen Arbeitgebern einen guten Eindruck und wirkt professionell.</p>
            </div>
        </div>
    </div>
    
    <h1>Corporate Design</h1>
    <div class="grid">
        <div class="grid-item">
            <Logo />
            <div>
                <h2>Logos</h2>
                <p>Das Logo ist das Aushängeschild eines Unternehmens und verkörpert die Unternehmensphilosophie. Es sollte einen großen Wiedererkennungswert haben und steht stellvertretend für das Unternehmen. Demnach lege ich einen besonders großen Wert darauf, ein professionelles und aussagekräftiges Logo mit hoher Qualität für Ihr Unternehmen zu entwerfen und zu gestalten.</p>
            </div>
        </div>
        <div class="grid-item">
            <ColorPalette />
            <div>
                <h2>Farbpaletten</h2>
                <p>Farben vermitteln ein starkes Bild und rufen Assoziationen in uns hervor. Daher ist es wichtig, die passende Farbpalette für Ihr Unternehmen zu wählen. Ich helfe dabei, die gewünschten Emotionen und Assoziationen festzustellen und entwerfe eine Farbpalette, die genau den richtigen Eindruck auf Ihre Kunden macht.</p>
            </div>
        </div>
        <div class="grid-item">
            <Typeface />
            <div>
                <h2>Schriftarten</h2>
                <p>Jede Schriftart hat ihren eigenen Charakter. Ob modern, elegant oder geometrisch, alle haben eine bestimmte Aussagekraft. Häufig wird dieser Aspekt vernachlässigt, doch gerade er rundet das Erscheinungsbild eines Unternehmens ab und lässt es professionell erscheinen.</p>
            </div>
        </div>
        <div class="grid-item">
            <Documents />
            <div>
                <h2>Unterlagen</h2>
                <p>Um die Firmenidentität auch in die analoge Welt zu bringen, ist es ratsam, eigenes Briefpapier sowie eigene Visitenkarten zu besitzen, um potenzielle Kunden zu gewinnen und das Unternehmensbild zu festigen. Daher biete ich auch die Gestaltung von Geschäftsunterlagen an und helfe auf Wunsch auch beim Druck.</p>
            </div>
        </div>
    </div>
    <a class="button" href="/kontakt/">Interesse geweckt?</a>
</section>

<section id="ablauf">
    <h1>Der Ablauf</h1>

    <div class="timeline">
        <div class="event">
            <div class="event-body">
                <h2>Kontaktanfrage schicken</h2>
                <p>Zuerst geben Sie an, welche Leistungen Sie benötigen. Dabei können Sie ganz einfach aus einer Liste ankreuzen oder bei Sonderwünschen eine Bemerkung hinzufügen. Danach hinterlassen Sie Ihre Kontaktdaten und ich melde mich alsbald mit einem Terminvorschlag zurück.</p>
            </div>
        </div>
        <div class="event">
            <div class="event-body">
                <h2>Erstgespräch</h2>
                <p>Hier klären wir zusammen Ihre genauen Wünsche und fertigen erste Skizzen an. Nachdem wir uns auf Inhalt und Umfang geeinigt haben, wird alles schriftlich festgehalten.</p>
            </div>
        </div>
        <div class="event">
            <div class="event-body">
                <h2>Präsentation des Konzepts</h2>
                <p>Wenn das Konzept ausgearbeitet ist, gibt es eine Präsentation, die alle Aspekte des Designs beinhaltet. Sie entscheiden, was Ihnen gefällt und was noch einmal überarbeitet werden soll.</p>
            </div>
        </div>
        <div class="event">
            <div class="event-body">
                <h2>Ausfertigung</h2>
                <p>Das Konzept wird verwirklicht. Dabei haben Sie stets die Möglichkeit, den Stand des Projekts einzusehen und gegebenenfalls Änderungen zu veranlassen.</p>
            </div>
        </div>
        <div class="event">
            <div class="event-body">
                <h2>Letzte Änderungen</h2>
                <p>Nachdem die Endversion fertiggestellt ist, gibt es eine abschließende Präsentation. Hier können Sie letzte Kleinigkeiten anpassen lassen, bevor das Projekt fertiggestellt wird.</p>
            </div>
        </div>
        <div class="event">
            <div class="event-body">
                <h2>Finales Produkt</h2>
                <p>Zuletzt findet die Übergabe und Einführung statt. Sie bekommen einen genauen Überblick über Dateien, Funktionen und Anwendung des Produkts.</p>
            </div>
        </div>
    </div>
    <a class="button" href="/kontakt/">Jetzt anfragen!</a>
</section>

<div class="bg-primary-dark">
    <section id="portfolio">
        <h1>Portfolio</h1>
        
        <div class="slideshow">
            <div class="slide-thumbnail">
                <button class="arrow-left" on:click={decrementSlide}>❮</button>
                <ul id="js-thumbnails" class="slide">
                    <li class="slide-item active">
                        <img src="/media/oetken.png" alt="Gebäudeservice Oetken">
                    </li>
                    <li class="slide-item">
                        <img src="/media/bunbau.jpg" alt="BUN Bau Briefpapier">
                    </li>
                    <li class="slide-item">
                        <img src="/media/pambia.jpg" alt="Pambia Haushaltswaren">
                    </li>
                </ul>
                <button class="arrow-right" on:click={incrementSlide}>❯</button>
            </div>
            <div class="slide-body">
                <ul id="js-descriptions" class="slide">
                    <li class="slide-item active">
                        <h2>Gebäudeservice Oetken</h2>
                        <p>Junges Unternehmen in der Gebäudereinigung mit Spezialisierung auf Fensterreinigung.</p>
                        <ul>
                            <li>Gestaltung des Firmenlogos</li>
                            <li>Auswahl der Schriftart</li>
                        </ul>
                    </li>
                    <li class="slide-item">
                        <h2>BUN Bau und Projekt&shy;entwicklung</h2>
                        <p>Ingenieurdienstleistungen wie Bauwerkerrichtung, &#8209;sanierung und mehr. </p>
                        <ul>
                            <li><p>Gestaltung des Firmenlogos</p></li>
                            <li><p>Gestaltung des Briefpapiers</p></li>
                            <li><p>Unterstützung beim Aufbau der digitalen Präsenz</p></li>
                        </ul>
                    </li>
                    <li class="slide-item">
                        <h2>Pambia Haushaltswaren</h2>
                        <p>Nachhaltige Haushaltswaren aus Bambus. Simpel und minimalistisch.</p>
                        <ul>
                            <li><p>Gestaltung der Logos</p></li>
                            <li><p>Auswahl der Schriftart und des Farbeschemas</p></li>
                            <li><p>Gestaltung des Briefpapiers und der Firmentasse</p></li>
                            <li><p>Programmierung der Webseite</p></li>
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
            <p>Schon als Jugendlicher habe ich mich für das Programmieren interessiert und erste kleine Programme und Webseiten geschrieben. Als ich älter wurde, fing ich außerdem an, Musik zu produzieren und sie auf YouTube hochzuladen, wodurch ich erste Erfahrungen im Bereich des Brandings und der Gestaltung machte.</p>
            <p>Nach der Schule habe ich ein Informatikstudium an der Universität Bremen begonnen und später zum Studiengang Medieninformatik an der Hochschule in Wernigerode gewechselt, um den kreativen Aspekt mehr einbringen zu können.</p>
            <p>In der Zwischenzeit arbeitete ich an verschiedenen Projekten, teils kleinere Spielereien für mich selbst, um mehr Erfahrungen zu sammeln, teils mit einem Kollegen, um mir ein wenig dazuzuverdienen. Infolgedessen entschloss ich mich, mein erstes eigenes Unternehmen zu gründen, um mir meine Fähigkeiten zu Nutze zu machen.</p>
            <p>Jetzt biete ich auf meiner Webseite Dienstleistungen rund um die Webpräsenz und Markengestaltung kleiner aufstrebender Unternehmen an und hoste einen kleinen Blog, in dem ich Anleitungen und Einblicke in einige meiner privaten Projekte gebe.</p>
        </div>
    </div>
</section>