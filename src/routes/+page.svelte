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
    <h1 class="underlined underlined-center"><i class="fa fa-desktop"></i> Web Development</h1>
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
    
    <h1 class="underlined underlined-center"><i class="fa fa-edit"></i> Corporate Design</h1>
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

<!--<section id="preise">
    <h1>Preise</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit tempore corporis eaque, aperiam autem accusamus a voluptas libero esse officiis possimus soluta! Recusandae, assumenda pariatur voluptates atque eveniet provident neque?</p>
</section>-->

<section id="ablauf">
    <h1>Der Ablauf</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit tempore corporis eaque, aperiam autem accusamus a voluptas libero esse officiis possimus soluta! Recusandae, assumenda pariatur voluptates atque eveniet provident neque?</p>

    <div class="timeline">
        <div class="event">
            <h2>Event</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat porro voluptate tempora quos iusto pariatur, voluptatem quibusdam illum placeat labore amet cupiditate quidem delectus, autem dicta neque enim odit.</p>
        </div>
        <div class="event">
            <h2>Event</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat porro voluptate tempora quos iusto pariatur, voluptatem quibusdam illum placeat labore amet cupiditate quidem delectus, autem dicta neque enim odit.</p>
        </div>
        <div class="event">
            <h2>Event</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat porro voluptate tempora quos iusto pariatur, voluptatem quibusdam illum placeat labore amet cupiditate quidem delectus, autem dicta neque enim odit.</p>
        </div>
        <div class="event">
            <h2>Event</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat porro voluptate tempora quos iusto pariatur, voluptatem quibusdam illum placeat labore amet cupiditate quidem delectus, autem dicta neque enim odit.</p>
        </div>
        <div class="event">
            <h2>Event</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat porro voluptate tempora quos iusto pariatur, voluptatem quibusdam illum placeat labore amet cupiditate quidem delectus, autem dicta neque enim odit.</p>
        </div>
    </div>
</section>

<div class="bg-primary-dark">
    <section class="divider">
        <h1>Portfolio</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit tempore corporis eaque, aperiam autem accusamus a voluptas libero esse officiis possimus soluta! Recusandae, assumenda pariatur voluptates atque eveniet provident neque?</p>
    </section>
</div>

<section id="about">
    <h1>Über mich</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit tempore corporis eaque, aperiam autem accusamus a voluptas libero esse officiis possimus soluta! Recusandae, assumenda pariatur voluptates atque eveniet provident neque?</p>
</section>