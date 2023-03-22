<script>
    import { onMount } from 'svelte';

    let bannerTitles = ["Landing Pages.", "Personal Websites.", "Corporate Design."];
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

<div id="banner" class="bg-primary">
    <section>
        <h1>{bannerTitle}</h1>
        <p>Egal ob persönlicher Blog, Portfolio, oder Landing Page, hier sind Sie richtig!</p>
    </section>
</div>

<section id="leistungen">
    <h1>Leistungen</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit tempore corporis eaque, aperiam autem accusamus a voluptas libero esse officiis possimus soluta! Recusandae, assumenda pariatur voluptates atque eveniet provident neque?</p>
</section>

<section id="preise">
    <h1>Preise</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit tempore corporis eaque, aperiam autem accusamus a voluptas libero esse officiis possimus soluta! Recusandae, assumenda pariatur voluptates atque eveniet provident neque?</p>
</section>

<div class="bg-primary-dark">
    <section class="divider">
        <h1>Content</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit tempore corporis eaque, aperiam autem accusamus a voluptas libero esse officiis possimus soluta! Recusandae, assumenda pariatur voluptates atque eveniet provident neque?</p>
    </section>
</div>

<section id="ablauf">
    <h1>Wie geht es weiter?</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit tempore corporis eaque, aperiam autem accusamus a voluptas libero esse officiis possimus soluta! Recusandae, assumenda pariatur voluptates atque eveniet provident neque?</p>
</section>

<section id="about">
    <h1>Über mich</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit tempore corporis eaque, aperiam autem accusamus a voluptas libero esse officiis possimus soluta! Recusandae, assumenda pariatur voluptates atque eveniet provident neque?</p>
</section>