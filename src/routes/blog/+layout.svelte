<script>
    import Search from "$lib/assets/icons/search.svelte";

    export let data;
    let { recentPosts } = data;
</script>

<section class="blog main-aside">
    <main>
        <slot />
    </main>
    <aside>
        <div class="card bg-light">
            <div class="body">
                <h2>Beliebte Artikel</h2>
                <div id="recent-articles">
                    {#each recentPosts as post}
                        <hr>
                        <a href="/blog/{post.slug}">
                            <div class="recent-article">
                                <div>
                                    <img src="/thumbnails/{post.slug}.jpg" alt="{post.slug}">
                                </div>
                                {post.title}
                            </div>
                        </a>
                    {/each}
                </div>
            </div>
        </div>
        <div class="card bg-light">
            <form on:submit={() => {alert("hehe")}}>
                <div id="search">
                    <input type="search" aria-label="Suche" placeholder="Suchen...">
                    <button type="submit">
                        <Search />
                    </button>
                </div>
            </form>
        </div>
        <div class="card bg-light">
            <div class="body">
                <h2>Kategorien</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam, alias vero. Magnam tenetur voluptatum eius nesciunt asperiores numquam, sint neque similique corporis vero? Voluptatum quam sapiente facere error exercitationem tenetur.</p>
            </div>
        </div>
    </aside>
</section>