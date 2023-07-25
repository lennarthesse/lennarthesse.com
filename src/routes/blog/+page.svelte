<script>
    import { searchterm } from "$lib/stores.js"

    export let data;
    let { recentPosts } = data;

    let search;
    searchterm.subscribe((value) => {
        search = value;
    })
</script>

<svelte:head>
    <title>Blog | Lennart Hesse</title>
</svelte:head>

{#each recentPosts as post}
    <!-- !! come up with some smart expression to list relevant posts !! -->
    {#if search == "" || post.keywords.replace(/\s+/g, "").toLowerCase().split(",").includes(search.toLowerCase())}
        <a href="/blog/{post.slug}">
            <div class="post-preview card bg-light">
                <div class="thumbnail">
                    <img src="/thumbnails/{post.slug}.jpg" alt="{post.slug}">
                </div>
                <div class="body">
                    <header>
                        <h2>{post.title}</h2>
                        <small>{new Date(post.date).toLocaleDateString("de-DE", {day: "numeric", month: "long", year: "numeric"})}</small>
                    </header>
                    <p>{post.description}</p>    
                </div>
            </div>
        </a>
    {/if}
{/each}
