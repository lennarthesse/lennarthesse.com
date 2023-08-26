<script>
    import { searchterm, filterCategory } from "$lib/stores.js"

    export let data;
    let { recentPosts } = data;
</script>

<svelte:head>
    <title>Blog | Lennart Hesse</title>
</svelte:head>

{#each recentPosts as post}
    <!-- !! come up with some smart expression to list relevant posts !! -->
    {#if ($searchterm == "" && $filterCategory == "") || ($searchterm == "" && post.categories.replace(/\s+/g, "").split(",").includes($filterCategory)) || ($filterCategory == "" && post.keywords.replace(/\s+/g, "").toLowerCase().split(",").includes($searchterm.toLowerCase()))}
        <a href="/blog/{post.slug}">
            <div class="post-preview card bg-light">
                <div class="thumbnail">
                    <img src="/media/thumbnails/{post.slug}.jpg" alt="{post.slug}">
                </div>
                <div class="body">
                    <header>
                        <h2>{post.title}</h2>
                        <small>
                            {new Date(post.date).toLocaleDateString("de-DE", {day: "numeric", month: "long", year: "numeric"})}
                        </small>
                        <div class="categories">
                            {#each post.categories.replace(/\s+/g, "").split(",") as category}
                            <div class="category">{category}</div>
                            {/each}
                        </div>
                    </header>
                    <p>{post.description}</p>    
                </div>
            </div>
        </a>
    {/if}
{/each}
