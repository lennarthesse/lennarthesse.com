<script>
    export let data;
    let { posts } = data;
</script>

<svelte:head>
    <title>Blog | Lennart Hesse</title>
</svelte:head>

<h1>Neue Artikel</h1>
{#each posts as post}
    <hr>
    <a href="/blog/{post.slug}">
    <div class="post-preview">
            <h1>{post.title}</h1>
            <p><small>{post.date} | {post.keywords}</small></p>
            <p>{post.description}</p>
        </div>
    </a>
{/each}
