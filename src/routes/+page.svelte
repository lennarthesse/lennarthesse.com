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
            <div class="slide active">
                <div class="slide-thumbnail">
                    <button class="arrow-left">❮</button>
                    <img src="/media/office.jpg" alt="">
                    <button class="arrow-right">❯</button>
                </div>
                <div class="slide-body">
                    <h2>Company</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quam sint laborum minus ex nihil possimus velit rerum autem fuga? Saepe rerum explicabo error dicta reprehenderit quibusdam dolore voluptates ad?</p>
                </div>
            </div>
            <div class="slide">
                <img src="" alt="">
                <h2>Company</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In mollitia suscipit aliquam nostrum nulla cum ullam, soluta hic laborum debitis perspiciatis natus. Et delectus quam mollitia reprehenderit? Aliquid, dolores perferendis!</p>
            </div>
        </div>

    </section>
</div>

<section id="about">
    <h1>Über mich</h1>
    <div class="profile">
        <div class="profile-deco">
            <div class="profile-picture">
                <img src="/media/profile.jpg" alt="Lennart Hesse">
            </div>
        </div>
        <div class="profile-text">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit tempore corporis eaque, aperiam autem accusamus a voluptas libero esse officiis possimus soluta! Recusandae, assumenda pariatur voluptates atque eveniet provident neque?</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque reiciendis quia tempora soluta illum amet repellendus dolor dolore suscipit expedita. Consectetur adipisci veritatis perferendis doloribus nisi eos inventore nulla alias!</p>
            
        </div>
    </div>
</section>