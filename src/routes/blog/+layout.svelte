<script>
    import Search from "$lib/assets/icons/search.svelte";
    import { searchterm, filterCategory } from "$lib/stores.js"

    export let data;
    let { recentPosts } = data;
    let { categories } = data;
    let term = "";

    function search() {
        filterCategory.set("");
        searchterm.set(term);
    }

    function filter(category) {
        searchterm.set("");
        filterCategory.set(category);
    }
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
                                    <img src="/media/thumbnails/{post.slug}.jpg" alt="{post.slug}">
                                </div>
                                {post.title}
                            </div>
                        </a>
                    {/each}
                </div>
            </div>
        </div>
        <div class="card bg-light">
            <form action="/blog/" on:submit={search}>
                <div id="search">
                    <input bind:value={term} type="search" aria-label="Suche" placeholder="Suchen...">
                    <button type="submit">
                        <Search />
                    </button>
                </div>
            </form>
        </div>
        <div id="categories" class="card bg-light">
            <div class="body">
                <h2>Kategorien</h2>
                <form action="/blog/">
                    <button type="submit" on:click={() => {filter("");}}>Alle</button>
                    {#each categories as category}
                        <button type="submit" on:click={() => {filter(category);}}>{category}</button>
                    {/each}
                </form>
            </div>
        </div>
    </aside>
</section>